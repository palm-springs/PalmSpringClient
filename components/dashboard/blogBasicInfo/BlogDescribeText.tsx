'use client';
import React from 'react';
import styled from 'styled-components';

const BlogDescribeText = () => {
  return (
    <BlogDescribeContainer>
      <BlogDescribeTitleContainer>
        <BlogDescribeTitle>블로그 설명</BlogDescribeTitle>
        <BlogDescribeContent>블로그의 메인 홈에 나타나는 블로그의 설명입니다.</BlogDescribeContent>
      </BlogDescribeTitleContainer>
      <BlogDescribeTextarea placeholder="블로그 설명을 입력하세요"></BlogDescribeTextarea>
    </BlogDescribeContainer>
  );
};

export default BlogDescribeText;

const BlogDescribeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlogDescribeTextarea = styled.textarea`
  ${({ theme }) => theme.fonts.Body2_Regular};
  margin-top: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem 5rem;
  width: 50rem;
  height: 7.9rem;
  resize: none;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const BlogDescribeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.2rem;
`;

const BlogDescribeContent = styled.p`
  ${({ theme }) => theme.fonts.Caption};
  margin-left: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const BlogDescribeTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;
