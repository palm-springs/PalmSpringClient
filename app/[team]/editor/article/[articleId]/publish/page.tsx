'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import CategorySelect from '@/components/editor/publish/ui/CategorySelect';
import OneLiner from '@/components/editor/publish/ui/OneLiner';
import PublishBottomButtons from '@/components/editor/publish/ui/PublishBottom';
import PublishTitle from '@/components/editor/publish/ui/PublishTitle';
import ThumbnailInput from '@/components/editor/publish/ui/ThumbnailInput';
import UrlCustom from '@/components/editor/publish/ui/UrlCustom';
import { articleDataState } from '@/components/editor/states/atom';
import { useGetUpdateArticleContent } from '@/hooks/editor';

interface Publishprops {
  currentState?: string;
}

const UpdateArticlePublishPage = (props: Publishprops) => {
  const { currentState } = props;

  const { team, articleId } = useParams();
  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(false);
  const updateArticleEditContents = useGetUpdateArticleContent(Number(articleId)); // number 값 ArticleId로 바꿀거이
  const [{ title: articleTitle }, setArticleData] = useRecoilState(articleDataState); // 아티클 초기 타이틀 -> 복사 -> 새로운 title 갈아끼기

  return (
    <AuthRequired>
      <PublishContainer>
        <ArticlePublishContainer>
          {updateArticleEditContents ? (
            <>
              <ThumbnailInput pageType="article" articleData={updateArticleEditContents.data} />
              <PublishTitle pageType="article" articleData={updateArticleEditContents.data} />
              <CategorySelect articleData={updateArticleEditContents.data} />
              <OneLiner articleData={updateArticleEditContents.data} />
              <UrlCustom
                pageType="article"
                isDuplicate={isDuplicate}
                setIsDuplicate={setIsDuplicate}
                articleData={updateArticleEditContents.data}
              />
              <PublishBottomButtons
                pageType="article"
                isDuplicate={isDuplicate}
                articleData={updateArticleEditContents.data}
              />
            </>
          ) : (
            <>
              <ThumbnailInput pageType="article" />
              <PublishTitle pageType="article" />
              <CategorySelect />
              <OneLiner />
              <UrlCustom pageType="article" isDuplicate={isDuplicate} setIsDuplicate={setIsDuplicate} />
              <PublishBottomButtons
                pageType="article"
                isDuplicate={isDuplicate}
                isEdit={currentState === 'edit' ? true : false}
              />
            </>
          )}
        </ArticlePublishContainer>
      </PublishContainer>
    </AuthRequired>
  );
};

export default UpdateArticlePublishPage;

const PublishContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100vw; */
`;

const ArticlePublishContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8.1rem 45rem;
  width: 54rem;
  /* height: 100vh; */
`;
