'use client';

import { DragEventHandler } from 'react';
import { Editor, EditorContent } from '@tiptap/react';
import styled from 'styled-components';

interface editorProps {
  editor: Editor | null;
  handleDragOver: DragEventHandler<HTMLDivElement> | undefined;
  handleDrop: DragEventHandler<HTMLDivElement> | undefined;
}

const TextEditor = ({ editor, handleDragOver, handleDrop }: editorProps) => (
  <div id="dropzone" onDrop={handleDrop} onDragOver={handleDragOver}>
    <EditorContainer>
      <TextEditorUI editor={editor} />
    </EditorContainer>
  </div>
);

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
