'use client';
import Link from 'next/link';
import styled from 'styled-components';

import { ArrowLeftIcon } from '@/public/icons';

import ArticleInfo from './ArticleInfo';
import ArticleStatistic from './ArticleStatistic';

interface StatisticsDetailTemplateProps {
  articleId: number;
}
const StatisticsDetailTemplate = (props: StatisticsDetailTemplateProps) => {
  const { articleId } = props;
  const team = 'testtest';

  // article 상세 통계 데이터 불러오기
  return (
    <StatisticsDetailContainer>
      <LinkContainer>
        <ArrowLeftIcon />
        <Link href={`/${team}/dashboard/statistics`}>통계 홈으로 이동</Link>
      </LinkContainer>
      <ArticleInfo />
      <ArticleStatistic />
    </StatisticsDetailContainer>
  );
};

export default StatisticsDetailTemplate;

const StatisticsDetailContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey_400};
  height: 100vh; /* 명지 언니가 height 조정 */
  overflow-y: auto;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_400};
  padding-left: 3rem;
  height: 5.8rem;

  & > a {
    ${({ theme }) => theme.fonts.Body2_Regular};
  }
`;
