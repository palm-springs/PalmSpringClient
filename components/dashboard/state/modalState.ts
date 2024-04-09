import { atom } from 'recoil';

//블로그 삭제 모달 state
export const dashboardBlogDeleteState = atom<boolean>({
  key: 'dashboardBlogDeleteState',
  default: false,
});

export const dashBoardModalState = atom<modalStateProps>({
  key: 'dashboardmodalstate',
  default: '',
});

export const dashBoardHeaderButtonVisibleState = atom<boolean>({
  key: 'dashBoardHeaderButtonVisibleState',
  default: true,
});
