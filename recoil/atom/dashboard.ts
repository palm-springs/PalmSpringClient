import { atom } from 'recoil';

export const startDateState = atom<string | null>({
  key: 'startDateState',
  default: null,
});

export const endDateState = atom<string | null>({
  key: 'endDateState',
  default: null,
});
