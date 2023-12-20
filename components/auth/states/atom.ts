import axios from 'axios';
import { atom } from 'recoil';

import client from '@/api';

export const accessTokenState = atom<string | null>({
  key: 'accessTokenState',
  default: null,
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newAccessToken) => {
        console.log('effects_UNSTABLE : atom에서 헤더 갈아끼우기');
        axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        client.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
      });
    },
  ],
});
