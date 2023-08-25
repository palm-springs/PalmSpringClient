'use client';

import { DragEventHandler } from 'react';
import { Editor, EditorContent } from '@tiptap/react';
import styled from 'styled-components';

interface editorProps {
  editor: Editor | null;
  handleDragOver: DragEventHandler<HTMLDivElement> | undefined;
  handleDrop: DragEventHandler<HTMLDivElement> | undefined;
}

//텍스트 에디터 안에 ref가 안써짐 -> 터치영역 포커스 이동 몬함...
const TextEditor = ({ editor, handleDragOver, handleDrop }: editorProps) => (
  <div id="dropzone" onDrop={handleDrop} onDragOver={handleDragOver} style={{ height: 'fit-content' }}>
    <EditorContainer>
      <TextEditorUI editor={editor} />
    </EditorContainer>
  </div>
);

export default TextEditor;

const EditorContainer = styled.div`
  margin-bottom: 6.4rem;
  height: fit-content;
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
    /* height: 100rem; ->이거 넣으면 커서 위치가 글자 오른쪽 맨끝으로 이동됨, 근데 터치 영역이 전체 컨텐츠가 됨*/
    /* height: 0; -> 이거 넣으면 커서 위치가 글자 처음에서 시작함, 근데 터치 영역이 한 줄로 제한됨 */
    height: 0;
    color: ${({ theme }) => theme.colors.grey_600};
    content: attr(data-placeholder);
    pointer-events: none;
  }
`;
