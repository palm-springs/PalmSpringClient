import React from 'react';

import StatisticsDetailTemplate from '@/components/statistics/detail/StatisticsDetailTemplate';
import StatisticsTemplate from '@/components/statistics/StatisticsTemplate';

const statistics = ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
  // 가입 인증 code
  const articleId = searchParams.articleId;
  if (!articleId) return <StatisticsTemplate />;

  return <StatisticsDetailTemplate articleId={Number(articleId)} />;
};

export default statistics;
