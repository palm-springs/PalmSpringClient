import { atom } from 'recoil';

import { client } from '@/api';

export const accessTokenState = atom<string>({
  key: 'accessTokenState',
  default: '',
  effects: [
    ({ onSet }) => {
      onSet((newAccessToken) => {
        client.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      });
    },
  ],
});
