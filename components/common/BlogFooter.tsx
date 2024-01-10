'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// footerContact는 추후 기획측과의 상의 후 수정/반영할 계획입니다. 일단은 빼기로해서 주석처리 해두겠습니다!
// import FooterContact from './ui/FooterContact';

const BlogFooter = () => {
  return (
    <FooterContainer>
      {/* footerContact는 추후 기획측과의 상의 후 수정/반영할 계획입니다. 일단은 빼기로해서 주석처리 해두겠습니다! */}
      {/* <FooterContact /> */}
      <FeedbackLink href={'https://tally.so/r/w4rjGk'}>블로그 피드백 남기기</FeedbackLink>
      <FooterName>Palmspring © 2023</FooterName>
    </FooterContainer>
  );
};

export default BlogFooter;

const FeedbackLink = styled(Link)`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  color: ${({ theme }) => theme.colors.grey_700};

  &:hover {
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.green_hover};
    font-weight: bolder;
  }
`;

const FooterContainer = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  border-top: 1px solid ${({ theme }) => theme.colors.grey_300};

  padding: 7.2rem 0;
  width: 100%;
`;

const FooterName = styled.div`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  color: ${({ theme }) => theme.colors.grey_700};
`;
