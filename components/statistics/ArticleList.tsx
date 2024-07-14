'use client';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import { useGetArticleStatisticsList } from '@/hooks/dashboard';
import { ArticleStatics } from '@/types/dashboard';

import LoadingLottie from '../common/ui/LoadingLottie';

import ArticleField from './ArticleField';
import ArticleItem from './ArticleItem';

const ArticleList = () => {
  const { team } = useParams();
  const data = useGetArticleStatisticsList(String(team));

  if (!data) return <LoadingLottie width={4} height={4} />;

  const ArticleList = data.data.map((props: ArticleStatics) => {
    return <ArticleItem key={props.id} {...props} />;
  });

  return (
    <ArticleListContainer>
      <ArticleField />
      {ArticleList}
    </ArticleListContainer>
  );
};

export default ArticleList;

const ArticleListContainer = styled.div`
  margin-top: 3.5rem;
  padding-right: 5.6rem;
  padding-bottom: 3.5rem;
`;
