'use client';

import { ArrowCalendarIcon, ArrowDownSmallIcon, CalendarIcon, DecreaseArrow, IncreaseArrow } from '@/public/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import Chart from '../common/Chart';
import Calendar from '../common/Calendar';
import ModalPortal from '@/components/common/ModalPortal';
import { useRecoilState } from 'recoil';
import { endDateState, startDateState } from '@/recoil/atom/dashboard';
import { useGetBlogPeriod, useGetBlogSummary } from '@/hooks/dashboard';
import { useParams } from 'next/navigation';

const VisitantChart = () => {
  const { team } = useParams();
  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);

  //블로그 통계 api
  const res = useGetBlogSummary(String(team));
  const isIncrease = res?.data.day.isIncrease;

  // useGetBlogPeriod 훅 사용
  const data = useGetBlogPeriod(String(team), String(startDate), String(endDate));
  console.log(data?.data.rows);
  const [isOpen, setIsOpen] = useState(false);

  console.log(data?.data);
  // data와 data.data가 존재하는지 확인
  if (!data || !data.data || !Array.isArray(data.data.rows)) return <div>데이터가 없습니다.</div>;

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
              <CalendarIcon onClick={openModal} />
              <ArrowCalendarIcon onClick={closeModal} />
              {isOpen && (
                <CalendarContainer>
                  <Calendar />
                </CalendarContainer>
              )}
            </CalendarWrapper>
          </CalendarButton>
          <PercentContainer>
            <Count>{res?.data.day.views}</Count>
            <Wrapper>
              {isIncrease ? <IncreaseArrow /> : <DecreaseArrow />}
              {isIncrease ? <Percent>{res.data.day.rate}</Percent> : <DePercent>{res?.data.day.rate}</DePercent>}
            </Wrapper>
          </PercentContainer>
          <Chart />
        </CardBorder>
      </CardContainer>
    </>
  );
};

export default VisitantChart;

const CalendarButton = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`;

const CalendarContainer = styled.div`
  position: absolute;
  top: 4rem;
  right: 31.5rem;
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
