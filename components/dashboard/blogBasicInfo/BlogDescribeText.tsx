'use client';
import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface BlogDescribeTextProps {
  describeText: string;
  setDescribeText: (v: string) => void;
}

const BlogDescribeText = (props: BlogDescribeTextProps) => {
  const { describeText, setDescribeText } = props;

  return (
    <BlogDescribeContainer>
      <BlogDescribeTitleContainer>
        <BlogDescribeTitle>블로그 설명</BlogDescribeTitle>
        <BlogDescribeContent>메인 홈에 나타나는 설명입니다.</BlogDescribeContent>
      </BlogDescribeTitleContainer>
      <BlogDescribeTextarea
        value={describeText}
        onChange={(e) => setDescribeText(e.target.value)}
        placeholder="블로그 설명을 입력하세요"></BlogDescribeTextarea>
    </BlogDescribeContainer>
  );
};

export default BlogDescribeText;

const BlogDescribeContainer = styled.div`
  display: flex;
  margin-top: 3.2rem;
`;

const BlogDescribeTextarea = styled.textarea`
  ${({ theme }) => theme.fonts.Body2_Regular};
  margin-left: 1.8rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem 5rem;
  width: 64.5rem;
  height: 7.9rem;
  resize: none;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const BlogDescribeTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BlogDescribeContent = styled.span`
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.grey_700};
`;

const BlogDescribeTitle = styled.span`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;
