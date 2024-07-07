'use client';

import React from 'react';
import styled from 'styled-components';
import VisitantCard from './VisitantCard';
import VisitantChart from './VistantChart';

interface CardsProps {
  statisticValue: string;
}

const VisitantUI = (props: CardsProps) => {
  const c = [1, 2, 3];
  const { statisticValue } = props;
  const cardTitle = ['오늘', '4월', '누적'];
  return (
    <VisitantContainer>
      <Container>
        {c.map((i, index) => (
          <VisitantCard key={index} statisticValue={statisticValue} title={cardTitle[index]} />
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
