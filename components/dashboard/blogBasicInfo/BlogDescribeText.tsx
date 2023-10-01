'use client';
import React, { useCallback } from 'react';
import styled from 'styled-components';

interface BlogDescribeTextProps {
  describeText: string;
  setDescribeText: (v: string) => void;
  readonly: boolean;
}

const BlogDescribeText = (props: BlogDescribeTextProps) => {
  const { describeText, setDescribeText, readonly } = props;

  const getCurInputTextLineCnt = useCallback((text: string) => {
    const lines = text?.split(/\r|\r\n|\n/);
    const count = lines?.length;
    return count;
  }, []);

  const isScrollable = getCurInputTextLineCnt(describeText) >= 3;

  return (
    <BlogDescribeContainer>
      <BlogDescribeTitleContainer>
        <BlogDescribeTitle>블로그 설명</BlogDescribeTitle>
        <BlogDescribeContent>메인 홈에 나타나는 설명입니다.</BlogDescribeContent>
      </BlogDescribeTitleContainer>
      <BlogDescribeTextarea
        readOnly={readonly}
        $isScrollable={isScrollable}
        value={describeText}
        onChange={(e) => setDescribeText(e.target.value)}
        placeholder="블로그 설명을 입력하세요"
      />
    </BlogDescribeContainer>
  );
};

export default BlogDescribeText;

const BlogDescribeContainer = styled.div`
  display: flex;
  margin-top: 3.2rem;
`;

const BlogDescribeTextarea = styled.textarea<{ $isScrollable: boolean }>`
  ${({ theme }) => theme.fonts.Body2_Regular};
  margin-left: 1.8rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem 5rem;
  width: 64.5rem;
  height: 7.9rem;
  overflow-y: ${({ $isScrollable }) => ($isScrollable ? 'auto' : 'hidden')};
  resize: none;
  color: ${({ theme }) => theme.colors.grey_900};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;

const BlogDescribeTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BlogDescribeContent = styled.span`
  white-space: nowrap;
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.grey_700};
`;

const BlogDescribeTitle = styled.span`
  white-space: nowrap;
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;
