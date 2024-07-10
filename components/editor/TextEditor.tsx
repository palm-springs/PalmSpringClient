'use client';

import { ClipboardEvent, ClipboardEventHandler, DragEventHandler, useCallback, useEffect, useState } from 'react';
import { Editor, EditorContent } from '@tiptap/react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import { postExternalImage } from '@/api/postImage';
import { getChangedImgSrc } from '@/utils/getChangedImgSrc';
import { getContentCtrlVImage } from '@/utils/getImageMultipartData';

interface editorProps {
  editor: Editor | null;
  handleDragOver: DragEventHandler<HTMLDivElement> | undefined;
  handleDrop: DragEventHandler<HTMLDivElement> | undefined;
}

const TextEditor = ({ editor, handleDragOver, handleDrop }: editorProps) => {
  // const [editorHeight, setEditorHeight] = useState<number>(650);
  const { team } = useParams();

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

  //이미지 복붙할 때 갈아끼우기
  const pasteImg: ClipboardEventHandler<HTMLInputElement> = async (event: ClipboardEvent) => {
    // 붙여넣기된 img 요소 가져오기
    const targetImg = event.currentTarget.querySelector(
      'img:not([src^="https://cdn.palms.blog/"]):not([class^="ProseMirror"]):not([class="inaccessible"]), img[class="ProseMirror-selectednode"]:not([src^="https://cdn.palms.blog/"]):not([class^="inaccessible"])',
    );
    if (!targetImg) return;
    await getChangedImgSrc(targetImg, String(team));
  };

  return (
    <TouchContainer
      tabIndex={-1}
      id="dropzone"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onPaste={pasteImg}
      style={{ height: 'fit-content' }}>
      <EditorContainer tabIndex={-1}>
        <TextEditorUI editor={editor} $long={long} tabIndex={0} />
      </EditorContainer>
    </TouchContainer>
  );
};

export default TextEditor;

const TouchContainer = styled.div`
  /* 컨텐츠 영역 높이 조절-> 하단 푸터(나가기, 임시저장, 발행하기) 높이 -> 지금은 안됨*/
  & div {
    height: calc(100vh - 7rem);
  }
`;

const EditorContainer = styled.div`
  margin-bottom: 6.4rem;
  height: fit-content;
`;

const TextEditorUI = styled(EditorContent)<{ $long: boolean }>`
  ${({ theme }) => theme.fonts.Body1_Regular};
  outline: none;
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
  .ProseMirror {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
