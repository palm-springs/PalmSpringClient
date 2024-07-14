'use client';
import Link from 'next/link';
import styled from 'styled-components';

import { ArticleStatics } from '@/types/dashboard';

const ArticleItem = (props: ArticleStatics) => {
  const { id, title, author, createdAt, todayViews, totalViews } = props;
  return (
    <ArticleItemContainer>
      <Value className="title">{title}</Value>
      <Value className="author">{author}</Value>
      <Value className="date">{createdAt}</Value>
      <Value>{todayViews}</Value>
      <Value>{totalViews}</Value>
      <StatisticsDetailButton href={`statistics/${id}`}>통계</StatisticsDetailButton>
    </ArticleItemContainer>
  );
};

export default ArticleItem;

const ArticleItemContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_400};

  padding: 1.4rem 0;
  width: 100%;
`;

const Value = styled.span`
  ${({ theme }) => theme.fonts.Body3_Regular};
  width: 10%;
  color: ${({ theme }) => theme.colors.grey_700};

  &:last-child {
    margin-right: 7rem;
  }
  &.author {
    width: 7%;
    ${({ theme }) => theme.fonts.Body3_Regular};
    color: ${({ theme }) => theme.colors.grey_900};
  }
  &.title {
    ${({ theme }) => theme.fonts.Body3_Semibold};
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.grey_900};
  }
`;

const StatisticsDetailButton = styled(Link)`
  ${({ theme }) => theme.fonts.Caption};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.grey_900};
  width: 4.4rem;
  height: 2.5rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
