import styled from 'styled-components';

import VisitantUI from '../BlogStatistics/VisitantUI';

const ArticleStatistic = () => {
  const getCurrentDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  const currentDate = getCurrentDate();

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
