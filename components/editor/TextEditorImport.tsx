'use client';
import React, { ChangeEvent, DragEvent, DragEventHandler, useCallback, useEffect, useState } from 'react';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import Heading from '@tiptap/extension-heading';
import History from '@tiptap/extension-history';
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
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { lowlight } from 'lowlight';
import { useParams, useRouter } from 'next/navigation';

import SaveEditorContentButton from '@/components/editor/ui/SaveEditorContentButton';

import css from 'highlight.js/lib/languages/css';

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);

import HorizontalRule from '@tiptap/extension-horizontal-rule';
import { useRecoilState } from 'recoil';

import { postArticleList } from '@/api/article';
import { postPageDraft } from '@/api/page';
import TextEditor from '@/components/editor/TextEditor';
import ToolBox from '@/components/editor/ui/ToolBox';
import { useUpdateTempArticleDraft, useUpdateTempPageDraft } from '@/hooks/editor';
import { UpdateArticleProps } from '@/types/article';
import { UpdatePageProps } from '@/types/page';
import { getContentImageMultipartData } from '@/utils/getImageMultipartData';

import { articleDataState, pageDataState } from './states/atom';

interface TextEditorBuildprops {
  pageType: string;
  currentState?: string;
  articleData?: UpdateArticleProps;
  pageData?: UpdatePageProps;
}

const TextEditorBuild = (props: TextEditorBuildprops) => {
  const { pageType, currentState, articleData, pageData } = props;
  const { team, articleId, pageId } = useParams();

  const [{ title: articleTitle }, setArticleData] = useRecoilState(articleDataState); // 아티클 초기 타이틀 -> 복사 -> 새로운 title 갈아끼기
  const [{ title: pageTitle }, setPageData] = useRecoilState(pageDataState);

  const [, setImageSrc] = useState('');
  const [extractedHTML, setExtractedHTML] = useState<string>('');
  const [imageArr, setImageArr] = useState<string[]>([]);
  const router = useRouter();
  const draftArticleMutation = useUpdateTempArticleDraft(team);
  const draftPageMutation = useUpdateTempPageDraft(team);
  const [updatedArticleData, setUpdatedArticleData] = useRecoilState(articleDataState);
  const [updatedPageData, setUpdatedPageData] = useRecoilState(pageDataState);

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
        HTMLAttributes: {
          class: 'my-custom-class',
        },
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
    content: articleData ? articleData.content : pageData ? pageData.content : '',
  });

  const encodeFileToBase64 = async (event: ChangeEvent<HTMLInputElement>, editor: Editor) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return null;
    }
    const file = files[0];
    const imgUrl = (await getContentImageMultipartData(file, team)) as string;
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
        const imgUrl = await getContentImageMultipartData(file, team);
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

  // article page 임시저장시 post
  const handleOnClickArticleDraft = () => {
    if (editor) {
      const content = editor.getHTML();
      setExtractedHTML(content);

      if (imageArr.length === 0) {
        postArticleList(team, { title: articleTitle, content, images: [] });
      } else {
        postArticleList(team, { title: articleTitle, content, images: imageArr });
      }
    }
  };

  // page page 임시저장시 post
  const handleOnClickPageDraft = () => {
    if (editor) {
      const content = editor.getHTML();
      setExtractedHTML(content);

      if (imageArr.length === 0) {
        postPageDraft(team, { title: pageTitle, content, images: [] });
      } else {
        postPageDraft(team, {
          title: pageTitle,
          content,
          images: imageArr,
        });
      }
    }
  };

  //article 임시저장시 임시저장put --> article 임시저장 수정하기의 임시저장
  const handleTempArticleDraft = () => {
    if (editor) {
      const newContent = editor.getHTML();
      setExtractedHTML(newContent);

      if (imageArr.length === 0) {
        draftArticleMutation.mutate({
          ...updatedArticleData,
          id: Number(articleId),
          title: articleTitle,
          content: newContent,
          images: [],
          isPublish: false,
        });
      } else {
        draftArticleMutation.mutate({
          ...updatedArticleData,
          id: Number(articleId),
          title: articleTitle,
          content: newContent,
          isPublish: false,
          images: imageArr,
        });
      }
      console.log('아아아앙', newContent);
    }
  };

  //page 임시저장시 임시저장put
  const handleTempPageDraft = () => {
    if (editor) {
      const newContent = editor.getHTML();
      setExtractedHTML(newContent);

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
      setExtractedHTML(content);

      if (imageArr.length === 0) {
        setArticleData((prev) => ({ ...prev, title: articleTitle, content, images: [] }));
      } else {
        setArticleData((prev) => ({ ...prev, title: articleTitle, content, images: imageArr }));
      }
      router.push(`/${team}/editor/article/publish`);
    }
  };

  // page page 저장시 내용 가지고 발행하기 페이지로 이동
  const handleOnClickPagePublish = () => {
    if (editor) {
      const content = document.querySelector('[contenteditable="true"]')!.innerHTML;
      setExtractedHTML(content);

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
      const newContent = document.querySelector('[contenteditable="true"]')!.innerHTML;
      setExtractedHTML(newContent);

      if (imageArr.length === 0) {
        setArticleData((prevData) => ({
          ...prevData,
          title: articleTitle,
          content: newContent,
          images: [],
        }));
      } else {
        setArticleData((prevData) => ({
          ...prevData,
          title: articleTitle,
          content: newContent,
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
      setExtractedHTML(newContent);

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
      const newContent = document.querySelector('[contenteditable="true"]')!.innerHTML;
      setExtractedHTML(newContent);

      if (imageArr.length === 0) {
        setArticleData((prevData) => ({
          ...prevData,
          title: articleTitle,
          content: newContent,
          images: [],
        }));
      } else {
        setArticleData((prevData) => ({
          ...prevData,
          title: articleTitle,
          content: newContent,
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
      setExtractedHTML(newContent);

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
      <ToolBox editor={editor} encodeFileToBase64={encodeFileToBase64} setLink={setLink} />
      <TextEditor editor={editor} handleDrop={handleDrop} handleDragOver={handleDragOver} />

      {pageType === 'article' ? (
        <SaveEditorContentButton
          handleOnClickDraft={currentState === 'draft' ? handleTempArticleDraft : handleOnClickArticleDraft}
          handleOnClickPublish={
            currentState === 'edit'
              ? handleUpdateGoArticlePublish
              : currentState === 'draft'
              ? handleUpdateDraftArticlePublish
              : handleOnClickArticlePublish
          }
          isEdit={currentState === 'edit' ? true : false}
          articleData={articleData}
          pageType="article"
        />
      ) : (
        <SaveEditorContentButton
          handleOnClickDraft={currentState === 'draft' ? handleTempPageDraft : handleOnClickPageDraft}
          handleOnClickPublish={
            currentState === 'edit'
              ? handleUpdateGoPagePublish
              : currentState === 'draft'
              ? handleUpdateDraftPagePublish
              : handleOnClickPagePublish
          }
          isEdit={currentState === 'edit' ? true : false} // edit이 아닌 경우는 draft 경우임
          pageData={pageData}
          pageType="page"
        />
      )}
    </>
  );
};
export default TextEditorBuild;
