import { atom } from 'recoil';

export const dashBoardModalState = atom<modalStateProps>({
  key: 'dashboardmodalstate',
  default: '',
});
