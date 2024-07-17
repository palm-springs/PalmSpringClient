'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import statistics from '@/app/[team]/dashboard/statistics/page';
import ModalPortal from '@/components/common/ModalPortal';
import { useGetArticlePeriod, useGetBlogPeriod, useGetBlogSummary } from '@/hooks/dashboard';
import { ArrowCalendarIcon, ArrowDownSmallIcon, CalendarIcon, DecreaseArrow, IncreaseArrow } from '@/public/icons';
import { endDateState, startDateState } from '@/recoil/atom/dashboard';
import { ArticlePeriodProps } from '@/types/dashboard';

import Calendar from '../common/Calendar';
import Chart from '../common/Chart';
import LoadingLottie from '@/components/common/ui/LoadingLottie';

interface ChartProps {
  articleChartData?: ArticlePeriodProps;
  statisticValue: string;
}

const VisitantChart = (props: ChartProps) => {
  const { team } = useParams();
  const { articleChartData, statisticValue } = props;

  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);

  // useGetBlogPeriod 훅 사용
  const blogData = useGetBlogPeriod(String(team), String(startDate), String(endDate));

  //블로그 통계 api
  const res = useGetBlogSummary(String(team));
  const isIncrease =
    statisticValue === 'visitant' ? res?.data.day.isIncrease : articleChartData?.summary.day.isIncrease;

  const [isOpen, setIsOpen] = useState(false);

  const views = statisticValue === 'visitant' ? res?.data.day.views : articleChartData?.summary.day.views;
  const rate = statisticValue === 'visitant' ? res?.data.day.rate : articleChartData?.summary.day.rate;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <CardContainer>
        <CardBorder>
          <CalendarButton>
            <SubTitle>방문 수</SubTitle>
            <CalendarWrapper>
              <div onClick={openModal}>
                <CalendarIcon />
                <ArrowCalendarIcon />
              </div>
              {isOpen && (
                <ModalOverlay onClick={closeModal}>
                  <CalendarContainer onClick={(e) => e.stopPropagation()}>
                    <Calendar setIsOpen={setIsOpen} />
                  </CalendarContainer>
                </ModalOverlay>
              )}
            </CalendarWrapper>
          </CalendarButton>
          <PercentContainer>
            <Count>{views}</Count>
            <Wrapper>
              {rate === 0 ? (
                <IsZero>&nbsp;-</IsZero>
              ) : (
                <>
                  &nbsp;
                  {isIncrease ? <IncreaseArrow /> : <DecreaseArrow />}
                  {isIncrease ? <Percent>{rate}</Percent> : <DePercent>{rate}</DePercent>}
                </>
              )}
            </Wrapper>
          </PercentContainer>
          <Chart statisticValue={statisticValue} blogData={blogData?.data} articleChartData={articleChartData} />
          {/* <Chart statisticValue={statisticValue} articleChartData={articleChartData} /> */}
        </CardBorder>
      </CardContainer>
      {statisticValue === 'views' && <ArticleListMargin />}
    </>
  );
};

export default VisitantChart;

const ModalOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const IsZero = styled.p`
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;

const ArticleListMargin = styled.div`
  margin-bottom: 16rem;
`;

const CalendarButton = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`;

const CalendarContainer = styled.div`
  position: absolute;
  top: 35rem;
  right: 45.5rem;
`;

const CalendarWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-right: 4rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.4rem;
  padding: 0.5rem 0.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.4rem;
`;

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

const DePercent = styled.p`
  /* margin: 0 0 0.8rem; */
  color: ${({ theme }) => theme.colors.warning};
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
  ${({ theme }) => theme.fonts.Body1_Semibold};
`;

const CardBorder = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.grey_0};
  padding: 2rem 0rem 2rem 4rem;
  list-style-type: none;
`;

const CardContainer = styled.div`
  margin-top: 2rem;
`;
