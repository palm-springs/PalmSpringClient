'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
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
  const [atTop, setAtTop] = useState(true);
  const [visible, setVisible] = useState(false);

  // 스크롤바 높이에 따라 visible 조건부 설정, 높이 인식 설정
  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY >= 143);
      setVisible(window.scrollY >= 143);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(document.documentElement.scrollHeight);

  return (
    <IconContainer atTop={atTop}>
      {visible && <Wrapper isVisible={visible ? true : undefined} />}
      <IconWrapper>
        <ToolButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          <H1Icon />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          <H2Icon />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          <H3Icon />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <BulletIcon />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <OrderIcon />
        </ToolButton>
        <GreyBar />
        <ToolButton onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <UnderlineIcon />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleBold().run()}>
          <BoldIcon />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleItalic().run()}>
          <ItalicIcon />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleStrike().run()}>
          <StrikeIcon />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleCode().run()}>
          <CodeIcon />
        </ToolButton>
        <GreyBar />
        <ToolButton onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          <QuoteIcon />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <HorizonIcon />
        </ToolButton>
        <ToolButton>
          <ImageInputLabel>
            <input type="file" onChange={(event) => encodeFileToBase64(event, editor)}></input>
            <ImageIcon />
          </ImageInputLabel>
        </ToolButton>

        <ToolButton onClick={() => setLink({ editor })} className={editor.isActive('link') ? 'is-active' : ''}>
          <LinkIcon />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
          <CodeBlockIcon />
        </ToolButton>
      </IconWrapper>
    </IconContainer>
  );
};

export default EditorMenuBar;

const ToolButton = styled.button`
  width: 3.6rem;
  height: 3.6rem;
  &:hover {
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.grey_300};
    width: 3.6rem;
    height: 3.6rem;
  }
`;

const ImageButton = styled.div`
  &:hover {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.grey_300};
    width: 3.6rem;
    height: 3.6rem;
  }
`;

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
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-evenly;
  transition: width 0.7s ease;
  z-index: 20;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_100};
  width: 72.2rem;
  height: 4.8rem;
`;

const IconContainer = styled.div<{ atTop: boolean }>`
  position: ${({ atTop }) => atTop && 'sticky'};
  top: 0;
  z-index: 30;
  margin: 4.4rem 0 1.6rem;
  width: ${({ atTop }) => atTop && '72.2rem'};
  height: 100%;
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
