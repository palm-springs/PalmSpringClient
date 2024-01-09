import { atom } from 'recoil';

export const dashBoardModalState = atom<modalStateProps>({
  key: 'dashboardmodalstate',
  default: '',
});

export const dashBoardHeaderButtonVisibleState = atom<boolean>({
  key: 'dashBoardHeaderButtonVisibleState',
  default: true,
});
