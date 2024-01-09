import React from 'react';
import { styled } from 'styled-components';

interface UrlProps {
  url: string;
}

const Url = (props: UrlProps) => {
  const { url } = props;

  return <UrlUI>{url}</UrlUI>;
};

export default Url;

const UrlUI = styled.span`
  ${({ theme }) => theme.fonts.Body3_Regular};
  width: 13rem;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_700};
`;
