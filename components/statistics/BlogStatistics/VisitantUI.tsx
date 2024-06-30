'use client';

import React from 'react';
import styled from 'styled-components';
import VisitantCard from './VisitantCard';
import VisitantChart from './VistantChart';

const VisitantUI = () => {
  const c = [1, 2, 3];
  return (
    <VisitantContainer>
      <Container>
        {c.map((i, index) => (
          <VisitantCard key={index} />
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
