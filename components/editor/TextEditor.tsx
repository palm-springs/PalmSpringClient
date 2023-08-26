'use client';

import { DragEventHandler, useEffect, useState } from 'react';
import { Editor, EditorContent } from '@tiptap/react';
import styled from 'styled-components';

interface editorProps {
  editor: Editor | null;
  handleDragOver: DragEventHandler<HTMLDivElement> | undefined;
  handleDrop: DragEventHandler<HTMLDivElement> | undefined;
}

//텍스트 에디터 안에 ref가 안써짐 -> 터치영역 포커스 이동 몬함...
const TextEditor = ({ editor, handleDragOver, handleDrop }: editorProps) => {
  // const [editorHeight, setEditorHeight] = useState<number>(650);

  const [long, setlong] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 143) {
        setlong(true);
        // setEditorHeight((prev) => prev + window.scrollY);
      } else {
        setlong(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <TouchContainer id="dropzone" onDrop={handleDrop} onDragOver={handleDragOver} style={{ height: 'fit-content' }}>
      <EditorContainer>
        <TextEditorUI editor={editor} $long={long} />
      </EditorContainer>
    </TouchContainer>
  );
};

export default TextEditor;

const TouchContainer = styled.div`
  & div {
    height: calc(100vh - 6.7rem);
  }
`;

const EditorContainer = styled.div`
  margin-bottom: 6.4rem;
  height: fit-content;
`;

const TextEditorUI = styled(EditorContent)<{ $long: boolean }>`
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
  .ProseMirror {
    min-height: ${({ $long }) => ($long ? '850px' : '650px')};
    max-height: ${({ $long }) => ($long ? '750px' : '650px')};
    overflow: scroll;
  }
`;
