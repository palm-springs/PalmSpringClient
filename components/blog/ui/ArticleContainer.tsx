'use client';

import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import ArticleList from '@/components/common/ArticleList';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetBlogCategoryList } from '@/hooks/blogHome';
import useGetCategory from '@/hooks/useGetCategory';
import { ArticleData } from '@/types/article';
import { getLiteralCategoryList } from '@/utils/getLiteralCategoryList';

import BlogImg from '../BlogImg';

import ArticleListWithThumbnail from './ArticleListWithThumbnail';
import CategoryBtnBar from './CategoryBtnBar';

interface ArticleContainerProps {
  articleListData: ArticleData[];
  thumbnail: string | null;
  description: string | null;
}

const ArticleContainer = (props: ArticleContainerProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
  const { team } = useParams();

  const MOBILE = useMediaQuery({
    query: '(min-width : 375px) and (max-width:768px)',
  });

  const { articleListData, thumbnail, description } = props;
  const FilteredCategoryList = useGetBlogCategoryList(team);
  const CategorySelected = useGetCategory();

  if (!FilteredCategoryList || !CategorySelected) return <LoadingLottie width={10} height={10} fit />;

  const LiteralList = getLiteralCategoryList(FilteredCategoryList);

  //데스크탑 뷰
  if (articleListData.length === 0 && thumbnail) {
    if (CategorySelected !== 'home') {
      //아티클 리스트가 없고 카테고리 선택 안되어있고 블로그 대문이 있을 때
      return (
        <BlogImgContainer>
          <BlogImg thumbnail={thumbnail} description={description} />
          <CategoryBtnWrapper>
            <CategoryBtnBar LiteralList={LiteralList} />
          </CategoryBtnWrapper>
        </BlogImgContainer>
      );
    } else {
      //아티클 리스트 없고 카테고리 선택되어있고 블로그 대문 있을 때
      return (
        <BlogImgContainer>
          <BlogImg thumbnail={thumbnail} description={description} />
        </BlogImgContainer>
      );
    }
  }

  //모바일 뷰
  if (articleListData.length === 0 && thumbnail && MOBILE) {
    if (CategorySelected !== 'home') {
      //아티클 리스트가 없고 카테고리 선택 안되어있고 블로그 대문이 있을 때
      return (
        <BlogImgContainer>
          <BlogImg thumbnail={thumbnail} description={description} />
          <CategoryBtnWrapper>
            <CategoryBtnBar LiteralList={LiteralList} />
          </CategoryBtnWrapper>
        </BlogImgContainer>
      );
    } else {
      //아티클 리스트 없고 카테고리 선택되어있고 블로그 대문 있을 때
      return (
        <BlogImgContainer>
          <BlogImg thumbnail={thumbnail} description={description} />
        </BlogImgContainer>
      );
    }
  }

  //데스크탑 뷰
  //아티클 리스트가 없고 블로그 대문이 없을 때
  if (articleListData.length === 0 && !thumbnail)
    return (
      <DefaultTextContainer>
        <DefaultTitle>팜스프링 기술 블로그</DefaultTitle>
        <DefaultSubText>등록된 글이 없습니다</DefaultSubText>
      </DefaultTextContainer>
    );

  //아티클 리스트가 있고 블로그 대문이 없을 때
  if (articleListData.length !== 0 && !thumbnail) return <ArticleListWithThumbnail articleList={articleListData} />;

  //아티클 리스트가 있고 블로그 대문이 있을 때
  if (articleListData.length !== 0 && thumbnail)
    return (
      <>
        <BlogImg thumbnail={thumbnail} description={description} />
        <CategoryBtnWrapper>
          <CategoryBtnBar LiteralList={LiteralList} />
        </CategoryBtnWrapper>
        <ArticleWrapper>
          <ArticleList articleList={articleListData} />
        </ArticleWrapper>
      </>
    );

  //모바일 뷰
  //아티클 리스트가 없고 블로그 대문이 없을 때 -- 완
  if (articleListData.length === 0 && !thumbnail && MOBILE) {
    return (
      <DefaultTextContainer>
        <DefaultTitle>팜스프링 기술 블로그</DefaultTitle>
        <DefaultSubText>등록된 글이 없습니다</DefaultSubText>
      </DefaultTextContainer>
    );
  }

  //아티클 리스트가 있고 블로그 대문이 없을 때 -- 완
  if (articleListData.length !== 0 && !thumbnail && MOBILE) {
    return <ArticleListWithThumbnail articleList={articleListData} />;
  }
  //아티클 리스트가 있고 블로그 대문이 있을 때 -- 완
  if (articleListData.length !== 0 && thumbnail && MOBILE) {
    return (
      <>
        <BlogImg thumbnail={thumbnail} description={description} />
        <CategoryBtnWrapper>
          <CategoryBtnBar LiteralList={LiteralList} />
        </CategoryBtnWrapper>
        <ArticleWrapper>
          <ArticleList articleList={articleListData} />
        </ArticleWrapper>
      </>
    );
  }
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
  align-items: center;
  justify-content: center;

  padding: 34rem 0 25.6rem;
  width: 100%;
  height: 70.8rem;
`;
