'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetBlogSummary } from '@/hooks/dashboard';
import { ArticlePeriodProps } from '@/types/dashboard';

import VisitantCard from './VisitantCard';
import VisitantChart from './VistantChart';

interface CardsProps {
  statisticValue: string;
  articleData?: ArticlePeriodProps;
}

const VisitantUI = (props: CardsProps) => {
  const { team } = useParams();
  const { statisticValue, articleData } = props;

  //아티클 통계 차트 부분 api
  const articleViewArray = [
    articleData?.summary.day.views,
    articleData?.summary.month.views,
    articleData?.summary.total.views,
  ];
  const articleRate = [articleData?.summary.day.rate, articleData?.summary.month.rate, null];
  const articleIsIncrease = [articleData?.summary.day.isIncrease, articleData?.summary.month.isIncrease, null];

  //블로그 통계 차트 부분 api
  const data = useGetBlogSummary(String(team));
  if (!data) {
    return <LoadingLottie height={4} width={4} fit={false} />;
  }
  const c = [1, 2, 3];
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(1);
  const percentTitle = ['전일 대비', '전월 대비', null];
  const cardTitle = ['오늘', `${month}월`, '누적'];
  const viewsArray = [data.data.day.views, data.data.month.views, data.data.total.views];
  const rate = [data.data.day.rate, data.data.month.rate, null];

  //소수점 첫째자리 반올림, 0인 경우 0빼기
  const roundedRate = rate.map((r) => {
    if (r !== null && r !== undefined) {
      const rounded = parseFloat(r.toFixed(1));
      return Number.isInteger(rounded) ? parseFloat(rounded.toFixed(0)) : rounded;
    }
    return r;
  });

  const isIncrease = [data.data.day.isIncrease, data.data.month.isIncrease, null];

  return (
    <VisitantContainer>
      <Container>
        {c.map((i, index) => (
          <VisitantCard
            key={index}
            statisticValue={statisticValue}
            percentTitle={percentTitle[index]}
            title={cardTitle[index]}
            view={viewsArray[index]}
            rate={roundedRate[index]}
            isIncrease={isIncrease[index]}
            articleViewArray={articleViewArray[index]}
            articleRate={articleRate[index]}
            articleIsIncrease={articleIsIncrease[index]}
          />
        ))}
      </Container>
      <VisitantChart articleChartData={articleData} statisticValue={statisticValue} />
    </VisitantContainer>
  );
};

export default VisitantUI;

const VisitantContainer = styled.div`
  margin: 2rem 2rem 0 4rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.1rem;
`;
