import { isAxiosError } from 'axios';

import { Response } from '@/types/common';
import { DeleteRequestBody, InviteRequestBody, UserInfoProps, UserInviteInfo } from '@/types/user';

import client from '.';

export const getCurrentUserInfo = async () => {
  const { data } = await client.get<Response<UserInfoProps>>(`/api/v1/user/dashboard/me/detail`);
  return data;
};

export const updateWithdrawTeam = async (blogUrl: string) => {
  const { data } = await client.put<Response<UserInfoProps>>(`/api/v2/dashboard/user/team/out/self/${blogUrl}`);
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

export const deleteMember = async (blogUrl: string, memberId: string, email: string) => {
  const { data } = await client.put(`/api/v2/dashboard/user/team/out/${blogUrl}`, {
    memberId,
    email,
  });
  return data;
};

// 팀원 초대하기
export const postMemberInvite = async (blogUrl: string, requestBody: InviteRequestBody) => {
  const { data } = await client.post<Response<null>>(`/api/v2/dashboard/user/invite/${blogUrl}`, requestBody);
  return data;
};

// 초대 조회하기
export const getMemberInvite = async (code: string | null) => {
  if (!code) return;
  try {
    const { data } = await client.get<Response<UserInviteInfo>>(`/api/v2/dashboard/user/invite?code=${code}`);
    return data;
  } catch (e) {
    if (isAxiosError(e)) return { message: null, code: e.response?.status, data: null };
    else return { message: null, code: 404, data: null };
  }
};

// 초대 삭제하기
export const deleteInvite = async (blogUrl: string, requestBody: DeleteRequestBody) => {
  const { data } = await client.delete<Response<null>>(`/api/v2/dashboard/user/invite/${blogUrl}`, {
    data: { ...requestBody },
  });
  return data;
};
