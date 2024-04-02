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
import { Editor, useEditor } from '@tiptap/react';
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
import { getContentCtrlVImage, getContentImageMultipartData } from '@/utils/getImageMultipartData';

import { articleDataState, isSaved, pageDataState } from './states/atom';

interface TextEditorImportProps {
  pageType: string;
  currentState?: string;
  updatedArticleData?: UpdateArticleProps;
  pageData?: UpdatePageProps;
}

const TextEditorImport = (props: TextEditorImportProps) => {
  const { pageType, currentState, updatedArticleData, pageData } = props;
  const { team, articleId, pageId } = useParams();
  const pathName = usePathname();
  //atTop useState로 상위에서 내려주기 -> toolbox와 saveEditorButton 상태공유 위함!
  const [atTop, setAtTop] = useState(true);

  // sessionStorage
  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

  const [articleData, setArticleData] = useRecoilState(articleDataState); // 아티클 초기 타이틀 -> 복사 -> 새로운 title 갈아끼기
  const [{ title: pageTitle, content: pageContent }, setPageData] = useRecoilState(pageDataState);

  //이미지 담아두는 state
  const [, setImageSrc] = useState('');

  //이미지 배열 관리 상태 -> 서버에 보내기 위함
  const [imageArr, setImageArr] = useState<string[]>([]);
  const router = useRouter();

  //수정 api
  const draftArticleMutation = useUpdateTempArticleDraft(String(team));
  const draftPageMutation = useUpdateTempPageDraft(String(team));

  //articledata, pagedata 업데이트 된 상태 전역관리
  const [updatedPageData, setUpdatedPageData] = useRecoilState(pageDataState);

  const setIsSaved = useSetRecoilState(isSaved);

  const selectEditorContent = () => {
    if (pathName.startsWith(`/${team}/editor/article`)) {
      if (articleData.content) return articleData.content;
      if (updatedArticleData) return updatedArticleData.content;
    } else if (pathName.startsWith(`/${team}/editor/page`)) {
      if (pageContent) return pageContent;
      if (pageData) return pageData.content;
    }
    return '';
  };
  const editorContent = selectEditorContent();

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

  //링크 삽입 버튼
  const setLink = useCallback(
    ({ editor }: { editor: Editor }) => {
      const previousUrl = editor.getAttributes('link').href;
      const url = window.prompt('URL', previousUrl);

      if (url === null) {
        return;
      }

      if (url === '') {
        editor.chain().focus().extendMarkRange('link').unsetLink().run();

        return;
      }

      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    },
    [editor],
  );

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

  //content 페이지 최초 임시저장시 로직(1번 클릭 -> post 그 뒤 put으로)
  const handleOnDraftClickCount = () => {
    const isFirstClick = sessionStorage?.getItem(IS_FIRST_DRAFT_CLICK);

    if (isFirstClick === 'false') {
      pageType === 'article' ? handleDataArticleDraft() : handleDataPageDraft();
    } else {
      pageType === 'article' ? handleOnClickArticleDraft() : handleOnClickPageDraft();
      sessionStorage?.setItem(IS_FIRST_DRAFT_CLICK, 'false');
    }
  };

  // article page 임시저장시 post
  const handleOnClickArticleDraft = async () => {
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
        }
      } catch (error) {
        console.error('실패 에러임', error);
      }
    }
  };

  // page page 임시저장시 post
  const handleOnClickPageDraft = async () => {
    if (editor) {
      const content = editor.getHTML();

      setPageData((prev) => ({
        ...prev,
        content,
      }));

      try {
        const res = await postPageDraft(String(team), {
          title: pageTitle,
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
  };

  //article 임시저장 최초 Post후 임시저장시 임시저장put --> article 임시저장 수정하기의 임시저장
  const handleDataArticleDraft = () => {
    if (editor) {
      const newContent = editor.getHTML();

      setArticleData((prev) => ({
        ...prev,
        content: newContent,
      }));

      const dataArticleId = sessionStorage?.getItem(ARTICLE_DATA_ID);

      draftArticleMutation.mutate({
        ...articleData,
        id: Number(dataArticleId),
        title: articleData.title,
        content: newContent,
        images: imageArr,
        isPublish: false,
      });
    }
  };

  //article 임시저장시 임시저장put --> article 임시저장 수정하기의 임시저장
  const handleTempArticleDraft = () => {
    if (editor) {
      const content = editor.getHTML();

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
  };
  //page 임시저장 최초 Post후 임시저장시 임시저장put
  const handleDataPageDraft = () => {
    if (editor) {
      const newContent = editor.getHTML();

      setPageData((prev) => ({
        ...prev,
        content: newContent,
      }));

      const dataPageId = sessionStorage?.getItem(PAGE_DATA_ID);

      draftPageMutation.mutate({
        ...updatedPageData,
        id: Number(dataPageId),
        title: pageTitle,
        content: newContent,
        images: imageArr,
        isPublish: false,
      });
    }
  };

  //page 임시저장시 임시저장put
  const handleTempPageDraft = () => {
    if (editor) {
      const newContent = editor.getHTML();
      setPageData((prev) => ({
        ...prev,
        content: newContent,
      }));

      if (imageArr.length === 0) {
        draftPageMutation.mutate({
          ...updatedPageData,
          id: Number(pageId),
          title: pageTitle,
          content: newContent,
          images: [],
          isPublish: false,
        });
      } else {
        draftPageMutation.mutate({
          ...updatedPageData,
          id: Number(pageId),
          title: pageTitle,
          content: newContent,
          images: imageArr,
          isPublish: false,
        });
      }
    }
  };

  // article page 저장시 내용 가지고 발행하기 페이지로 이동-> article최초 발행하기
  const handleOnClickArticlePublish = () => {
    if (!document) return;
    if (editor) {
      const content = document.querySelector('[contenteditable="true"]')!.innerHTML;

      if (imageArr.length === 0) {
        setArticleData((prev) => ({ ...prev, title: articleData.title, content, images: [] }));
      } else {
        setArticleData((prev) => ({ ...prev, title: articleData.title, content, images: imageArr }));
      }
      router.push(`/${team}/editor/article/publish`);
    }
  };

  // page page 저장시 내용 가지고 발행하기 페이지로 이동
  const handleOnClickPagePublish = () => {
    if (editor) {
      const content = document.querySelector('[contenteditable="true"]')!.innerHTML;

      if (imageArr.length === 0) {
        setPageData((prev) => ({ ...prev, title: pageTitle, content, images: [] }));
      } else {
        setPageData((prev) => ({ ...prev, title: pageTitle, content, images: imageArr }));
      }
      router.push(`/${team}/editor/page/publish`);
    }
  };

  //article 수정시 발행하기로 내용가지고 이동
  const handleUpdateGoArticlePublish = () => {
    if (editor) {
      const content = editor.getHTML();
      if (imageArr.length === 0) {
        setArticleData((prevData) => ({
          ...prevData,
          title: articleData.title,
          content,
          images: [],
        }));
      } else {
        setArticleData((prevData) => ({
          ...prevData,
          title: articleData.title,
          content,
          images: imageArr,
        }));
      }

      router.push(`/${team}/editor/article/${articleId}/edit/publish`);
    }
  };

  // 페이지 수정시 발행페이지 이동
  const handleUpdateGoPagePublish = () => {
    if (editor) {
      const newContent = document.querySelector('[contenteditable="true"]')!.innerHTML;

      if (imageArr.length === 0) {
        setPageData((prevData) => ({
          ...prevData,
          title: pageTitle,
          content: newContent,
          images: [],
        }));
      } else {
        setPageData((prevData) => ({
          ...prevData,
          title: pageTitle,
          content: newContent,
          images: imageArr,
        }));
      }

      router.push(`/${team}/editor/page/${pageId}/edit/publish`);
    }
  };

  //article 임시저장 수정시 발행하기로 내용가지고 이동
  const handleUpdateDraftArticlePublish = () => {
    if (editor) {
      const content = editor.getHTML();
      if (imageArr.length === 0) {
        setArticleData((prevData) => ({
          ...prevData,
          title: articleData.title,
          content,
          images: [],
        }));
      } else {
        setArticleData((prevData) => ({
          ...prevData,
          title: articleData.title,
          content,
          images: imageArr,
        }));
      }

      router.push(`/${team}/editor/article/${articleId}/draft/publish`);
    }
  };

  //page 임시저장 수정시 발행하기로 내용가지고 이동
  const handleUpdateDraftPagePublish = () => {
    if (editor) {
      const newContent = document.querySelector('[contenteditable="true"]')!.innerHTML;

      if (imageArr.length === 0) {
        setPageData((prevData) => ({
          ...prevData,
          title: pageTitle,
          content: newContent,
          images: [],
        }));
      } else {
        setPageData((prevData) => ({
          ...prevData,
          title: pageTitle,
          content: newContent,
          images: imageArr,
        }));
      }

      router.push(`/${team}/editor/page/${pageId}/draft/publish`);
    }
  };

  return (
    <>
      <ToolBox
        editor={editor}
        encodeFileToBase64={encodeFileToBase64}
        setLink={setLink}
        atTop={atTop}
        setAtTop={setAtTop}
      />
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
          updatedArticleData={updatedArticleData}
          atTop={atTop}
          setAtTop={setAtTop}
          pageType="article"
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
          pageData={pageData}
          atTop={atTop}
          setAtTop={setAtTop}
          pageType="page"
        />
      )}
    </>
  );
};
export default TextEditorImport;
