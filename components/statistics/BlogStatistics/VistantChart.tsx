'use client';

import React, { useRef, useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  //blog API 불러오기
  // 차트 기간용 API
  const blogData = useGetBlogPeriod(String(team), String(startDate), String(endDate));
  // 통계 카드 정보 API
  const res = useGetBlogSummary(String(team));

  //방문자수 <카드용> (블로그, 아티클 구분)
  const views = statisticValue === 'visitant' ? res?.data.day.views : articleChartData?.summary.day.views;
  //증가율 숫자 <카드용> (블로그, 아티클 구분)
  const rate = statisticValue === 'visitant' ? res?.data.day.rate : articleChartData?.summary.day.rate;
  //증가했니? 불린 <카드용> (블로그, 아티클 구분)
  const isIncrease =
    statisticValue === 'visitant' ? res?.data.day.isIncrease : articleChartData?.summary.day.isIncrease;
  //0할래?-할래 불린 <카드용> (블로그, 아티클 구분)
  const isNoVisitYesterday =
    statisticValue === 'visitant' ? res?.data.day.isNoVisitYesterday : articleChartData?.summary.day.isNoVisitYesterday;

  //증가율 숫자 <카드용> 소수점 둘째자리에서 반올림 => 얘가 실제 렌더링 되는 rate 임
  const roundedRate =
    rate !== undefined && rate !== null
      ? Number.isInteger(parseFloat(rate.toFixed(1)))
        ? parseFloat(rate.toFixed(1)).toFixed(0)
        : parseFloat(rate.toFixed(1)).toFixed(1)
      : '0';

  // roundedRate가 '0'일때 res?.data.day.isNoVisitYesterday가 true이면  "-"을 return하고 false면 "0"를 return
  //0할래?-할래 불린 <카드용> (블로그, 아티클 구분) -> 렌더링을 위한 구분
  const displayRate = roundedRate === '0' ? (isNoVisitYesterday ? '-' : '0') : roundedRate;

  const calendarRef = useRef<HTMLDivElement>(null);

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
            <CalendarWrapper onClick={openModal} ref={calendarRef}>
              <CalendarIcon />
              <ArrowCalendarIcon />
            </CalendarWrapper>
            {isOpen && (
              <ModalOverlay onClick={closeModal}>
                <CalendarContainer
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    top: `${calendarRef.current.getBoundingClientRect().bottom - 140}px`,
                    left: `${calendarRef.current.getBoundingClientRect().left - 350}px`,
                  }}>
                  <Calendar setIsOpen={setIsOpen} />
                </CalendarContainer>
              </ModalOverlay>
            )}
          </CalendarButton>
          <PercentContainer>
            <Count>{views}</Count>
            <Wrapper>
              {displayRate === '-' || displayRate === '0' ? (
                <IsZero>&nbsp;{displayRate}</IsZero>
              ) : (
                <>
                  &nbsp;
                  {isIncrease ? (
                    <>
                      <IncreaseArrow />
                      <Percent>{displayRate}%</Percent>
                    </>
                  ) : (
                    <>
                      <DecreaseArrow />
                      <DePercent>{displayRate}%</DePercent>
                    </>
                  )}
                </>
              )}
            </Wrapper>
          </PercentContainer>
          <Chart statisticValue={statisticValue} blogData={blogData?.data} articleChartData={articleChartData} />
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
`;

const CalendarWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-right: 4rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.4rem;
  cursor: pointer;
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
