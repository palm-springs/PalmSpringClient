'use client';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { UpdateArticleProps } from '@/types/article';
import { UpdatePageProps } from '@/types/page';

import { articleDataState, pageDataState } from '../../states/atom';

interface PublishTitleprops {
  pageType: string;
}

//정보 get 해야함
const PublishTitle = (props: PublishTitleprops) => {
  const { pageType } = props;
  const [titleValue, setTitleValue] = useState('');

  const [{ title: articleTitle }] = useRecoilState(articleDataState);
  const [{ title: pageTitle }] = useRecoilState(pageDataState);

  useEffect(() => {
    const selectTitle = () => {
      if (pageType === 'article') {
        if (articleTitle) setTitleValue(articleTitle);
      } else if (pageType === 'page') {
        if (pageTitle) setTitleValue(pageTitle);
      }
      return;
    };
    selectTitle();
  }, []);

  return (
    <TitleWrapper>
      <EditorInputTitle>{titleValue}</EditorInputTitle>
    </TitleWrapper>
  );
};

export default PublishTitle;

const TitleWrapper = styled.div`
  width: 54rem;
`;

const EditorInputTitle = styled.p`
  ${({ theme }) => theme.fonts.Heading1};
  margin: 2.4rem 0;
  width: 54rem;
  overflow: hidden;
  text-overflow: clip;
  word-break: break-all;

  color: ${({ theme }) => theme.colors.grey_950};
`;
