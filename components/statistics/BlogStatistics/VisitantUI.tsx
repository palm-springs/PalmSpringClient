'use client';

import React from 'react';
import styled from 'styled-components';
import VisitantCard from './VisitantCard';
import VisitantChart from './VistantChart';
import { useGetBlogSummary } from '@/hooks/dashboard';
import { useParams } from 'next/navigation';

interface CardsProps {
  statisticValue: string;
}

const VisitantUI = (props: CardsProps) => {
  const { team } = useParams();
  const data = useGetBlogSummary(String(team));
  if (!data) {
    return <div>Loading...</div>;
  }

  const c = [1, 2, 3];
  const { statisticValue } = props;
  const cardTitle = ['오늘', '4월', '누적'];
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
          />
        ))}
      </Container>
      <VisitantChart />
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
