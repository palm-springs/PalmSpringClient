'use client';
import styled from 'styled-components';

import Line from '../dashboard/components/ui/Line';

import ArticleListStatistic from './ArticleListStatistic';
import BlogStatistic from './BlogStatistic';

const StatisticsTemplate = () => {
  return (
    <div>
      <Line />
      <StaticContainer>
        <BlogStatistic />
        <ArticleListStatistic />
      </StaticContainer>
    </div>
  );
};

export default StatisticsTemplate;

const StaticContainer = styled.div`
  height: calc(100vh - 15rem);
  overflow-y: auto;
`;
