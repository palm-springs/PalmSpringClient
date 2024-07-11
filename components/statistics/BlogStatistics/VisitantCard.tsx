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
          {/* 타이틀 글씨: 데이터 받아오는 것에 따라 인덱스별 다르게 띄우기 */}
          <SubTitle>
            {title}
            {statisticValue === 'visitant' ? ' 방문 수' : ' 조회 수'}
          </SubTitle>
          <Count>{view}</Count>
          {/* 전일대비: 데이터 받아오는 것에 따라 null이면 안보여주기  */}
          {rate !== null ? (
            <PercentContainer>
              <PercentTitle>전 일대비</PercentTitle>
              {isIncrease ? (
                <>
                  <IncreaseArrow />
                  <Percent>{rate}</Percent>
                </>
              ) : (
                <>
                  <DecreaseArrow />
                  <DecreasePercent>{rate}</DecreasePercent>
                </>
              )}
            </PercentContainer>
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
