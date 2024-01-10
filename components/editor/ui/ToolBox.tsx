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
  atTop: boolean;
  setAtTop: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditorMenuBar = ({ editor, encodeFileToBase64, setLink, atTop, setAtTop }: editorProps) => {
  const [visible, setVisible] = useState(false);

  const iconWrapperRef = useRef<HTMLDivElement>(null);

  // 스크롤바 높이에 따라 visible 조건부 설정, 높이 인식 설정
  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY >= 143);
      setVisible(window.scrollY >= 143);
      if (iconWrapperRef.current === null) return;
      const { current } = iconWrapperRef;
      if (window.scrollY >= 143) {
        current.style.position = 'fixed';
      } else {
        current.style.position = 'sticky';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <IconContainer atTop={atTop} tabIndex={-1}>
      <IconWrapper ref={iconWrapperRef} tabIndex={-1}>
        <ToolButton tabIndex={-1} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          <H1Icon />
        </ToolButton>
        <ToolButton tabIndex={-1} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          <H2Icon />
        </ToolButton>
        <ToolButton tabIndex={-1} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          <H3Icon />
        </ToolButton>
        <ToolButton tabIndex={-1} onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <BulletIcon />
        </ToolButton>
        <ToolButton tabIndex={-1} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <OrderIcon />
        </ToolButton>
        <GreyBar />
        <ToolButton tabIndex={-1} onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <UnderlineIcon />
        </ToolButton>
        <ToolButton tabIndex={-1} onClick={() => editor.chain().focus().toggleBold().run()}>
          <BoldIcon />
        </ToolButton>
        <ToolButton tabIndex={-1} onClick={() => editor.chain().focus().toggleItalic().run()}>
          <ItalicIcon />
        </ToolButton>
        <ToolButton tabIndex={-1} onClick={() => editor.chain().focus().toggleStrike().run()}>
          <StrikeIcon />
        </ToolButton>
        <ToolButton tabIndex={-1} onClick={() => editor.chain().focus().toggleCode().run()}>
          <CodeIcon />
        </ToolButton>
        <GreyBar />
        <ToolButton tabIndex={-1} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          <QuoteIcon />
        </ToolButton>
        <ToolButton tabIndex={-1} onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <HorizonIcon />
        </ToolButton>
        <ToolButton tabIndex={-1}>
          <ImageInputLabel>
            <input
              type="file"
              onChange={(event) => encodeFileToBase64(event, editor)}
              accept=".jpg, .jpeg, .jpe, .png, .svg, .gif"></input>
            <ImageIcon />
          </ImageInputLabel>
        </ToolButton>

        <ToolButton
          tabIndex={-1}
          onClick={() => setLink({ editor })}
          className={editor.isActive('link') ? 'is-active' : ''}>
          <LinkIcon />
        </ToolButton>
        <ToolButton tabIndex={-1} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
          <CodeBlockIcon />
        </ToolButton>
      </IconWrapper>
      {visible && <Wrapper isVisible={visible} />}
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

const Wrapper = styled.div<{ isVisible?: boolean }>`
  position: fixed;
  top: 0;
  transition: width 1s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  z-index: 10;
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
  /* @media screen and (min-height: 903px) {
    position: fixed;
    top: 0;
  } */
`;

//여기에ㅔ toolbar에 조건문 붙여서 -> position 속성이 fixed가되면 width 값을 100vw, display: flex, jus-> centerd로 바꾼다
const IconContainer = styled.div<{ atTop: boolean }>`
  display: flex;
  position: ${({ atTop }) => atTop && 'sticky'};
  top: 0;
  justify-content: center;
  z-index: 30;
  margin: 4.4rem 0 1.6rem;
  width: ${({ atTop }) => (atTop ? '100vw' : '72.2rem')};
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
