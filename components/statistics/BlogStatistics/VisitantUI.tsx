'use client';

import React from 'react';
import styled from 'styled-components';
import VisitantCard from './VisitantCard';
import VisitantChart from './VistantChart';
import { useGetArticlePeriod, useGetBlogSummary } from '@/hooks/dashboard';
import { useParams } from 'next/navigation';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { endDateState, startDateState } from '@/recoil/atom/dashboard';
import { useRecoilState } from 'recoil';

interface CardsProps {
  statisticValue: string;
}

const VisitantUI = (props: CardsProps) => {
  const { team } = useParams();
  const { statisticValue } = props;

  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);

  //아티클 통계 차트 부분 api
  const res = useGetArticlePeriod(357, startDate, endDate);
  const articleChartData = res?.data;
  const articleViewArray = [res?.data.summary.day.views, res?.data.summary.month.views, res?.data.summary.total.views];
  const articleRate = [res?.data.summary.day.rate, res?.data.summary.month.rate, null];
  const articleIsIncrease = [res?.data.summary.day.isIncrease, res?.data.summary.month.isIncrease, null];

  //블로그 통계 차트 부분 api
  const data = useGetBlogSummary(String(team));
  if (!data) {
    return <LoadingLottie height={4} width={4} fit={false} />;
  }
  const c = [1, 2, 3];
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(1);
  const cardTitle = ['오늘', `${month}월`, '누적'];
  const viewsArray = [data.data.day.views, data.data.month.views, data.data.total.views];
  const rate = [data.data.day.rate, data.data.month.rate, null];
  const isIncrease = [data.data.day.isIncrease, data.data.month.isIncrease, null];

  return (
    <VisitantContainer>
      <Container>
        {c.map((i, index) => (
          <VisitantCard
            key={index}
            statisticValue={statisticValue}
            title={cardTitle[index]}
            view={viewsArray[index]}
            rate={rate[index]}
            isIncrease={isIncrease[index]}
            articleViewArray={articleViewArray[index]}
            articleRate={articleRate[index]}
            articleIsIncrease={articleIsIncrease[index]}
          />
        ))}
      </Container>
      <VisitantChart articleChartData={articleChartData} statisticValue={statisticValue} />
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
