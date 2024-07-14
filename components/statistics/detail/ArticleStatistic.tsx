import styled from 'styled-components';

import { getCurrentDateTime } from '@/utils/getCurrentDateTime';

import VisitantUI from '../BlogStatistics/VisitantUI';

const ArticleStatistic = () => {
  const currentDate = getCurrentDateTime();

  return (
    <>
      <ArticleStatisticsWrapper>
        <ArticleStatisticsTitle>해당 게시글 통계</ArticleStatisticsTitle>
        <ArticleStatisticsTime>{currentDate} 기준</ArticleStatisticsTime>
      </ArticleStatisticsWrapper>
      <VisitantUI statisticValue="views" />
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
