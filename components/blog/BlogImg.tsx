'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';

interface BlogMainImgProps {
  thumbnail: string | null;
  description: string | null;
}

const BlogImg = (props: BlogMainImgProps) => {
  const { thumbnail, description } = props;

  const MOBILE = useCheckMobile();

  return (
    //블로그 대문 이미지가 있는 경우에만 블로그 소개글이 같이 나타납니다
    <BlogImgContainer>
      {thumbnail && (
        <>
          <BlogImgWrapper className={MOBILE ? 'mobile' : ''}>
            <Image src={thumbnail} alt="blog main" fill={true} />
            {description && <BlogInfo className={MOBILE ? 'mobile' : ''}>{description}</BlogInfo>}
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
  width: 100%;
`;

const BlogImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;
  &.mobile {
    height: calc(100vw * (9 / 16));
  }

  & > img {
    user-select: none;
    -webkit-user-drag: none;
    object-fit: cover;
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

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Body1_Semibold};
  }
`;
