'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import BlogImg from '@/components/blog/BlogImg';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';
import ContentInfo from '@/components/common/ContentInfo';
import { BlogSampleImg } from '@/public/images';
import { BlogImgProps } from '@/types/blogImg';

const BlogHomeLayout = ({ children }: { children: React.ReactElement }) => {
  const BLOG_INFO_EXAMPLE: BlogImgProps = {
    // blogImgUrl: 'fsf',
    blogInfo: '우리 팀 이야기를 세상에 전달하는 방법 테스트',
  };
  const CONTENT_INFO: ContentProps = {
    // thumbnail: 'string',
    title:
      '리액트 API와 코드 재사용의 진화이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.',
    description:
      '이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.이렇게 글 설명이 보입니다.',
    teamMember: {
      id: 1,
      name: '김대덕',
      job: 'TL',
      createdAt: '2023년 5월 12일',
    },
    content: 'string',
    images: 'string',
  };
  return (
    <>
      <BlogHeader />
      {BLOG_INFO_EXAMPLE.blogImgUrl ? (
        <BlogImg blogImgUrl={BLOG_INFO_EXAMPLE.blogImgUrl} blogInfo={BLOG_INFO_EXAMPLE.blogInfo} />
      ) : (
        <ContentInfoContainer href={`./content/contentNameHere`}>
          {CONTENT_INFO.thumbnail && (
            <Image src={BlogSampleImg} alt="blog thumbnail" />
            //실제 썸네일 url이 들어오면 위의 코드는 삭제 후 밑의 코드를 사용할 예정입니다!
            // <Image src={CONTENT_INFO.thumbnail} alt="blog thumbnail" width={720} height={450} />
          )}
          <Link href={`./content/contentNameHere`}>
            <ContentInfo content={CONTENT_INFO} />
          </Link>
        </ContentInfoContainer>
      )}
      <main>{children}</main>
      <BlogFooter />
    </>
  );
};

export default BlogHomeLayout;

const ContentInfoContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12rem;
`;
