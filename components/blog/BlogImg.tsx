'use client';

import React from 'react';
import styled from 'styled-components';

interface BlogMainImgProps {
  thumbnail: string | null;
  description: string | null;
}

const BlogImg = (props: BlogMainImgProps) => {
  const { thumbnail, description } = props;

  return (
    //블로그 대문 이미지가 있는 경우에만 블로그 소개글이 같이 나타납니다
    <BlogImgContainer>
      {thumbnail && (
        <>
          <BlogImgWrapper>
            <img src={thumbnail} alt="blog main" />
            {/* <Image src={BlogImgExampleImg} alt="blog image" fill /> */}
            {description && <BlogInfo>{description}</BlogInfo>}
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

  & > img {
    width: 100%;
    height: 50rem;
    user-select: none;
    -webkit-user-drag: none;
  }
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
