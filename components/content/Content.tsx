'use client';

import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';

import { TextEditorStyle } from '@/styles/TextEditorStyle';

interface ContentProp {
  content: string;
}

const Content = (prop: ContentProp) => {
  const { content } = prop;

  return (
    <TextEditorStyle>
      <ContentContainer className="ProseMirror">{parse(content)}</ContentContainer>
    </TextEditorStyle>
  );
};

export default Content;

const ContentContainer = styled.section`
  position: relative !important;

  margin-top: 8.4rem;
  padding: 0 2.4rem;
  width: 100%;

  font-family: 'Fira Mono', monospace;
`;
