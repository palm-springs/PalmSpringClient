import React, { RefObject } from 'react';
import { styled } from 'styled-components';

interface BlogListContainerProps {
  children: React.ReactNode;
  blogListRef: RefObject<HTMLElement>;
}
const BlogListContainer = (props: BlogListContainerProps) => {
  const { children, blogListRef } = props;
  return <BlogListUI ref={blogListRef}>{children}</BlogListUI>;
};

export default BlogListContainer;

const BlogListUI = styled.section`
  display: flex;
  position: absolute;
  top: 12.5rem;
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

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    width: 100%;
  }
`;
