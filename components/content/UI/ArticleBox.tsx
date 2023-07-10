//blog main page의 article를 공통 컴포넌트로 분리 후 가져와서 쓸 예정

'use client';

import React from 'react';
import styled from 'styled-components';

const ArticleBox = () => {
  return (
    <ArticleBoxContainer>
      <div>article example</div>
      <div>article example</div>
      <div>article example</div>
    </ArticleBoxContainer>
  );
};

export default ArticleBox;

const ArticleBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding-top: 2.4rem;
  width: 100%;
`;
