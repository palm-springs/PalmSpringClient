'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import CategorySelect from '@/components/editor/publish/ui/CategorySelect';
import OneLiner from '@/components/editor/publish/ui/OneLiner';
import PublishBottomButtons from '@/components/editor/publish/ui/PublishBottom';
import PublishTitle from '@/components/editor/publish/ui/PublishTitle';
import ThumbnailInput from '@/components/editor/publish/ui/ThumbnailInput';
import UrlCustom from '@/components/editor/publish/ui/UrlCustom';
import { useGetUpdateArticleContent } from '@/hooks/editor';

const ArticleEditPublishPage = () => {
  const { team, articleId } = useParams();
  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(false);
  const [isAddressRulePassed, setIsAddressRulePassed] = useState<boolean>(true);
  const updateArticleEditContents = useGetUpdateArticleContent(String(team), Number(articleId));

  return (
    <AuthRequired>
      <PublishContainer>
        <ArticlePublishContainer>
          {updateArticleEditContents && (
            <>
              <ThumbnailInput pageType="article" updatedArticleData={updateArticleEditContents.data} />
              <PublishTitle pageType="article" />
              <CategorySelect updatedArticleData={updateArticleEditContents.data} />
              <OneLiner updatedArticleData={updateArticleEditContents.data} />
              <UrlCustom
                pageType="article"
                isDuplicate={isDuplicate}
                isAddressRulePassed={isAddressRulePassed}
                setIsAddressRulePassed={setIsAddressRulePassed}
                setIsDuplicate={setIsDuplicate}
                updatedArticleData={updateArticleEditContents.data}
              />
              <PublishBottomButtons
                pageType="article"
                currentState="edit"
                isDuplicate={isDuplicate}
                updatedArticleData={updateArticleEditContents.data}
                isAddressRulePassed={isAddressRulePassed}
              />
            </>
          )}
        </ArticlePublishContainer>
      </PublishContainer>
    </AuthRequired>
  );
};

export default ArticleEditPublishPage;

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
