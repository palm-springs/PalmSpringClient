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
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
          <H1Icon />
        </button>
        <H2Icon />
        <H3Icon />
        <BulletIcon />
        <OrderIcon />
        <GreyBar />
        <UnderlineIcon />
        <BoldIcon />
        <ItalicIcon />
        <StrikeIcon />
        <CodeIcon />
        <GreyBar />
        <QuoteIcon />
        <HorizonIcon />
        <ImageIcon />
        <LinkIcon />
        <CodeBlockIcon />
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
