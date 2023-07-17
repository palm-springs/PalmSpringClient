import { atom } from 'recoil';

import { client } from '@/api';

export const accessTokenState = atom<string | null>({
  key: 'accessTokenState',
  default: null,
  effects: [
    ({ onSet }) => {
      onSet((newAccessToken) => {
        client.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      });
    },
  ],
});
