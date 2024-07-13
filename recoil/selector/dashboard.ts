import { selector } from 'recoil';

// 현재 날짜
const getCurrentDate = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// 현재 날짜 selector
export const currentDateSelector = selector<string>({
  key: 'currentDateSelector',
  get: ({ get }) => {
    return getCurrentDate();
  },
});

// 현재 날짜 기준으로 30일 전 날짜
const getDate30DaysAgo = (): string => {
  const date = new Date();
  date.setDate(date.getDate() - 30);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// 30일 전 날짜 selector
export const date30DaysAgoSelector = selector<string>({
  key: 'date30DaysAgoSelector',
  get: ({ get }) => {
    return getDate30DaysAgo();
  },
});
