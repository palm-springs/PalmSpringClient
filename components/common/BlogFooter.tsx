'use client';

import React from 'react';
import styled from 'styled-components';

// import FooterContact from './ui/FooterContact';

const BlogFooter = () => {
  return (
    <FooterContainer>
      {/* footerContact는 추후 기획측과의 상의 후 수정/반영할 계획입니다. 일단은 빼기로해서 주석처리 해두겠습니다! */}
      {/* <FooterContact /> */}
      <FooterName>Palmspring © 2023</FooterName>
    </FooterContainer>
  );
};

export default BlogFooter;

const FooterContainer = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};

  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  align-items: center;

  border-top: 1px solid ${({ theme }) => theme.colors.grey_300};

  padding: 7.2rem 0;
  min-width: 105.6rem;
`;

const FooterName = styled.div`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  color: ${({ theme }) => theme.colors.grey_700};
`;
