'use client';
import React, {
  ChangeEvent,
  ClipboardEventHandler,
  DragEvent,
  DragEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import Heading from '@tiptap/extension-heading';
import History from '@tiptap/extension-history';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Image from '@tiptap/extension-image';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';
import { Editor, Extension, useEditor } from '@tiptap/react';
import javascript from 'highlight.js/lib/languages/javascript';
lowlight.registerLanguage('javascript', javascript);

import { debounce } from 'lodash-es';
import { lowlight } from 'lowlight/lib/core';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { postArticleList } from '@/api/article';
import { postPageDraft } from '@/api/page';
import TextEditor from '@/components/editor/TextEditor';
import SaveEditorContentButton from '@/components/editor/ui/SaveEditorContentButton';
import ToolBox from '@/components/editor/ui/ToolBox';
import { ARTICLE_DATA_ID, IS_FIRST_DRAFT_CLICK, PAGE_DATA_ID } from '@/constants/editor';
import { useUpdateTempArticleDraft, useUpdateTempPageDraft } from '@/hooks/editor';
import { UpdateArticleProps } from '@/types/article';
import { UpdatePageProps } from '@/types/page';
import { checkSessionStorage } from '@/utils/checkSessionStorage';
import { getContentCtrlVImage, getContentImageMultipartData } from '@/utils/getImageMultipartData';
import { createToast } from '@/utils/lib/toast';

import { articleDataState, isSaved, pageDataState } from './states/atom';

interface TextEditorImportProps {
  pageType: string;
  currentState?: string;
  updatedArticleData?: UpdateArticleProps;
  updatedPageData?: UpdatePageProps;
}

const TextEditorImport = (props: TextEditorImportProps) => {
  const { pageType, currentState, updatedArticleData, updatedPageData } = props;
  const { team, articleId, pageId } = useParams();
  const pathName = usePathname();
  //atTop useState로 상위에서 내려주기 -> toolbox와 saveEditorButton 상태공유 위함!
  const [atTop, setAtTop] = useState(true);

  // sessionStorage
  const sessionStorage = checkSessionStorage();

  const [articleData, setArticleData] = useRecoilState(articleDataState); // 아티클 초기 타이틀 -> 복사 -> 새로운 title 갈아끼기
  const [pageData, setPageData] = useRecoilState(pageDataState);
  const [prevData, setPrevData] = useState('');

  //이미지 담아두는 state
  const [, setImageSrc] = useState('');

  //이미지 배열 관리 상태 -> 서버에 보내기 위함
  const [imageArr, setImageArr] = useState<string[]>([]);
  const router = useRouter();

  //자동 임시저장 여부
  const [isDraftSave, setIsDraftSave] = useState(false);

  //수정 api
  const draftArticleMutation = useUpdateTempArticleDraft(String(team));
  const draftPageMutation = useUpdateTempPageDraft(String(team));

  const setIsSaved = useSetRecoilState(isSaved);

  const selectEditorContent = () => {
    if (pathName.startsWith(`/${team}/editor/article`)) {
      return articleData.content || (updatedArticleData && updatedArticleData.content);
    } else if (pathName.startsWith(`/${team}/editor/page`)) {
      return pageData.content || (updatedPageData && updatedPageData.content);
    }
    return '';
  };
  const editorContent = selectEditorContent();

  const draftSaveErrorNotify = createToast({
    type: 'ERROR',
    message: '임시 저장에 실패했습니다. 인터넷 연결을 확인해주세요.',
    id: 'error on draftSave editor',
  });

  //tap 공백 지정 커스텀 확장자
  const CustomTabSpace = Extension.create({
    name: 'customTabSpace',

    addKeyboardShortcuts() {
      return {
        Tab: () => {
          this.editor.chain().insertContent('    ').run();
          //true 반환해야 다른 동작 트리거 안함(tap의 역할 하나로 지정)
          return true;
        },
      };
    },
  });

  // tiptap 라이브러리 내장 에디터 관련 기능  extensions.
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      HorizontalRule,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Placeholder.configure({
        placeholder: '내용을 입력해주세요',
        showOnlyWhenEditable: false,
      }),
      ListItem,
      BulletList.configure({
        itemTypeName: 'listItem',
        keepMarks: true,
        keepAttributes: true,
      }),
      OrderedList,
      Underline,
      Bold,
      Strike,
      Italic,
      Code,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      CustomTabSpace,
      Blockquote,
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Dropcursor,
      Link.configure({
        protocols: ['ftp', 'mailto'],
        autolink: true,
        openOnClick: true,
        linkOnPaste: true,
      }),
      History.configure({
        depth: 10,
      }),
    ],
    content: editorContent,
    onUpdate() {
      setIsSaved(false);
    },
  });

  const isChanged = () => {
    if (pageType === 'article') {
      return articleData.title !== updatedArticleData?.title;
    } else {
      return pageData.title !== updatedPageData?.title || pageData.content !== updatedPageData?.content;
    }
  };
  console.log(articleData.title, 'ㅇㅇ', prevData);

  const titleSelect = () => {
    if (pageType === 'article') {
      return articleData.title;
    } else {
      return pageData.title;
    }
  };

  useEffect(() => {
    if (!editor) {
      return;
    }

    const dd = editor.getHTML();
    setPrevData(dd);

    const isDraftSaveAllowed = () => {
      if (pageType === 'article') {
        return articleData.title || !editor.isEmpty;
      } else {
        return pageData.title || !editor.isEmpty;
      }
    };

    //자동저장시 에디터 컨트롤 함수
    const handleInput = debounce(() => {
      if (isDraftSaveAllowed() && isChanged()) {
        setIsDraftSave(true);
        handleOnDraftAutoSave();
      } else if (!isChanged()) {
        setIsDraftSave(false);
      } else {
        setIsDraftSave(false);
      }
    }, 10000);

    console.log(updatedArticleData?.title, '받은 데이터', updatedArticleData?.content);
    console.log(articleData.title, '먀먀먀', prevData); // 왜 여기서는 content안들어옴? 미틴놈임?

    //자동저장시 문구 새로운 변경시 사라지게 하려면 필요 (에디터용)
    const handleInputChange = () => {
      setIsDraftSave(false);
    };

    //자동저장시 제목 컨트롤 함수
    const titleAutoSave = debounce((title) => {
      if (title && isChanged()) {
        setIsDraftSave(true);
        handleOnDraftAutoSave();
      } else if (!isChanged()) {
        setIsDraftSave(false);
      }
    }, 10000);

    //자동저장 함수실행
    editor.on('update', handleInput);
    editor.on('update', handleInputChange);
    titleAutoSave(titleSelect());

    // 함수 호출 취소 -> 안하면 무한호출
    return () => {
      setIsDraftSave(false);
      handleInput.cancel();
      titleAutoSave.cancel();
      editor.off('update', handleInput);
      editor.off('update', handleInputChange);
    };
  }, [editor, articleData.title, pageData.title]);

  //이미지 버튼 파일 base64 인코딩
  const encodeFileToBase64 = async (event: ChangeEvent<HTMLInputElement>, editor: Editor) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return null;
    }
    const file = files[0];
    const imgUrl = (await getContentImageMultipartData(file, String(team))) as string;
    setImageArr((prev) => [...prev, imgUrl]);

    const reader = new FileReader();
    reader.onload = () => {
      editor.chain().focus().setImage({ src: imgUrl }).run(); // 이미지 데이터 업데이트
    };
    reader.readAsDataURL(file);
  };

  //이미지 복붙
  const ctrlVImage: ClipboardEventHandler<HTMLInputElement> = useCallback(async () => {
    const base64ImgElements = document.querySelector('img[src*="base64"]');

    const base64eArr = base64ImgElements?.getAttribute('src');
    base64ImgElements?.remove();

    const transImage = async () => {
      if (!editor || !base64eArr) {
        return null;
      }
      const blob = await fetch(base64eArr).then((res) => res.blob());

      // Blob을 파일로 변환
      const file = new File([blob], 'image.png', { type: 'image/png' });

      // 이미지 서버 통신 코드
      const imgUrl = await getContentCtrlVImage(file, String(team));

      imageArr.push(imgUrl);
      if (imgUrl) {
        editor.chain().focus().setImage({ src: imgUrl }).run();
      }
    };
    await transImage();
  }, [editor, setImageSrc]);

  //이미지 drag & drop
  const handleDrop: DragEventHandler<HTMLDivElement> = useCallback(
    async (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!editor) {
        return;
      }

      const files = event.dataTransfer.files;
      if (files.length > 0) {
        const file = files[0];
        const imgUrl = await getContentImageMultipartData(file, String(team));
        imageArr.push(imgUrl);

        editor.chain().focus().setImage({ src: imgUrl }).run(); // 이미지를 에디터에 삽입
      }
    },
    [editor, setImageSrc],
  );

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  if (!editor) {
    return null;
  }

  // //임시저장 자동 저장시 함수
  function handleOnDraftAutoSave() {
    const isFirstClick = sessionStorage?.getItem(IS_FIRST_DRAFT_CLICK);
    if (pathName.startsWith(`/${team}/editor/article/${articleId}/draft` || `/${team}/editor/page/${pageId}/draft`)) {
      pageType === 'article' ? handleTempArticleDraft() : handleTempPageDraft();
    } else if (
      pathName.startsWith(`/${team}/editor/article/${articleId}/edit` || `/${team}/editor/page/${pageId}/edit`)
    ) {
      setIsDraftSave(false);
    } else {
      if (isFirstClick === 'false') {
        pageType === 'article' ? handleDataArticleDraft() : handleDataPageDraft();
      } else {
        pageType === 'article' ? handleOnClickArticleDraft() : handleOnClickPageDraft();
        sessionStorage?.setItem(IS_FIRST_DRAFT_CLICK, 'false');
      }
    }
  }

  function handleOnDraftClickCount() {
    const isFirstClick = sessionStorage?.getItem(IS_FIRST_DRAFT_CLICK);

    if (isFirstClick === 'false') {
      pageType === 'article' ? handleDataArticleDraft() : handleDataPageDraft();
    } else {
      pageType === 'article' ? handleOnClickArticleDraft() : handleOnClickPageDraft();
      sessionStorage?.setItem(IS_FIRST_DRAFT_CLICK, 'false');
    }
  }

  // article page 임시저장시 post
  const handleOnClickArticleDraft = async () => {
    try {
      if (editor) {
        const content = editor.getHTML();
        setArticleData((prev) => ({
          ...prev,
          content,
        }));

        try {
          const res = await postArticleList(String(team), {
            title: articleData.title,
            content,
            images: imageArr,
          });

          const articleId = res.data;
          if (articleId) {
            sessionStorage?.setItem(ARTICLE_DATA_ID, articleId);
            setIsDraftSave(true);
          }
        } catch (error) {
          console.error('실패 에러임', error);
        }
      }
    } catch (err) {
      draftSaveErrorNotify();
    }
  };

  // page page 임시저장시 post
  const handleOnClickPageDraft = async () => {
    try {
      if (editor) {
        const content = editor.getHTML();

        setPageData((prev) => ({
          ...prev,
          content,
        }));

        try {
          const res = await postPageDraft(String(team), {
            title: pageData.title,
            content,
            images: imageArr,
          });

          const pageId = res.data;
          if (pageId) {
            sessionStorage?.setItem(PAGE_DATA_ID, pageId);
          }
        } catch (error) {
          console.error('실패 에러임', error);
        }
      }
    } catch (err) {
      draftSaveErrorNotify();
    }
  };

  //article 임시저장 최초 Post후 임시저장시 임시저장put --> article 임시저장 수정하기의 임시저장
  const handleDataArticleDraft = () => {
    try {
      if (editor) {
        const content = editor.getHTML();

        setArticleData((prev) => ({
          ...prev,
          content,
        }));

        const dataArticleId = sessionStorage?.getItem(ARTICLE_DATA_ID);

        draftArticleMutation.mutate({
          ...articleData,
          id: Number(dataArticleId),
          title: articleData.title,
          content,
          images: imageArr,
          isPublish: false,
        });
      }
    } catch (error) {
      draftSaveErrorNotify();
    }
  };

  //article 임시저장시 임시저장put --> article 임시저장 수정하기의 임시저장
  const handleTempArticleDraft = () => {
    try {
      if (editor) {
        const content = editor.getHTML();

        setArticleData((prev) => ({
          ...prev,
          content,
        }));

        if (imageArr.length === 0) {
          draftArticleMutation.mutate({
            ...articleData,
            id: Number(articleId),
            title: articleData.title,
            content,
            images: [],
            isPublish: false,
          });
        } else {
          draftArticleMutation.mutate({
            ...articleData,
            id: Number(articleId),
            title: articleData.title,
            content,
            isPublish: false,
            images: imageArr,
          });
        }
      }
    } catch (err) {
      draftSaveErrorNotify();
    }
  };
  //page 임시저장 최초 Post후 임시저장시 임시저장put
  const handleDataPageDraft = () => {
    try {
      if (editor) {
        const content = editor.getHTML();

        setPageData((prev) => ({
          ...prev,
          content,
        }));

        const dataPageId = sessionStorage?.getItem(PAGE_DATA_ID);

        draftPageMutation.mutate({
          ...pageData,
          id: Number(dataPageId),
          title: pageData.title,
          content,
          images: imageArr,
          isPublish: false,
        });
      }
    } catch (err) {
      draftSaveErrorNotify();
    }
  };

  //page 임시저장시 임시저장put
  const handleTempPageDraft = () => {
    try {
      if (editor) {
        const content = editor.getHTML();
        setPageData((prev) => ({
          ...prev,
          content,
        }));

        if (imageArr.length === 0) {
          draftPageMutation.mutate({
            ...pageData,
            id: Number(pageId),
            title: pageData.title,
            content,
            images: [],
            isPublish: false,
          });
        } else {
          draftPageMutation.mutate({
            ...pageData,
            id: Number(pageId),
            title: pageData.title,
            content,
            images: imageArr,
            isPublish: false,
          });
        }
      }
    } catch (err) {
      draftSaveErrorNotify();
    }
  };

  //업데이트 중복함수 정리
  const updateDataRouterChange = (content: string, id: number | null, path: string) => {
    const dataSave = { title: pageType === 'article' ? articleData.title : pageData.title, content, images: imageArr };

    if (pageType === 'article') {
      setArticleData((prev) => ({ ...prev, ...dataSave }));
    } else {
      setPageData((prev) => ({
        ...prev,
        ...dataSave,
      }));
    }

    router.push(`/${team}/editor/${path}`);
  };

  // article page 저장시 내용 가지고 발행하기 페이지로 이동-> article 최초 발행하기
  const handleOnClickArticlePublish = () => {
    if (!document || !editor) return;
    const content = editor.getHTML();
    updateDataRouterChange(content, null, 'article/publish');
  };

  // page page 저장시 내용 가지고 발행하기 페이지로 이동 -> page 최초 발행
  const handleOnClickPagePublish = () => {
    if (!editor) return;
    const content = editor.getHTML();
    updateDataRouterChange(content, null, 'page/publish');
  };

  //article 수정시 발행하기로 내용가지고 이동
  const handleUpdateGoArticlePublish = () => {
    if (!editor) return;
    const content = editor.getHTML();
    updateDataRouterChange(content, Number(articleId), `article/${articleId}/edit/publish`);
  };

  // page 수정시 발행페이지 이동
  const handleUpdateGoPagePublish = () => {
    if (!editor) return;
    const content = editor.getHTML();
    updateDataRouterChange(content, Number(pageId), `page/${pageId}/edit/publish`);
  };

  //article 임시저장 수정시 발행하기로 내용가지고 이동
  const handleUpdateDraftArticlePublish = () => {
    if (!editor) return;
    const content = editor.getHTML();
    updateDataRouterChange(content, Number(articleId), `article/${articleId}/draft/publish`);
  };

  //page 임시저장 수정시 발행하기로 내용가지고 이동
  const handleUpdateDraftPagePublish = () => {
    if (!editor) return;
    const content = editor.getHTML();
    updateDataRouterChange(content, Number(pageId), `page/${pageId}/draft/publish`);
  };

  return (
    <>
      <ToolBox editor={editor} encodeFileToBase64={encodeFileToBase64} atTop={atTop} setAtTop={setAtTop} />
      <TextEditor editor={editor} handleDrop={handleDrop} handleDragOver={handleDragOver} ctrlVImage={ctrlVImage} />

      {pageType === 'article' ? (
        <SaveEditorContentButton
          handleOnClickDraft={currentState === 'draft' ? handleTempArticleDraft : handleOnDraftClickCount}
          handleOnClickPublish={
            currentState === 'edit'
              ? handleUpdateGoArticlePublish
              : currentState === 'draft'
              ? handleUpdateDraftArticlePublish
              : handleOnClickArticlePublish
          }
          isEdit={currentState === 'edit' ? true : false}
          atTop={atTop}
          setAtTop={setAtTop}
          pageType="article"
          isDraftSave={isDraftSave}
          setIsDraftSave={setIsDraftSave}
        />
      ) : (
        <SaveEditorContentButton
          handleOnClickDraft={currentState === 'draft' ? handleTempPageDraft : handleOnDraftClickCount}
          handleOnClickPublish={
            currentState === 'edit'
              ? handleUpdateGoPagePublish
              : currentState === 'draft'
              ? handleUpdateDraftPagePublish
              : handleOnClickPagePublish
          }
          isEdit={currentState === 'edit' ? true : false} // edit이 아닌 경우는 draft 경우임
          atTop={atTop}
          setAtTop={setAtTop}
          pageType="page"
          isDraftSave={isDraftSave}
          setIsDraftSave={setIsDraftSave}
        />
      )}
    </>
  );
};
export default TextEditorImport;
