import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import client from '@/api';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;
const { persistAtom } = recoilPersist({
  key: 'userToken',
  storage: sessionStorage,
});

export const accessTokenState = atom<string | null>({
  key: 'accessTokenState',
  default: null,
  effects_UNSTABLE: [
    persistAtom,
    ({ onSet }) => {
      onSet((newAccessToken) => {
        console.log('here');
        client.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      });
    },
  ],
});
