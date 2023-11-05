import { atom } from 'recoil';

import { UserBasicInfo } from '@/types/user';

export const invitedUserDataState = atom<UserBasicInfo>({
  key: 'invitedUserDataState',
  default: { nickname: '', thumbnail: null, url: '', description: '', job: '' },
});
