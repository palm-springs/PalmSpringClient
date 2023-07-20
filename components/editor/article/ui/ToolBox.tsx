'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { Editor } from '@tiptap/react';
import styled from 'styled-components';

import {
  BoldIcon,
  BulletIcon,
  CodeBlockIcon,
  CodeIcon,
  H1Icon,
  H2Icon,
  H3Icon,
  HorizonIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  OrderIcon,
  QuoteIcon,
  StrikeIcon,
  UnderlineIcon,
} from '@/public/icons';

interface editorProps {
  editor: Editor;
  encodeFileToBase64: (event: ChangeEvent<HTMLInputElement>, editor: Editor) => void;
  setLink: ({ editor }: { editor: Editor }) => void;
}

const EditorMenuBar = ({ editor, encodeFileToBase64, setLink }: editorProps) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [visible, setVisible] = useState(false);

  //스크롤바 높이에 따라 visible 조건부 설정, 높이 인식 설정
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY >= 143);

      setVisible(window.scrollY >= 143);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <IconContainer isAtTop={isAtTop}>
      {visible && <Wrapper isVisible={visible ? true : undefined} />}
      <IconWrapper>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          <H1Icon />
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          <H2Icon />
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          <H3Icon />
        </button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <BulletIcon />
        </button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <OrderIcon />
        </button>
        <GreyBar />
        <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <UnderlineIcon />
        </button>
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          <BoldIcon />
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          <ItalicIcon />
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()}>
          <StrikeIcon />
        </button>
        <button onClick={() => editor.chain().focus().toggleCode().run()}>
          <CodeIcon />
        </button>
        <GreyBar />
        <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          <QuoteIcon />
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <HorizonIcon />
        </button>
        <ImageInputLabel>
          <input type="file" onChange={(event) => encodeFileToBase64(event, editor)}></input>
          <ImageIcon />
        </ImageInputLabel>
        <button onClick={() => setLink({ editor })} className={editor.isActive('link') ? 'is-active' : ''}>
          <LinkIcon />
        </button>
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
          <CodeBlockIcon />
        </button>
      </IconWrapper>
    </IconContainer>
  );
};

export default EditorMenuBar;

const Wrapper = styled.div<{ isVisible?: boolean }>`
  position: absolute;
  transition: width 1s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  z-index: 10;
  margin-left: -35.9rem;
  background-color: ${({ theme }) => theme.colors.grey_100};
  width: 100vw;
  height: 4.8rem;
`;

const GreyBar = styled.div`
  border-right: 0.1rem solid #d9d9d9;
  height: 1.8rem;
`;

const IconWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-evenly;
  transition: width 0.7s ease;
  z-index: 20;
  margin: 4rem 0 2rem 0;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_100};
  width: 72.2rem;
  height: 4.8rem;
`;

const IconContainer = styled.div<{ isAtTop: boolean }>`
  position: ${({ isAtTop }) => isAtTop && 'sticky'};
  top: 0;
  z-index: 30;
  margin-left: 35.9rem;
  width: ${({ isAtTop }) => isAtTop && '72.2rem'};
`;

const ImageInputLabel = styled.label`
  border: none;
  border-radius: 0.5rem;
  input[type='file'] {
    position: absolute;
    margin: -1px;
    border: 0;
    padding: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }
`;
