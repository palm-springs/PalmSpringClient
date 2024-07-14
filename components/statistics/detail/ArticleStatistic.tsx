import styled from 'styled-components';

import { ArticlePeriodProps } from '@/types/dashboard';
import { getCurrentDateTime } from '@/utils/getCurrentDateTime';

import VisitantUI from '../BlogStatistics/VisitantUI';
interface ArticleStatisticProps {
  articleData: ArticlePeriodProps;
}

const ArticleStatistic = (props: ArticleStatisticProps) => {
  const currentDate = getCurrentDateTime();

  return (
    <>
      <ArticleStatisticsWrapper>
        <ArticleStatisticsTitle>해당 게시글 통계</ArticleStatisticsTitle>
        <ArticleStatisticsTime>{currentDate} 기준</ArticleStatisticsTime>
      </ArticleStatisticsWrapper>
      <VisitantUI statisticValue="views" {...props} />
    </>
  );
};

export default ArticleStatistic;
const ArticleStatisticsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 4rem 0 0 4rem;
`;

const ArticleStatisticsTime = styled.p`
  margin: 0.4rem 0 0 0.8rem;
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.grey_700};
`;

const ArticleStatisticsTitle = styled.h2`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};
`;
