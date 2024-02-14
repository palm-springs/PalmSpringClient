'use client';

import React from 'react';
import styled from 'styled-components';

import ArticleList from '@/components/common/ArticleList';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import useCheckMobile from '@/hooks/useCheckMobile';
import useGetCategory from '@/hooks/useGetCategory';
import { ArticleData } from '@/types/article';
import { Response } from '@/types/common';
import { ContentProps } from '@/types/content';
import { CategoryListProps } from '@/types/dashboard';
import { getLiteralCategoryList } from '@/utils/getLiteralCategoryList';

import BlogImg from '../BlogImg';
import MobileStickyBtn from '../MobileStickyBtn';

import ArticleListWithThumbnail from './ArticleListWithThumbnail';
import CategoryBtnBar from './CategoryBtnBar';

interface ArticleContainerProps {
  articleListData: ArticleData[];
  thumbnail: string | null;
  description: string | null;
  blogName: string;
  filteredCategoryList: Response<CategoryListProps[]>;
  singleArticleDetail: Response<ContentProps>;
}

const ArticleContainer = (props: ArticleContainerProps) => {
  const MOBILE = useCheckMobile();

  const { articleListData, thumbnail, description, blogName, filteredCategoryList, singleArticleDetail } = props;
  const CategorySelected = useGetCategory();

  if (!filteredCategoryList || !CategorySelected) return <LoadingLottie width={10} height={10} fit />;

  const LiteralList = getLiteralCategoryList(filteredCategoryList);

  if (articleListData?.length === 0 && thumbnail) {
    if (CategorySelected !== 'home') {
      //아티클 리스트가 없고 카테고리 선택 안되어있고 블로그 대문이 있을 때
      return (
        <BlogImgContainer>
          <BlogImg thumbnail={thumbnail} description={description} />
          <CategoryBtnWrapper>
            <CategoryBtnBar LiteralList={LiteralList} />
          </CategoryBtnWrapper>
          {MOBILE && <MobileStickyBtn />}
        </BlogImgContainer>
      );
    } else {
      //아티클 리스트 없고 카테고리 선택되어있고 블로그 대문 있을 때
      return (
        <BlogImgContainer>
          <BlogImg thumbnail={thumbnail} description={description} />
          {MOBILE && <MobileStickyBtn />}
        </BlogImgContainer>
      );
    }
  }

  //아티클 리스트가 없고 블로그 대문이 없을 때
  if (articleListData?.length === 0 && !thumbnail)
    return (
      <>
        <DefaultTextContainer className={MOBILE ? 'mobile' : ''}>
          <DefaultTitle className={MOBILE ? 'mobile' : ''}>{blogName}</DefaultTitle>
          <DefaultSubText className={MOBILE ? 'mobile' : ''}>등록된 글이 없습니다</DefaultSubText>
        </DefaultTextContainer>
        {MOBILE && <MobileStickyBtn />}
      </>
    );

  //아티클 리스트가 있고 블로그 대문이 없을 때
  if (articleListData?.length !== 0 && !thumbnail)
    return (
      <ArticleListWithThumbnail
        articleList={articleListData}
        filteredCategoryList={filteredCategoryList}
        singleArticleDetail={singleArticleDetail}
        literalList={LiteralList}
      />
    );

  //아티클 리스트가 있고 블로그 대문이 있을 때
  if (articleListData?.length !== 0 && thumbnail)
    return (
      <>
        <BlogImg thumbnail={thumbnail} description={description} />
        <CategoryBtnWrapper>
          <CategoryBtnBar LiteralList={LiteralList} />
        </CategoryBtnWrapper>
        <ArticleWrapper>
          <ArticleList articleList={articleListData} />
        </ArticleWrapper>
        {MOBILE && <MobileStickyBtn />}
      </>
    );

  return <LoadingLottie width={10} height={10} fit />;
};

export default ArticleContainer;

const DefaultTitle = styled.div`
  ${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.grey_900};

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Title1};
  }
`;
const DefaultSubText = styled.div`
  ${({ theme }) => theme.fonts.Heading3_Semibold};
  color: ${({ theme }) => theme.colors.grey_700};

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Body1_Semibold};
  }
`;

const ArticleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 11rem;
  width: 100vw;
`;
const CategoryBtnWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
`;

const BlogImgContainer = styled.div`
  padding-bottom: 22.3rem;
  width: 100%;
`;

const DefaultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  align-items: center;
  justify-content: center;
  padding: 0 7.2rem;

  padding: 34rem 0 25.6rem;
  width: 100%;

  &.mobile {
    height: calc(100vh - 20rem);
  }
`;
