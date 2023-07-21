'use client';

import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import styled from 'styled-components';

import ContentInfo from '@/components/common/ContentInfo';
import Content from '@/components/content/Content';
import Bar from '@/components/content/ui/Bar';
import Recommend from '@/components/content/ui/Recommend';
import { BlogSampleImg } from '@/public/images';
import { ContentProps } from '@/types/content';

interface ContentTemplateProps {
  data: ContentProps;
}

const ContentTemplate = (props: ContentTemplateProps) => {
  const {
    data: { thumbnail, title, description, teamMember, content },
  } = props;

  const notify = () =>
    toast.success('링크가 복사되었습니다', {
      id: 'link copied',
      style: {
        padding: '1.6rem 2rem',
        borderRadius: '3.2rem',
        background: '#343A40',
        color: '#fff',
        fontSize: '1.4rem',
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: '-0.028rem',
      },
    });

  const copyCurrentUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    notify();
  };

  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerClassName=""
        containerStyle={{
          bottom: 50,
        }}
      />

      <ContentPageContainer>
        {thumbnail && <Image src={BlogSampleImg} alt="blog thumbnail" />}
        {/* 위의 image 태그의 src는 실제 사진 url 이 넘어오면 바꿔줄 예정입니다 */}
        {/* {thumbnail && <Image src={thumbnail} alt="blog thumbnail" />} */}
        <ContentInfo contentInfoData={{ title, description, teamMember }} />
        <Content content={content} />
        <LinkBtn onClick={copyCurrentUrl}>아티클 링크 복사하기</LinkBtn>
        <Bar />
        <Recommend />
      </ContentPageContainer>
    </>
  );
};

export default ContentTemplate;

const ContentPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 11.8rem 36rem;
  width: 72rem;
`;

const LinkBtn = styled.button`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  align-items: center;

  border: none;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.grey_200};

  padding: 0 1.4rem;
  height: 3.2rem;

  color: ${({ theme }) => theme.colors.grey_900};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_400};
  }
`;