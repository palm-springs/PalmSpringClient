'use client';
import React from 'react';
import styled from 'styled-components';

const BlogInfoDeleteButton = () => {
  return (
    <BlogInfoDeleteButtonContainer>
      <BlogDeleteButton>블로그 삭제</BlogDeleteButton>
    </BlogInfoDeleteButtonContainer>
  );
};

export default BlogInfoDeleteButton;

const BlogInfoDeleteButtonContainer = styled.div`
  margin-top: 2.2rem;
`;

const BlogDeleteButton = styled.p`
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;
