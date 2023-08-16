'use client';
import React from 'react';
import styled from 'styled-components';

interface BlogUrlProps {
  blogUrl: string | null;
}

const BlogUrl = (props: BlogUrlProps) => {
  const { blogUrl } = props;

  return (
    <BlogUrlContainer>
      <BlogUrlTitle>블로그 주소</BlogUrlTitle>
      <BlogUrlText>{blogUrl ?? '블로그 주소를 불러오는 중입니다...'}</BlogUrlText>
    </BlogUrlContainer>
  );
};

export default BlogUrl;

const BlogUrlContainer = styled.div`
  display: flex;
`;

const BlogUrlTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogUrlText = styled.p`
  margin-left: 9.3rem;
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;
