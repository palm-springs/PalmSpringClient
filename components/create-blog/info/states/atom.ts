import { atom } from 'recoil';

import { createBlogData } from '@/types/blogInfo';

export const createBlogDataState = atom<createBlogData>({
  key: 'CreateBlogDataState',
  default: { name: '', url: '', thumbnail: null, logo: null, description: '' },
});

export const progressState = atom<number>({
  key: 'progressState',
  default: 1,
});

export const invalidTextState = atom<boolean>({
  key: 'invalidTextState',
  default: false,
});
