'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import ArticleList from '@/components/common/ArticleList';
import ContentInfo from '@/components/common/ContentInfo';
import { ARTICLE_LIST } from '@/constants/articleList';
import { BLOG_INFO } from '@/constants/blogInfo';
import { CONTENT_INFO } from '@/constants/ContentInfo';
import { BlogSampleImg } from '@/public/images';

import BlogImg from '../BlogImg';

import CategoryBtnBar from './CategoryBtnBar';

const ArticleContainer = () => {
  return (
    <>
      {/* //article list가 있을 때 - 블로그 대문이미지가 있을 때와 없을 때로 나뉨 */}
      {ARTICLE_LIST.length !== 0 ? (
        BLOG_INFO.thumbnail ? (
          <>
            <BlogImg blogImgUrl={BLOG_INFO.thumbnail} blogInfo={BLOG_INFO.description} />
            <CategoryBtnWrapper>
              <CategoryBtnBar />
            </CategoryBtnWrapper>
            <ArticleWrapper>
              <ArticleList articleList={ARTICLE_LIST} />
            </ArticleWrapper>
          </>
        ) : (
          <>
            <ContentInfoContainer>
              {CONTENT_INFO.thumbnail && (
                <Link href={`./content/contentNameHere`}>
                  <Image src={BlogSampleImg} alt="blog thumbnail" />
                </Link>
                //실제 썸네일 url이 들어오면 위의 코드는 삭제 후 밑의 코드를 사용할 예정입니다!
                // <Image src={CONTENT_INFO.thumbnail} alt="blog thumbnail" width={720} height={450} />
              )}
              <ContentInfo content={CONTENT_INFO} />
            </ContentInfoContainer>
            <CategoryBtnWrapper>
              <CategoryBtnBar />
            </CategoryBtnWrapper>
            <ArticleWrapper>
              <ArticleList articleList={ARTICLE_LIST} />
            </ArticleWrapper>
          </>
        )
      ) : BLOG_INFO.thumbnail ? (
        <BlogImgContainer>
          {/* //article list가 없을 때 - 블로그 대문이미지가 있을 때와 없을 때로 나뉨 */}
          <BlogImg blogImgUrl={BLOG_INFO.thumbnail} blogInfo={BLOG_INFO.description} />
        </BlogImgContainer>
      ) : (
        <DefaultTextContainer>
          <DefaultTitle>팜스프링 기술 블로그</DefaultTitle>
          <DefaultSubText>등록된 글이 없습니다</DefaultSubText>
        </DefaultTextContainer>
      )}
    </>
  );
};

export default ArticleContainer;

const DefaultTitle = styled.div`
  ${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.grey_900};
`;
const DefaultSubText = styled.div`
  ${({ theme }) => theme.fonts.Heading3_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};
`;

const ContentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 12rem;
`;

const ArticleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 11rem;
  min-width: 105.6rem;
`;
const CategoryBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 105.6rem;
`;

const BlogImgContainer = styled.div`
  padding-bottom: 22.3rem;
  width: 100%;
`;

const DefaultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 34rem 0 25.6rem;
  height: 70.8rem;
`;
