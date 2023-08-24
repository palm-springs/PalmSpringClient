import { atom } from 'recoil';

import { UserBasicInfo } from '@/types/user';

export const userInfoState = atom<UserBasicInfo>({
  key: 'userInfoState',
  default: {
    thumbnail: '',
    nickname: '',
    description: '',
    job: '',
  },
});
