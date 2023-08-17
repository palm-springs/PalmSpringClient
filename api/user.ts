import { Response } from '@/types/common';
import { UserInfoProps } from '@/types/user';

import client from '.';

export const getCurrentUserInfo = async () => {
  const { data } = await client.get<Response<UserInfoProps>>(`/api/v1/user/dashboard/me/detail`);
  return data;
};
