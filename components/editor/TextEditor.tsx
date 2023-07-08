'use client';

import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styled from 'styled-components';

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: '내용을 입력해주세요',
      }),
    ],
    content: '',
  });

  return (
    <EditorContainer>
      <TextEditorUI editor={editor} />
    </EditorContainer>
  );
};

export default TextEditor;

const EditorContainer = styled.div`
  margin-left: 35.9rem;
`;

const TextEditorUI = styled(EditorContent)`
  width: 72.2rem;
  height: 100vh;
  color: ${({ theme }) => theme.colors.grey_900};
  ${({ theme }) => theme.fonts.Body1_Regular};
  *:focus {
    outline: none;
  }
  .ProseMirror p.is-editor-empty:first-child::before {
    float: left;
    height: 0;
    color: ${({ theme }) => theme.colors.grey_900};
    ${({ theme }) => theme.fonts.Body1_Regular};
    content: attr(data-placeholder);
    pointer-events: none;
  }
`;
