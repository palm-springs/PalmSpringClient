import { atom } from 'recoil';

import { createBlogData, createBlogImgFile } from '@/types/blogInfo';

export const createBlogDataState = atom<createBlogData>({
  key: 'CreateBlogDataState',
  default: { name: '', url: '', thumbnail: null, logo: null, description: '' },
});

export const progressState = atom<number>({
  key: 'progressState',
  default: 1,
});

export const createBlogImgFileState = atom<createBlogImgFile>({
  key: 'createBlogImgFileState',
  default: { logo: null, thumbnail: null },
});
