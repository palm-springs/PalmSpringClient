'use client';

import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';

import { MobileTextEditorStyle } from '@/styles/MobileTextEditorStyle';

interface ContentProp {
  content: string;
}

const MobileContent = (prop: ContentProp) => {
  const { content } = prop;

  return (
    <MobileTextEditorStyle>
      <ContentContainer className="ProseMirror">{parse(content)}</ContentContainer>
    </MobileTextEditorStyle>
  );
};

export default MobileContent;

const ContentContainer = styled.section`
  position: relative !important;

  margin-top: 4rem;
  width: calc(100vw - 4rem);
`;
