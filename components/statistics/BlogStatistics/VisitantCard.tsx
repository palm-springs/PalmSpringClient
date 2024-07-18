'use client';

import { DecreaseArrow, IncreaseArrow } from '@/public/icons';
import { BlogSummaryProps } from '@/types/dashboard';
import React from 'react';
import styled from 'styled-components';

interface CardProps {
  statisticValue: string;
  percentTitle: string | null;
  title: string;
  view: number | null;
  rate: number | null;
  isIncrease: boolean | null;
  articleViewArray?: number | null;
  articleRate?: number | null;
  articleIsIncrease?: boolean | null;
}

const VisitantCard = (props: CardProps) => {
  const {
    statisticValue,
    percentTitle,
    title,
    view,
    rate,
    isIncrease,
    articleViewArray,
    articleRate,
    articleIsIncrease,
  } = props;

  const displayView = statisticValue === 'visitant' ? view : articleViewArray;
  const displayRate = statisticValue === 'visitant' ? rate : articleRate;
  const displayIsIncrease = statisticValue === 'visitant' ? isIncrease : articleIsIncrease;

  return (
    <>
      <CardContainer>
        <CardBorder>
          <SubTitle>
            {title}
            {statisticValue === 'visitant' ? ' 방문 수' : ' 조회 수'}
          </SubTitle>
          <Count>{displayView}</Count>
          {displayRate !== null ? (
            displayRate === 0 ? (
              <PercentContainer>
                <PercentTitle>{percentTitle}</PercentTitle>
                <IsZero>&nbsp;-</IsZero>
              </PercentContainer>
            ) : (
              <PercentContainer>
                <PercentTitle>{percentTitle}</PercentTitle>
                {displayIsIncrease ? (
                  <>
                    &nbsp;
                    <IncreaseArrow />
                  </>
                ) : (
                  <>
                    &nbsp;
                    <DecreaseArrow />
                  </>
                )}
                {displayIsIncrease ? (
                  <Percent>{displayRate}%</Percent>
                ) : (
                  <DecreasePercent>{displayRate}%</DecreasePercent>
                )}
              </PercentContainer>
            )
          ) : (
            <PercentNullContainer />
          )}
        </CardBorder>
      </CardContainer>
    </>
  );
};

export default VisitantCard;

const PercentNullContainer = styled.div`
  margin-bottom: 3.4rem;
`;

const PercentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
`;

const DecreasePercent = styled.p`
  color: ${({ theme }) => theme.colors.warning};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;

const IsZero = styled.p`
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;

const Percent = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;

const PercentTitle = styled.p`
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Caption};
`;

const Count = styled.p`
  color: ${({ theme }) => theme.colors.grey_1000};
  ${({ theme }) => theme.fonts.Heading1};
`;
const SubTitle = styled.h3`
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
