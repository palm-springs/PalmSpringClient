import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { CreateArticleProps } from '@/types/article';
import { CreatePageProps } from '@/types/page';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom: articlePersistAtom } = recoilPersist({
  key: 'articleData', // 고유한 key 값
  storage: sessionStorage,
});

const { persistAtom: pagePersistAtom } = recoilPersist({
  key: 'pageData', // 고유한 key 값
  storage: sessionStorage,
});

export const articleDataState = atom<CreateArticleProps>({
  key: 'articleDataState',
  default: { title: '', content: '', images: [''], thumbnail: null, description: '', categoryId: null, articleUrl: '' },
  effects_UNSTABLE: [articlePersistAtom],
});

export const pageDataState = atom<CreatePageProps>({
  key: 'pageDataState',
  default: { title: '', content: '', images: [''], thumbnail: null, pageUrl: '' },
  effects_UNSTABLE: [pagePersistAtom],
});

export const isSaved = atom({
  key: 'isSaved',
  default: true,
});
