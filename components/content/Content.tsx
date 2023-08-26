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

  const TEST = () => {
    return (
      <MobileTextEditorStyle>
        <ContentContainer className="mobile ProseMirror">{parse(content)}</ContentContainer>
      </MobileTextEditorStyle>
    );
  };

  const DESKTOP = () => {
    return (
      <TextEditorStyle>
        <ContentContainer className="ProseMirror">{parse(content)}</ContentContainer>
      </TextEditorStyle>
    );
  };

  return <>{MOBILE ? TEST : DESKTOP}</>;
};

export default Content;

const ContentContainer = styled.section`
  position: relative !important;

  margin-top: 8.4rem;
  padding: 0 2.4rem;
  width: 72rem;

  &.mobile.ProseMirror {
    width: calc(100vw - 4rem);
  }
`;
