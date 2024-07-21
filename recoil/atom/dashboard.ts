import { atom } from 'recoil';

import { currentDateSelector, date30DaysAgoSelector } from '../selector/dashboard';

export const startDateState = atom<string>({
  key: 'startDateState',
  default: date30DaysAgoSelector,
});

export const endDateState = atom<string>({
  key: 'endDateState',
  default: currentDateSelector,
});
