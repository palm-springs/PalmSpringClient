import React from 'react';
import { styled } from 'styled-components';

const BlogListContainer = ({ children }: { children: React.ReactNode }) => {
  return <BlogListUI>{children}</BlogListUI>;
};

export default BlogListContainer;

const BlogListUI = styled.section`
  display: flex;
  position: absolute;
  top: 10.3rem;
  left: 1.6rem;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.8rem;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.grey_0};
  padding: 0.8rem;
  width: 25.4rem;
  max-height: 50rem;
  overflow-y: scroll;
`;
