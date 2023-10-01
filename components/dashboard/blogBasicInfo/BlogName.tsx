'use client';

import React from 'react';
import styled from 'styled-components';

interface BlogNameProps {
  blogName: string;
  setBlogName: (v: string) => void;
  readonly: boolean;
}

const BlogName = (props: BlogNameProps) => {
  const { blogName, setBlogName, readonly } = props;
  return (
    <BlogNameContainer>
      <BlogNameTitle>블로그 이름</BlogNameTitle>
      <BlogNameText value={blogName} onChange={(e) => setBlogName(e.target.value)} readOnly={readonly} />
    </BlogNameContainer>
  );
};

export default BlogName;

const BlogNameContainer = styled.div`
  display: flex;
  margin-top: 3.2rem;
  width: 100%;
`;

const BlogNameTitle = styled.div`
  margin-right: 9.3rem;
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin-bottom: 0.8rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogNameText = styled.input`
  ${({ theme }) => theme.fonts.Body2_Regular};
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 64.5rem;
  height: 4.6rem;
  color: ${({ theme }) => theme.colors.grey_950};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;
