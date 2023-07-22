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
  <div id="dropzone" onDrop={handleDrop} onDragOver={handleDragOver} style={{ height: 'fit-content' }}>
    <EditorContainer>
      <TextEditorUI editor={editor} />
    </EditorContainer>
  </div>
);

export default TextEditor;

const EditorContainer = styled.div`
  margin-bottom: 64px;
  /* margin-left: 35.9rem; */
  height: fit-content;
  /* overflow: scroll; */
`;

const TextEditorUI = styled(EditorContent)`
  ${({ theme }) => theme.fonts.Body1_Regular};
  width: 72.2rem;
  height: fit-content;
  color: ${({ theme }) => theme.colors.grey_900};

  *:focus {
    outline: none;
  }
  .ProseMirror p.is-editor-empty:first-child::before {
    ${({ theme }) => theme.fonts.Body1_Regular};
    float: left;
    height: 0;
    color: ${({ theme }) => theme.colors.grey_600};
    content: attr(data-placeholder);
    pointer-events: none;
  }
`;
