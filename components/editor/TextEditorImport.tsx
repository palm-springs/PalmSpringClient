'use client';
import React, { ChangeEvent, DragEvent, DragEventHandler, useCallback, useEffect, useState } from 'react';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Dropcursor from '@tiptap/extension-dropcursor';
import Heading from '@tiptap/extension-heading';
import Image from '@tiptap/extension-image';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import Underline from '@tiptap/extension-underline';
import { Content, Editor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
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

import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { getUpdateArticleContent, postArticleList } from '@/api/article';
import { postPageDraft } from '@/api/page';
import TextEditor from '@/components/editor/TextEditor';
import ToolBox from '@/components/editor/ui/ToolBox';
import { useGetUpdateArticleContent, useUpdateArticleContent } from '@/hooks/editor';
import { UpdateArticleContentProps, UpdateArticleProps } from '@/types/article';
import { UpdatePageProps } from '@/types/page';
import { getImageMultipartData } from '@/utils/getImageMultipartData';

import { articleDataState, newArticleDataState, pageDataState } from './states/atom';
interface TextEditorBuildprops {
  pageType: string;
  currentState?: string;
  articleData?: UpdateArticleProps;
  pageData?: UpdatePageProps;
}

const TextEditorBuild = (props: TextEditorBuildprops) => {
  const { pageType, currentState, articleData, pageData } = props;
  const { team, articleId } = useParams();
  const [{ title }, setArticleData] = useRecoilState(articleDataState);
  const [{ title: pageTitle }, setPageData] = useRecoilState(pageDataState);
  const [{ title: newArticleTitle }, setNewArticleData] = useRecoilState(newArticleDataState);
  const [updatedArticleData, setUpdatedArticleData] = useRecoilState(newArticleDataState);
  const updateArticleMutation = useUpdateArticleContent(team);

  const [, setImageSrc] = useState('');
  const [extractedHTML, setExtractedHTML] = useState<string>('');
  const [imageArr, setImageArr] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    console.log(imageArr);
  }, [imageArr]);

  // tiptap 라이브러리 내장 에디터 관련 기능 extentions.
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: '내용을 입력해주세요',
      }),
      Heading.configure({
        levels: [1, 2, 3],
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
    ],
    content: articleData ? articleData.content : pageData ? pageData.content : '',
  });
  const encodeFileToBase64 = async (event: ChangeEvent<HTMLInputElement>, editor: Editor) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return null;
    }
    const file = files[0];
    const imgUrl = (await getImageMultipartData(file)) as string;
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
        const imgUrl = await getImageMultipartData(file);
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
        postArticleList(team, { title, content, images: [] });
      } else {
        postArticleList(team, { title, content, images: imageArr });
      }
    }
  };

  // page page 임시저장시 post
  const handleOnClickPageDraft = () => {
    if (editor) {
      const content = editor.getHTML();
      setExtractedHTML(content);

      console.log(imageArr);
      console.log(imageArr.length);

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

  // article page 저장시 내용 가지고 발행하기 페이지로 이동
  const handleOnClickArticlePublish = () => {
    if (editor) {
      const content = editor.getHTML();
      setExtractedHTML(content);

      if (imageArr.length === 0) {
        setArticleData((prev) => ({ ...prev, title, content, images: [] }));
      } else {
        setArticleData((prev) => ({ ...prev, title, content, images: imageArr }));
      }
      router.push(`/${team}/editor/article/publish`);
    }
  };

  // page page 저장시 내용 가지고 발행하기 페이지로 이동
  const handleOnClickPagePublish = () => {
    if (editor) {
      const content = editor.getHTML();
      setExtractedHTML(content);

      if (imageArr.length === 0) {
        setPageData((prev) => ({ ...prev, title: pageTitle, content, images: [] }));
      } else {
        setPageData((prev) => ({ ...prev, title: pageTitle, content, images: imageArr }));
      }
      router.push(`/${team}/editor/page/publish`);
    }
  };

  //article 수정시 !
  const handleUpdateArticleContent = () => {
    if (editor) {
      const newContent = editor.getHTML();
      setExtractedHTML(newContent);

      if (imageArr.length === 0) {
        setUpdatedArticleData((prevData) => ({
          ...prevData,
          title: newArticleTitle,
          content: newContent,
          images: [],
        }));
      } else {
        setUpdatedArticleData((prevData) => ({
          ...prevData,
          title: newArticleTitle,
          content: newContent,
          images: imageArr,
        }));
      }

      // updateArticleMutation.mutate(updatedArticleData);
      console.log(updatedArticleData);
      console.log(imageArr);
      router.push(`/${team}/editor/article/edit/${articleId}/publish`);
    }
  };

  return (
    <>
      <ToolBox editor={editor} encodeFileToBase64={encodeFileToBase64} setLink={setLink} />
      <TextEditor editor={editor} handleDrop={handleDrop} handleDragOver={handleDragOver} />

      {pageType === 'article' ? (
        <SaveEditorContentButton
          handleOnClickDraft={
            currentState === 'draft'
              ? handleOnClickArticleDraft
              : currentState === 'edit'
              ? handleOnClickArticleDraft
              : handleOnClickArticleDraft
          }
          handleOnClickPublish={currentState === 'edit' ? handleOnClickArticlePublish : handleOnClickArticlePublish}
          isEdit={currentState === 'edit' ? true : false}
        />
      ) : (
        <SaveEditorContentButton
          handleOnClickDraft={
            currentState === 'draft'
              ? handleOnClickPageDraft
              : currentState === 'edit'
              ? handleOnClickPageDraft
              : handleOnClickPageDraft
          }
          handleOnClickPublish={currentState === 'edit' ? handleOnClickPagePublish : handleOnClickPagePublish}
          isEdit={currentState === 'edit' ? true : false}
        />
      )}
    </>
  );
};
export default TextEditorBuild;
