// components/Calendar.tsx
import { ArrowCalendarIcon, CalendarIcon } from '@/public/icons';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDayClick = (day: number) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, day);

    if (selectedDates.length === 1) {
      const [startDate] = selectedDates;
      if (date < startDate) {
        setSelectedDates([date, startDate]);
      } else {
        setSelectedDates([startDate, date]);
      }
    } else {
      setSelectedDates([date]);
    }
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = daysInMonth(month, year);
    const firstDay = firstDayOfMonth(month, year);

    const prevMonthDays = daysInMonth(month - 1, year);
    const dates = [];

    for (let i = 0; i < firstDay; i++) {
      dates.push(
        <Day key={`prev-${prevMonthDays - firstDay + i + 1}`} isOtherMonth>
          {prevMonthDays - firstDay + i + 1}
        </Day>,
      );
    }

    for (let day = 1; day <= days; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedDates.some(
        (selectedDate) =>
          selectedDate.getDate() === date.getDate() &&
          selectedDate.getMonth() === date.getMonth() &&
          selectedDate.getFullYear() === date.getFullYear(),
      );
      dates.push(
        <Day key={day} isSelected={isSelected} onClick={() => handleDayClick(day)}>
          {day}
        </Day>,
      );
    }

    const nextMonthDays = 42 - dates.length;
    for (let i = 1; i <= nextMonthDays; i++) {
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

  return (
    <>
      <CalendarContainer>
        <CalendarHeader>
          <CalendarButton onClick={goToPreviousMonth}> &lt; </CalendarButton>
          <CalendarTitle>
            {currentDate.getFullYear()}년 {monthNames[currentDate.getMonth()]}
          </CalendarTitle>
          <CalendarButton onClick={goToNextMonth}> &gt; </CalendarButton>
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
        <PostButton>적용</PostButton>
      </CalendarContainer>
    </>
  );
};

export default Calendar;

const Line = styled.div`
  margin-bottom: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
`;

const PostButton = styled.button`
  display: inline-flex;
  gap: 1rem;
  align-items: flex-start;
  margin-left: 24.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.grey_900};
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
  height: 429px;
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
`;

interface DayProps {
  isSelected?: boolean;
  isOtherMonth?: boolean;
}

const Day = styled.div<DayProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  border-radius: 50%;
  ${({ theme }) => theme.fonts.Body2_Regular};
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.grey_900 : 'transparent')};
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.grey_0 : 'inherit')};
  color: ${({ isOtherMonth, theme }) => (isOtherMonth ? theme.colors.grey_500 : 'inherit')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_200};
  }
`;

const Empty = styled.div`
  background: none;
  width: 40px;
  height: 40px;
`;
