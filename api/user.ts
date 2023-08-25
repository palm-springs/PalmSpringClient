import { Response } from '@/types/common';
import { UserInfoProps } from '@/types/user';

import client from '.';

export const getCurrentUserInfo = async () => {
  const { data } = await client.get<Response<UserInfoProps>>(`/api/v1/user/dashboard/me/detail`);
  return data;
};

export const updateWithdrawTeam = async (blogUrl: string) => {
  const { data } = await client.put<Response<UserInfoProps>>(`/api/v2/dashboard/user/me/out/${blogUrl}`);
  return data;
};

export const updateWithdrawPlatform = async () => {
  const { data } = await client.put<Response<string>>(`/api/v2/dashboard/user/me/out/register`);
  return data;
};

export const getCheckUserIdDuplication = async (blogUrl: string, memberUrl: string) => {
  const { data } = await client.get(`/api/v2/dashboard/user/check/exist/in/${blogUrl}?memberUrl=${memberUrl}`);
  return data;
};
