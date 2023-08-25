'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import parse from 'html-react-parser';
import styled from 'styled-components';

import { MobileTextEditorStyle } from '@/styles/MobileTextEditorStyle';
import { TextEditorStyle } from '@/styles/TextEditorStyle';

interface ContentProp {
  content: string;
}

const Content = (prop: ContentProp) => {
  const { content } = prop;

  const MOBILE = useMediaQuery({
    query: '(min-width : 375px) and (max-width:768px)',
  });

  if (MOBILE)
    return (
      <MobileTextEditorStyle>
        <MobileContentContainer id="mobile" className="ProseMirror">
          {parse(content)}
        </MobileContentContainer>
      </MobileTextEditorStyle>
    );
  else
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
  min-width: 72rem;

  font-family: 'Fira Mono', monospace;
`;
const MobileContentContainer = styled.section`
  position: relative !important;

  margin-top: 8.4rem;
  padding: 0 2.4rem;
  width: 100vw;

  font-family: 'Fira Mono', monospace;
`;
