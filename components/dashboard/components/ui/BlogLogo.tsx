import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

interface LogoProps {
  src: string;
}

const BlogLogo = (props: LogoProps) => {
  const { src } = props;

  return <LogoUI src={src} alt="블로그 로고"></LogoUI>;
};

export default BlogLogo;

const LogoUI = styled(Image)`
  width: 4rem;
`;
