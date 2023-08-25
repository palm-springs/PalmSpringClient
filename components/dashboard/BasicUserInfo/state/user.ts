import { atom } from 'recoil';

import { UserBasicInfo } from '@/types/user';

export const userInfoState = atom<UserBasicInfo>({
  key: 'userInfoState',
  default: {
    thumbnail: null,
    nickname: '',
    url: null,
    description: '',
    job: '',
  },
});
