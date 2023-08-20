'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { styled } from 'styled-components';

import ArticleList from '@/components/common/ArticleList';
import ContentInfo from '@/components/common/ContentInfo';
import { useGetContent } from '@/hooks/article';
import { useGetCategoryList } from '@/hooks/dashboard';
import { ArticleData } from '@/types/article';
import { getLiteralCategoryList } from '@/utils/getLiteralCategoryList';

import CategoryBtnBar from './CategoryBtnBar';

interface ArticleListWithThumbnailProps {
  articleList: ArticleData[];
}

const ArticleListWithThumbnail = (props: ArticleListWithThumbnailProps) => {
  const { articleList } = props;

  const MOBILE = useMediaQuery({
    query: '(min-width : 375px) and (max-width:768px)',
  });

  const { team } = useParams();

  const IndivContentId = articleList[0].id;
  const articleUrl = articleList[0].articleUrl;
  const res = useGetContent(team, IndivContentId);

  const FilteredCategoryList = useGetCategoryList(team);

  if (!FilteredCategoryList || FilteredCategoryList.data.length === 0 || !res) return <div>로더</div>;

  const { data: contentListData } = res;

  const LiteralList = getLiteralCategoryList(FilteredCategoryList);

  if (MOBILE)
    return (
      <>
        <ContentInfoContainer>
          {contentListData && contentListData.thumbnail && (
            <Link href={`/${team}/content/article/${articleUrl}/${IndivContentId}`}>
              <Image src={contentListData.thumbnail} alt="blog thumbnail" />
            </Link>
          )}
          <ContentInfo contentInfoData={contentListData} articleUrl={articleUrl} IndivContentId={IndivContentId} />
        </ContentInfoContainer>
        <CategoryBtnWrapper>
          <CategoryBtnBar LiteralList={LiteralList} />
        </CategoryBtnWrapper>
        <ArticleWrapper>
          <ArticleList articleList={articleList} />
        </ArticleWrapper>
      </>
    );
  else
    return (
      <>
        <ContentInfoContainer>
          {contentListData && contentListData.thumbnail && (
            <Link href={`/${team}/content/article/${articleUrl}/${IndivContentId}`}>
              <Image src={contentListData.thumbnail} alt="blog thumbnail" />
            </Link>
          )}
          <ContentInfo contentInfoData={contentListData} articleUrl={articleUrl} IndivContentId={IndivContentId} />
        </ContentInfoContainer>
        <CategoryBtnWrapper>
          <CategoryBtnBar LiteralList={LiteralList} />
        </CategoryBtnWrapper>
        <ArticleWrapper>
          <ArticleList articleList={articleList} />
        </ArticleWrapper>
      </>
    );
};

export default ArticleListWithThumbnail;

const ContentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 12rem;
  width: 100%;
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
