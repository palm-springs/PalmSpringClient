'use client';

import React from 'react';
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
}

const ToolBox = ({ editor }: editorProps) => {
  return (
    <IconContainer>
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
        <button>
          <ImageIcon />
        </button>
        <button>
          <LinkIcon />
        </button>
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
          <CodeBlockIcon />
        </button>
      </IconWrapper>
    </IconContainer>
  );
};

export default ToolBox;

const GreyBar = styled.div`
  border-right: 0.1rem solid #d9d9d9;
  height: 1.8rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 4rem 0 2rem 0;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_100};
  width: 72.2rem;
  height: 4.8rem;
`;

const IconContainer = styled.div`
  margin-left: 35.9rem;
`;
