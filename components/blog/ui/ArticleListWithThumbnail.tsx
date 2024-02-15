'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { styled } from 'styled-components';

import ArticleList from '@/components/common/ArticleList';
import ContentInfo from '@/components/common/ContentInfo';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import useCheckMobile from '@/hooks/useCheckMobile';
import { ArticleData } from '@/types/article';
import { Response } from '@/types/common';
import { ContentProps } from '@/types/content';
import { CategoryListProps } from '@/types/dashboard';

import MobileStickyBtn from '../MobileStickyBtn';

import CategoryBtnBar from './CategoryBtnBar';

interface ArticleListWithThumbnailProps {
  articleList: ArticleData[];
  filteredCategoryList: Response<CategoryListProps[]>;
  singleArticleDetail: Response<ContentProps>;
  literalList: string[];
}

const ArticleListWithThumbnail = (props: ArticleListWithThumbnailProps) => {
  const { articleList, filteredCategoryList, singleArticleDetail, literalList } = props;
  const { category } = useParams();

  const categoryName = decodeURI(category);

  const FilteredArticleList = articleList.filter(
    ({ articleCategory }) => articleCategory.categoryName === categoryName,
  );
  const MOBILE = useCheckMobile();

  const IndivContentId = articleList[0].id;
  const articleUrl = articleList[0].articleUrl;

  if (!filteredCategoryList || filteredCategoryList.data.length === 0 || !singleArticleDetail)
    return <LoadingLottie width={10} height={10} fit />;

  const { data: contentListData } = singleArticleDetail;

  if (MOBILE)
    return (
      <>
        <CategoryBtnWrapper className="mobile">
          <CategoryBtnBar LiteralList={literalList} />
        </CategoryBtnWrapper>
        <ArticleWrapper>
          <ArticleList articleList={category ? FilteredArticleList : articleList} />
        </ArticleWrapper>
        {MOBILE && <MobileStickyBtn />}
      </>
    );
  else
    return (
      <>
        <ContentInfoContainer>
          {contentListData && contentListData.thumbnail && (
            <Link href={`/content/article/${articleUrl}/${IndivContentId}`}>
              <ContentThumbnail width="720" height="405" src={contentListData.thumbnail} alt="content thumbnail" />
            </Link>
          )}
          <ContentInfo contentInfoData={contentListData} articleUrl={articleUrl} IndivContentId={IndivContentId} />
        </ContentInfoContainer>
        <CategoryBtnWrapper>
          <CategoryBtnBar LiteralList={literalList} />
        </CategoryBtnWrapper>
        <ArticleWrapper>
          <ArticleList articleList={category ? FilteredArticleList : articleList} />
        </ArticleWrapper>
      </>
    );
};

export default ArticleListWithThumbnail;

const ContentThumbnail = styled(Image)`
  border-radius: 1.6rem;
  object-fit: cover;
`;

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

  &.mobile {
    margin-top: 6rem;
  }
`;
