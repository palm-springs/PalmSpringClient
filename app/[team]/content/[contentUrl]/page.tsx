// 글 / 페이지 상세
'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Content from '@/components/content/Content';
import Bar from '@/components/content/UI/Bar';
import ContentInfo from '@/components/content/UI/ContentInfo';
import LinkBtn from '@/components/content/UI/LinkBtn';
import Recommend from '@/components/content/UI/Recommend';
import { BlogSampleImg } from '@/public/images';

const ContentPage = () => {
  return (
    <ContentPageContainer>
      <Image src={BlogSampleImg} alt="blog img sample" />
      <ContentInfo
        title={'리액트 API와 코드 재사용의 진화'}
        description={'이렇게 글 설명이 보입니다.'}
        writer={'김대덕 · TL'}
        date={'2023년 5월 12일'}
      />
      <Content />
      <LinkBtn />
      <Bar />
      <Recommend />
    </ContentPageContainer>
  );
};

export default ContentPage;

const ContentPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5.8rem 36rem;
  width: 72rem;
`;
