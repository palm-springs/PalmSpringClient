import { atom } from 'recoil';

import { UserInfoProps } from '@/types/user';

const userState = atom<UserInfoProps | null>({
  key: 'userState',
  default: null,
});

export default userState;
