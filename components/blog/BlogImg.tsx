'use client';
// import Image from 'next/image';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { BlogImgExampleImg } from '@/public/images';

const BlogImg = () => {
  return (
    <BlogImgContainer>
      <BlogImgWrapper>
        <Image src={BlogImgExampleImg} alt="blog image" fill></Image>
      </BlogImgWrapper>
      <BlogInfo>우리 팀 이야기를 세상에 전달하는 방법</BlogInfo>
    </BlogImgContainer>
  );
};

export default BlogImg;

const BlogImgContainer = styled.div`
  position: relative;
  height: 50rem;
`;

const BlogImgWrapper = styled.div`
  width: 100%;
  vertical-align: middle;
`;

const BlogInfo = styled.div`
  ${({ theme }) => theme.fonts.Heading1};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${({ theme }) => theme.colors.grey_0};
`;
