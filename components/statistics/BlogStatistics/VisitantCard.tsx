'use client';

import { IncreaseArrow } from '@/public/icons';
import React from 'react';
import styled from 'styled-components';

const VisitantCard = () => {
  return (
    <>
      <CardContainer>
        <CardBorder>
          <SubTitle>오늘 방문자 수</SubTitle>
          <Count>5,475</Count>
          <PercentContainer>
            <PercentTitle>전 일대비</PercentTitle>
            <IncreaseArrow />
            <Percent>12%</Percent>
          </PercentContainer>
        </CardBorder>
      </CardContainer>
    </>
  );
};

export default VisitantCard;

const PercentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
`;

const Percent = styled.p`
  /* margin: 0 0 0.8rem; */
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;

const PercentTitle = styled.p`
  /* margin: 0 0 0.8rem; */
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Caption};
`;

const Count = styled.p`
  /* margin: 0 0 0.8rem; */
  color: ${({ theme }) => theme.colors.grey_1000};
  ${({ theme }) => theme.fonts.Heading1};
`;
const SubTitle = styled.h3`
  /* margin: 0 0 0.8rem; */
  color: ${({ theme }) => theme.colors.grey_1000};
  ${({ theme }) => theme.fonts.Body2_Regular};
`;

const CardBorder = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.8rem;
  background: var(--grey-white, #fff);
  padding: 2rem 14rem 2rem 2rem;
  list-style-type: none;
`;

const CardContainer = styled.div``;
