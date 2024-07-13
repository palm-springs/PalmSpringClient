'use client';

import { DecreaseArrow, IncreaseArrow } from '@/public/icons';
import { BlogSummaryProps } from '@/types/dashboard';
import React from 'react';
import styled from 'styled-components';

interface CardProps {
  statisticValue: string;
  title: string;
  view: number | null;
  rate: number | null;
  isIncrease: boolean | null;
}

const VisitantCard = (props: CardProps) => {
  const { statisticValue, title, view, rate, isIncrease } = props;

  return (
    <>
      <CardContainer>
        <CardBorder>
          <SubTitle>
            {title}
            {statisticValue === 'visitant' ? ' 방문 수' : ' 조회 수'}
          </SubTitle>
          <Count>{view}</Count>
          {rate !== null ? (
            rate === 0 ? (
              <PercentContainer>
                <PercentTitle>전 일대비</PercentTitle>
                <IsZero>&nbsp;-</IsZero>
              </PercentContainer>
            ) : (
              <PercentContainer>
                <PercentTitle>전 일대비</PercentTitle>
                {isIncrease ? (
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
                {isIncrease ? <Percent>{rate}</Percent> : <DecreasePercent>{rate}</DecreasePercent>}
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
  /* margin: 0 0 0.8rem; */
  color: ${({ theme }) => theme.colors.warning};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;

const IsZero = styled.p`
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body2_Semibold};
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
