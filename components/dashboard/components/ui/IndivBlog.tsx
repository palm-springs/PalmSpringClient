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
    <IndivBlogUI $isCurrentBlog={isCurrentBlog} onMouseDown={handleChange}>
      {innerText}
    </IndivBlogUI>
  );
};

export default IndivBlog;

const IndivBlogUI = styled.span<{ $isCurrentBlog: boolean }>`
  ${({ theme, $isCurrentBlog }) => ($isCurrentBlog ? theme.fonts.Body3_Semibold : theme.fonts.Body3_Regular)};
  transition: 0.3s ease-out;
  border-radius: 0.8rem;
  cursor: pointer;
  padding: 1.2rem 1.6rem 1.2rem 1.2rem;
  width: 100%;

  color: ${({ theme }) => theme.colors.grey_900};
  &:hover {
    background: ${({ theme }) => theme.colors.grey_100};
  }
`;
