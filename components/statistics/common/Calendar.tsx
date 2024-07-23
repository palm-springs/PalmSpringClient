'use client';
import { ArrowLeftIcon, ArrowRightContained02Icon, LeftArrowCalendarIcon, RightArrowIcon } from '@/public/icons';
import { endDateState, startDateState } from '@/recoil/atom/dashboard';
import { useParams } from 'next/navigation';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

interface DayProps {
  isSelected?: boolean;
  isOtherMonth?: boolean;
  isEndSelected?: boolean;
  isInRange?: boolean;
}

interface CalendarProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Calendar: React.FC<CalendarProps> = ({ setIsOpen }) => {
  const { team } = useParams();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  //선택 날짜 미리 렌더링

  useEffect(() => {
    if (startDate) {
      setSelectedStartDate(new Date(startDate));
    }
    if (endDate) {
      setSelectedEndDate(new Date(endDate));
    }
  }, [startDate, endDate]);

  const handleDayClick = (day: number) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const newDate = new Date(year, month, day);

    if (selectedStartDate && selectedEndDate) {
      setSelectedStartDate(newDate);
      setSelectedEndDate(null);
    } else if (selectedStartDate && !selectedEndDate) {
      if (newDate > selectedStartDate) {
        setSelectedEndDate(newDate);
      } else {
        setSelectedStartDate(newDate);
      }
    } else {
      setSelectedStartDate(newDate);
    }
  };

  const isWithinSelectedRange = (date: Date) => {
    if (selectedStartDate && selectedEndDate) {
      return date >= selectedStartDate && date <= selectedEndDate;
    }
    return false;
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = daysInMonth(month, year);
    const firstDay = firstDayOfMonth(month, year);
    const prevMonthDays = daysInMonth(month - 1, year);

    const dates = [];
    const totalCells = 35;

    // 이전 날짜 미리 렌더링
    for (let i = firstDay - 1; i >= 0; i--) {
      dates.push(
        <Day key={`prev-${prevMonthDays - i}`} isOtherMonth>
          {prevMonthDays - i}
        </Day>,
      );
    }

    // 현재 달 날짜 렌더링
    for (let day = 1; day <= days; day++) {
      const date = new Date(year, month, day);
      const isSelected =
        selectedStartDate?.getDate() === day &&
        selectedStartDate?.getMonth() === month &&
        selectedStartDate?.getFullYear() === year;
      const isEndSelected =
        selectedEndDate?.getDate() === day &&
        selectedEndDate?.getMonth() === month &&
        selectedEndDate?.getFullYear() === year;
      const isInRange = isWithinSelectedRange(date);

      dates.push(
        <Day
          key={day}
          isSelected={isSelected}
          isEndSelected={isEndSelected}
          isInRange={isInRange}
          onClick={() => handleDayClick(day)}>
          {day}
        </Day>,
      );
    }

    // 다음 달 날짜 미리 렌더링
    const remainingCells = totalCells - dates.length;
    for (let i = 1; i <= remainingCells; i++) {
      dates.push(
        <Day key={`next-${i}`} isOtherMonth>
          {i}
        </Day>,
      );
    }

    return dates;
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  const startDateStr = selectedStartDate ? selectedStartDate.toISOString().split('T')[0] : '';
  const endDateStr = selectedEndDate ? selectedEndDate.toISOString().split('T')[0] : '';

  //onClick시 recoil 날짜 저장 저장
  const handleApplyClick = () => {
    if (startDateStr && endDateStr) {
      setStartDate(startDateStr);
      setEndDate(endDateStr);
      setIsOpen(false);
    }
    setIsOpen(false);
  };

  return (
    <>
      <CalendarContainer>
        <CalendarHeader>
          <LeftArrowCalendarIcon onClick={goToPreviousMonth} />
          <CalendarTitle>
            {currentDate.getFullYear()}년 {monthNames[currentDate.getMonth()]}
          </CalendarTitle>
          <RightArrowIcon onClick={goToNextMonth} />
        </CalendarHeader>
        <CalendarBody>
          <DayNames>
            {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
              <DayName key={index}>{day}</DayName>
            ))}
          </DayNames>
          <Days>{renderCalendar()}</Days>
        </CalendarBody>
        <Line />
        <PostButton onClick={handleApplyClick}>적용</PostButton>
      </CalendarContainer>
    </>
  );
};

export default Calendar;

const Line = styled.div`
  margin: 4rem 0 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
`;

const PostButton = styled.button`
  display: inline-flex;
  gap: 1rem;
  align-items: flex-start;
  margin: 0 0 1.6rem 24.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.grey_900};
  cursor: 'pointer';
  padding: 0.8rem 1.2rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;

const CalendarContainer = styled.div`
  position: absolute;
  top: 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 16px;
  width: 327px;
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const CalendarButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const CalendarTitle = styled.h1`
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;

const CalendarBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const DayNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 3.6px;
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.grey_700};
`;

const DayName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  ${({ theme }) => theme.fonts.Body2_Regular};
`;

const Day = styled.div<DayProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isSelected, isEndSelected, isInRange, theme }) => {
    if (isSelected || isEndSelected) return theme.colors.grey_900;
    if (isInRange) return theme.colors.grey_300;
    return 'transparent';
  }};
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: ${({ isSelected, isEndSelected, theme, isOtherMonth }) =>
    isOtherMonth ? theme.colors.grey_500 : isSelected || isEndSelected ? theme.colors.grey_0 : 'inherit'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_900};
    color: ${({ theme }) => theme.colors.grey_0};
  }
`;
