import { selector } from 'recoil';

import userState from '../atom/user';

const userRoleSelector = selector({
  key: 'userRoleSelector',
  get: ({ get }) => get(userState)?.currentUserRole ?? null,
});

export default userRoleSelector;
