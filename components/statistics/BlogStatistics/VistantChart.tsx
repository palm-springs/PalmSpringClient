'use client';

import { ArrowCalendarIcon, ArrowDownSmallIcon, CalendarIcon, IncreaseArrow } from '@/public/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import Chart from '../common/Chart';
import Calendar from '../common/Calendar';
import ModalPortal from '@/components/common/ModalPortal';

const VisitantChart = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <SubTitle>방문자 수</SubTitle>
            <CalendarWrapper>
              <CalendarIcon onClick={openModal} />
              <ArrowCalendarIcon onClick={closeModal} />
              <ModalPortal>
                {isOpen && (
                  <CalendarContainer>
                    <Calendar />
                  </CalendarContainer>
                )}
              </ModalPortal>
            </CalendarWrapper>
          </CalendarButton>
          <PercentContainer>
            <Count>5,475</Count>
            <Wrapper>
              <IncreaseArrow />
              <Percent>12%</Percent>
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
  top: 54%;
  right: 27%;
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
