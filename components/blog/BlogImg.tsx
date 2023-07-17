'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { BlogImgExampleImg } from '@/public/images';
import { BlogImgProps } from '@/types/blogImg';

const BlogImg = (props: BlogImgProps) => {
  const { blogImgUrl, blogInfo } = props;

  return (
    //블로그 대문 이미지가 있는 경우에만 블로그 소개글이 같이 나타납니다
    <BlogImgContainer>
      {blogImgUrl && (
        <>
          <BlogImgWrapper>
            {/* //image src 에 blogImgUrl 넣을 예정 */}
            <Image src={BlogImgExampleImg} alt="blog image" fill></Image>
            {blogInfo && <BlogInfo>{blogInfo}</BlogInfo>}
          </BlogImgWrapper>
        </>
      )}
    </BlogImgContainer>
  );
};

export default BlogImg;

const BlogImgContainer = styled.div`
  position: relative;
  margin-top: 6rem;
  min-width: 105.6rem;
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
  pointer-events: none;
`;
