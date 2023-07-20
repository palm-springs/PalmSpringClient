import React, { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { styled } from 'styled-components';

interface IndivBlogProps {
  isCurrentBlog: boolean;
  innerText: string;
  handleChange: () => void;
}

const IndivBlog = (props: IndivBlogProps) => {
  const { isCurrentBlog, innerText, handleChange } = props;

  return (
    <IndivBlogUI $isCurrentBlog={isCurrentBlog} onClick={handleChange}>
      {innerText}
    </IndivBlogUI>
  );
};

export default IndivBlog;

const IndivBlogUI = styled.span<{ $isCurrentBlog: boolean }>`
  transition-duration: 0.3s ease-out;
  cursor: pointer;
  padding: 1.2rem 1.6rem 1.2rem 1.2rem;
  width: 100%;
  ${({ theme, $isCurrentBlog }) => ($isCurrentBlog ? theme.fonts.Body3_Semibold : theme.fonts.Body3_Regular)};
  color: ${({ theme }) => theme.colors.grey_900};
  &:hover {
    background: ${({ theme }) => theme.colors.grey_100};
  }
`;
