import { atom } from 'recoil';

import { CreateArticleProps } from '@/types/article';
import { CreatePageProps } from '@/types/page';

export const articleDataState = atom<CreateArticleProps>({
  key: 'articleDataState',
  default: { title: '', content: '', images: [''], thumbnail: null, description: '', categoryId: null, articleUrl: '' },
});

export const pageDataState = atom<CreatePageProps>({
  key: 'pageDataState',
  default: { title: '', content: '', images: [''], thumbnail: null, pageUrl: '' },
});
