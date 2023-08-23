import { atom, selector } from 'recoil';

import { CreateArticleProps } from '@/types/article';
import { CreatePageProps } from '@/types/page';

export const articleDataState = atom<CreateArticleProps>({
  key: 'articleDataState',
  default: { title: '', content: '', images: [''], thumbnail: null, description: '', categoryId: -1, articleUrl: '' },
});

export const pageDataState = atom<CreatePageProps>({
  key: 'pageDataState',
  default: { title: '', content: '', images: [''], thumbnail: null, pageUrl: '' },
});

export const pageTitleState = selector({
  key: 'pageTitleState',
  get: ({ get }) => {
    const pageData = get(pageDataState);
    return pageData.title;
  },
  set: ({ get, set }, newValue) => {
    const pageData = get(pageDataState);
    set(pageDataState, { ...pageData, title: newValue as string });
  },
});
