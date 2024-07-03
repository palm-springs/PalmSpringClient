'use client';
import styled from 'styled-components';

import Line from '../dashboard/components/ui/Line';

import ArticleStatistic from './ArticleStatistic';
import BlogStatistic from './BlogStatistic';

const StatisticsTemplate = () => {
  return (
    <div>
      <Line />
      <StaticContainer>
        <BlogStatistic />
        <ArticleStatistic />
      </StaticContainer>
    </div>
  );
};

export default StatisticsTemplate;

const StaticContainer = styled.div`
  height: calc(100vh - 15rem);
  overflow-y: auto;
`;
