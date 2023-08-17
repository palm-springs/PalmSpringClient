'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { styled } from 'styled-components';

import ArticleList from '@/components/common/ArticleList';
import ContentInfo from '@/components/common/ContentInfo';
import { useGetContent } from '@/hooks/editor';
import { useGetCategoryList } from '@/hooks/dashboard';
import { BlogSampleImg } from '@/public/images';
import { ArticleData } from '@/types/article';
import { getLiteralCategoryList } from '@/utils/getLiteralCategoryList';

import CategoryBtnBar from './CategoryBtnBar';

interface ArticleListWithThumbnailProps {
  articleListData: ArticleData[];
}

const ArticleListWithThumbnail = (props: ArticleListWithThumbnailProps) => {
  const { articleListData } = props;

  const { team } = useParams();

  const IndivContentId = articleListData[0].id;

  const res = useGetContent(team, IndivContentId);

  const FilteredCategoryList = useGetCategoryList(team);

  if (!FilteredCategoryList || FilteredCategoryList.data.length === 0 || !res) return <div>로더</div>;

  const { data: contentListData } = res;

  const LiteralList = getLiteralCategoryList(FilteredCategoryList);

  return (
    <>
      <ContentInfoContainer>
        {contentListData && contentListData.thumbnail && (
          <Link href={`./content/${IndivContentId}`}>
            <Image src={BlogSampleImg} alt="blog thumbnail" />
          </Link>
        )}
        <ContentInfo contentInfoData={contentListData} IndivContentId={IndivContentId} />
      </ContentInfoContainer>
      <CategoryBtnWrapper>
        <CategoryBtnBar LiteralList={LiteralList} />
      </CategoryBtnWrapper>
      <ArticleWrapper>
        <ArticleList articleList={articleListData} />
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
