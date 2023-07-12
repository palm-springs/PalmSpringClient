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
  color: ${({ theme }) => theme.colors.grey_700};
`;
