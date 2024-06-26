import React from 'react';
import { styled } from 'styled-components';

interface AuthorProps {
  author: string | undefined;
}

const Author = (props: AuthorProps) => {
  const { author } = props;

  return <AuthorUI>{author}</AuthorUI>;
};

export default Author;

const AuthorUI = styled.span`
  margin-right: 2rem;
  ${({ theme }) => theme.fonts.Body3_Regular};
  width: 5.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_900};
`;
