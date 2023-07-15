'use client';
import React, { DragEvent, DragEventHandler, useCallback, useState } from 'react';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Dropcursor from '@tiptap/extension-dropcursor';
import Heading from '@tiptap/extension-heading';
import Image from '@tiptap/extension-image';
import Italic from '@tiptap/extension-italic';
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

import css from 'highlight.js/lib/languages/css';

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);

// import ScrollTopToolbar from '@/components/editor/article/publish/ScrollTopToolbar';
import ToolBox from '@/components/editor/article/ui/ToolBox';
import TextEditor from '@/components/editor/TextEditor';

interface editorProps {
  editor: Editor;
  addImage: () => void;
}
const TextEditorBuild = () => {
  const [imageSrc, setImageSrc] = useState('');

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
    ],
    content: '',
  });

  const addImage = useCallback(
    ({ editor }: { editor: Editor }) => {
      const url = window.prompt('URL');

      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    },
    [editor],
  );

  // const encodeFileToBase64 = (
  //   event: { target: { files: FileList } },
  //   { editor }: { editor: Editor },
  // ): Promise<string> => {
  //   return new Promise((resolve) => {
  //     const reader = new FileReader();
  //     const file = event.target.files[0];
  //     reader.onload = () => {
  //       const base64Data = reader.result as string;
  //       setImageSrc(base64Data); // 이미지 상태 업데이트
  //       editor.chain().focus().setImage({ src: base64Data }).run(); // 이미지 에디터 안으로 추가
  //       resolve(base64Data);
  //     };
  //     reader.readAsDataURL(file);
  //   });
  // };

  const handleDrop: DragEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!editor) {
        return;
      }

      const files = event.dataTransfer.files;
      if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = () => {
          const base64Data = reader.result as string;
          setImageSrc(base64Data); // 이미지 소스 상태 업데이트
          editor.chain().focus().setImage({ src: base64Data }).run(); // 이미지를 에디터에 삽입
        };
        reader.readAsDataURL(file);
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

  return (
    <>
      <ToolBox editor={editor} addImage={addImage} />
      {/* <ScrollTopToolbar /> */}
      <TextEditor editor={editor} handleDrop={handleDrop} handleDragOver={handleDragOver} />
    </>
  );
};

export default TextEditorBuild;
