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
import { Editor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { lowlight } from 'lowlight';
import { useParams, useRouter } from 'next/navigation';

import SaveArticleButton from '@/components/editor/article/ui/SaveArticleButton';

import css from 'highlight.js/lib/languages/css';

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);

// import ScrollTopToolbar from '@/components/editor/article/publish/ScrollTopToolbar';

import { useRecoilState } from 'recoil';

import { postArticleList } from '@/api/article';
import { postPageDraft } from '@/api/page';
import ToolBox from '@/components/editor/article/ui/ToolBox';
import TextEditor from '@/components/editor/TextEditor';
import { getImageMultipartData } from '@/utils/getImageMultipartData';

import { articleDataState, pageDataState } from './article/states/atom';
interface TextEditorBuildprops {
  pageType: string;
}

const TextEditorBuild = (props: TextEditorBuildprops) => {
  const { pageType } = props;
  const [{ title }, setArticleData] = useRecoilState(articleDataState);
  const [{ title: pageTitle }, setPageData] = useRecoilState(pageDataState);
  const { team } = useParams();

  const [, setImageSrc] = useState('');
  const [extractedHTML, setExtractedHTML] = useState<string>('');
  const [imageArr, setImageArr] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    console.log(imageArr);
  }, [imageArr]);

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
    content: '',
  });

  const encodeFileToBase64 = async (event: ChangeEvent<HTMLInputElement>, editor: Editor) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return null;
    }
    const file = files[0];
    const imgUrl = (await getImageMultipartData(file)) as string;
    console.log(imgUrl);
    setImageArr((prev) => [...prev, imgUrl]);
    console.log(imageArr);

    const reader = new FileReader();
    reader.onload = () => {
      editor.chain().focus().setImage({ src: imgUrl }).run(); // 이미지 데이터 업데이트
    };
    reader.readAsDataURL(file);
  };

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

  // post onchange, onclick 함수.

  const handleOnClickDraft = () => {
    if (editor) {
      const content = editor.getHTML();
      setExtractedHTML(content);

      if (imageArr.length === 0) {
        postArticleList('helloworld', { title, content, images: null });
      } else {
        postArticleList('helloworld', { title, content, images: imageArr });
      }
    }
  };

  const handleOnClickPageDraft = () => {
    if (editor) {
      const content = editor.getHTML();
      setExtractedHTML(content);

      console.log(imageArr);
      console.log(imageArr.length);

      if (imageArr.length === 0) {
        postPageDraft('helloworld', { title: pageTitle, content, images: null });
      } else {
        postPageDraft('helloworld', {
          title: pageTitle,
          content,
          images: imageArr,
        });
      }
    }
  };

  const handleOnClickPublish = () => {
    if (editor) {
      const content = editor.getHTML();
      setExtractedHTML(content);

      if (imageArr.length === 0) {
        setPageData((prev) => ({ ...prev, title, content, image: null }));
      } else {
        setPageData((prev) => ({ ...prev, title, content, image: imageArr }));
      }
      router.push('/${team}/editor/article/publish');
    }
  };

  const handleOnClickPagePublish = () => {
    if (editor) {
      const content = editor.getHTML();
      setExtractedHTML(content);

      if (imageArr.length === 0) {
        setPageData((prev) => ({ ...prev, title: pageTitle, content, image: null }));
      } else {
        setPageData((prev) => ({ ...prev, title: pageTitle, content, image: imageArr }));
      }
      router.push('/${team}/editor/page/publish');
    }
  };

  //조건문

  switch (pageType) {
    case `article`:
      return (
        <>
          <ToolBox editor={editor} encodeFileToBase64={encodeFileToBase64} setLink={setLink} />
          <TextEditor editor={editor} handleDrop={handleDrop} handleDragOver={handleDragOver} />
          <SaveArticleButton handleOnClickDraft={handleOnClickDraft} handleOnClickPublish={handleOnClickPublish} />
        </>
      );
    case `page`:
      return (
        <>
          <ToolBox editor={editor} encodeFileToBase64={encodeFileToBase64} setLink={setLink} />
          <TextEditor editor={editor} handleDrop={handleDrop} handleDragOver={handleDragOver} />
          <SaveArticleButton
            handleOnClickDraft={handleOnClickPageDraft}
            handleOnClickPublish={handleOnClickPagePublish}
          />
        </>
      );
    default:
      router.push('/not-found');
  }
};
export default TextEditorBuild;
