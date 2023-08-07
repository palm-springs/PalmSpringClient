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
  width: 5.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_900};
`;
