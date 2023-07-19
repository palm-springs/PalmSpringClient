import { atom } from 'recoil';

import { CreateArticleProps } from '@/types/article';

export const articleDataState = atom<CreateArticleProps>({
  key: 'articleDataState',
  default: { title: '', content: '', images: [''], thumbnail: '', description: '', categoryId: 0, articleUrl: '' },
});
