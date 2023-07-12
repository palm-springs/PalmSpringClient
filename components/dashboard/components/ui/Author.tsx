import React from 'react';
import { styled } from 'styled-components';

interface AuthorProps {
  author: string;
}

const Author = (props: AuthorProps) => {
  const { author } = props;

  return <AuthorUI>{author}</AuthorUI>;
};

export default Author;

const AuthorUI = styled.span`
  ${({ theme }) => theme.fonts.Body3_Regular};
  margin-right: 2vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_900};
`;
