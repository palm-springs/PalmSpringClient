import { atom } from 'recoil';

import { createBlogData } from '@/types/blogInfo';

export const createBlogDataState = atom<createBlogData>({
  key: 'CreateBlogDataState',
  default: { name: '', url: '' },
});
