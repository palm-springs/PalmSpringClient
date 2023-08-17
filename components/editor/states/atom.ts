import { atom } from 'recoil';

import { CreateArticleProps, UpdateArticleProps } from '@/types/article';
import { CreatePageProps } from '@/types/page';

export const articleDataState = atom<CreateArticleProps>({
  key: 'articleDataState',
  default: { title: '', content: '', images: [''], thumbnail: null, description: '', categoryId: -1, articleUrl: '' },
});

export const pageDataState = atom<CreatePageProps>({
  key: 'pageDataState',
  default: { title: '', content: '', images: [''], thumbnail: null, pageUrl: '' },
});

// export const articleEditDataState = atom<UpdateArticleProps>({
//   key: 'articleEditDataState',
//   default: { title: '', content: '', images: [''], thumbnail: null, description: '', categoryId: -1, articleUrl: '' },
// });
