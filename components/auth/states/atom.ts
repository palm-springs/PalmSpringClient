import { atom } from 'recoil';

import { Client } from '../RequestAccessToken';

export const accessTokenState = atom<string>({
  key: 'accessTokenState',
  default: '',
  effects: [
    ({ onSet }) => {
      onSet((newAccessToken) => {
        Client.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      });
    },
  ],
});
