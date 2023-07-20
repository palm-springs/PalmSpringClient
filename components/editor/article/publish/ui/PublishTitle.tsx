import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import ARTICLE_CONTENT from '@/constants/ArticleContent';

interface PublishTitleprops {
  pageType: string;
}

//정보 get 해야함

const PublishTitle = (props: PublishTitleprops) => {
  const { pageType } = props;
  const router = useRouter();
  return <ArticleTitle>{ARTICLE_CONTENT.article.title}</ArticleTitle>;
};

export default PublishTitle;

const ArticleTitle = styled.p`
  margin: 2.4rem 0;
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Heading1};
`;
