'use client';

import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import ContentInfo from '@/components/common/ContentInfo';
import Content from '@/components/content/Content';
import Bar from '@/components/content/ui/Bar';
import Recommend from '@/components/content/ui/Recommend';

interface ContentTemplateProps {
  data: {
    title: string;
    thumbnail: string;
    content: string;
  };
}

const PageTemplate = (props: ContentTemplateProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const {
    data: { title, thumbnail, content },
  } = props;

  const MOBILE = useMediaQuery({
    query: '(min-width : 375px) and (max-width:768px)',
  });

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
    if (typeof window !== undefined) {
      navigator.clipboard.writeText(window.location.href);
      notify();
    }
  };

  const PageMain = () => {
    if (MOBILE)
      return (
        <ContentPageContainer className="mobile">
          {thumbnail && <PageThumbnail className="mobile" src={thumbnail} alt="page content thumbnail" />}
          <ContentInfo contentInfoData={{ title }} />
          <Content content={content} />
          <LinkBtn className="mobile" type="button" onClick={copyCurrentUrl}>
            아티클 링크 복사하기
          </LinkBtn>
          <Recommend />
        </ContentPageContainer>
      );
    else
      return (
        <ContentPageContainer>
          {thumbnail && <PageThumbnail src={thumbnail} alt="page content thumbnail" />}
          <ContentInfo contentInfoData={{ title }} />
          <Content content={content} />
          <LinkBtn onClick={copyCurrentUrl}>아티클 링크 복사하기</LinkBtn>
          <Bar />
          <Recommend />
        </ContentPageContainer>
      );
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
      {PageMain()}
    </>
  );
};

export default PageTemplate;

const PageThumbnail = styled.img`
  border-radius: 1.6rem;
  width: 72rem;
  height: 40.5rem;

  user-select: none;
  -webkit-user-drag: none;
  object-fit: cover;

  &.mobile {
    margin-top: 6rem;
    border-radius: 0;
    width: 100%;
    height: 37.5rem;
  }
`;

const ContentPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 11.8rem 36rem;

  &.mobile {
    margin: 0;
    width: 100vw;
  }
`;

const LinkBtn = styled.button`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  align-items: center;

  margin: 6rem 0 5.8rem;

  border: none;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.grey_200};
  padding: 0 1.4rem;
  min-width: 17.2rem;
  height: 3.2rem;

  color: ${({ theme }) => theme.colors.grey_900};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_400};
  }

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Button};

    margin: 4rem 0;
    padding: 0 2rem;
    height: 3.6rem;
  }
`;
