'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import { useDeleteBlog } from '@/hooks/blog';

const BlogInfoDeleteButton = () => {
  const { team: blogUrl } = useParams();

  const { mutate } = useDeleteBlog(blogUrl);

  return (
    <BlogInfoDeleteButtonContainer>
      <BlogDeleteButton onClick={() => mutate()}>블로그 삭제</BlogDeleteButton>
    </BlogInfoDeleteButtonContainer>
  );
};

export default BlogInfoDeleteButton;

const BlogInfoDeleteButtonContainer = styled.div`
  margin: 14.9rem 0 6.9rem;
`;

const BlogDeleteButton = styled.p`
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;
