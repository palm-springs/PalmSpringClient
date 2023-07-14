'use client';
import React from 'react';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Heading from '@tiptap/extension-heading';
import Image from '@tiptap/extension-image';
import Italic from '@tiptap/extension-italic';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { lowlight } from 'lowlight';
import styled from 'styled-components';

import css from 'highlight.js/lib/languages/css';

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);

// import ScrollTopToolbar from '@/components/editor/article/publish/ScrollTopToolbar';
import ToolBox from '@/components/editor/article/ui/ToolBox';
import TextEditor from '@/components/editor/TextEditor';

const TextEditorBuild = () => {
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
      Image,
    ],
    content: '',
  });
  return (
    <>
      <ToolBox editor={editor} />
      {/* <ScrollTopToolbar /> */}
      <TextEditor editor={editor} />
    </>
  );
};

export default TextEditorBuild;
