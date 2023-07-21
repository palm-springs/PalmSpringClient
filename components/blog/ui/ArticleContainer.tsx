'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import ArticleList from '@/components/common/ArticleList';
import ContentInfo from '@/components/common/ContentInfo';
import { useGetCategoryList } from '@/hooks/dashboard';
import { BlogSampleImg } from '@/public/images';
import { ArticleData } from '@/types/article';
import { ContentProps } from '@/types/content';
import { getLiteralCategoryList } from '@/utils/getLiteralCategoryList';

import BlogImg from '../BlogImg';

import CategoryBtnBar from './CategoryBtnBar';

interface ArticleContainerProps {
  articleListData: ArticleData[];
  thumbnail: string | null;
  description: string | null;
  contentInfoData: ContentProps;
  IndivContentId: number;
}

const ArticleContainer = (props: ArticleContainerProps) => {
  const { team } = useParams();
  const { articleListData, thumbnail, description, contentInfoData, IndivContentId } = props;

  const FilteredCategoryList = useGetCategoryList(team);
  console.log(FilteredCategoryList);

  if (!FilteredCategoryList) return <div>로더</div>;

  const LiteralList = getLiteralCategoryList(FilteredCategoryList);

  return (
    <>
      {/* //article list가 있을 때 - 블로그 대문이미지가 있을 때와 없을 때로 나뉨 */}
      {articleListData.length == 0 ? (
        thumbnail ? (
          <>
            <BlogImg thumbnail={thumbnail} description={description} />
            <CategoryBtnWrapper>
              <CategoryBtnBar LiteralList={LiteralList} />
            </CategoryBtnWrapper>
            <ArticleWrapper>
              <ArticleList articleList={articleListData} />
            </ArticleWrapper>
          </>
        ) : (
          <>
            <ContentInfoContainer>
              {contentInfoData.thumbnail && (
                <Link href={`./content/${IndivContentId}`}>
                  <Image src={BlogSampleImg} alt="blog thumbnail" />
                </Link>
                //실제 썸네일 url이 들어오면 위의 코드는 삭제 후 밑의 코드를 사용할 예정입니다!
                // <Image src={CONTENT_INFO.thumbnail} alt="blog thumbnail" width={720} height={450} />
              )}
              <ContentInfo contentInfoData={contentInfoData} IndivContentId={IndivContentId} />
            </ContentInfoContainer>
            <CategoryBtnWrapper>
              <CategoryBtnBar LiteralList={LiteralList} />
            </CategoryBtnWrapper>
            <ArticleWrapper>
              <ArticleList articleList={articleListData} />
            </ArticleWrapper>
          </>
        )
      ) : thumbnail ? (
        <BlogImgContainer>
          {/* //article list가 없을 때 - 블로그 대문이미지가 있을 때와 없을 때로 나뉨 */}
          <BlogImg thumbnail={thumbnail} description={description} />
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
