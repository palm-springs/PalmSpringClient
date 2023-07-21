import { Response } from '@/types/common';
import { CategoryListProps, NavListProps, PageListProps, TempSavedListProps } from '@/types/dashboard';
import { MemberProps } from '@/types/member';

import client from '.';

interface UserInfoProps {
  name: string;
  email: string;
  thumbnail: string;
  joinBlogList: Array<{
    name: string;
    url: string;
  }>;
}

interface UserBasicInfoProps {
  registerId: string;
  teamMemberId: string;
  thumbnail: string;
  nickname: string;
  description: string;
  job: string;
}

export const getPageList = async (blogUrl: string) => {
  const { data } = await client.get<Response<PageListProps[]>>(`/api/v1/page/${blogUrl}`);
  return data;
};

export const getNavList = async (blogUrl: string) => {
  const { data } = await client.get<Response<NavListProps[]>>(`/api/v1/nav/${blogUrl}/list`);
  return data;
};

export const getCategoryList = async (blogUrl: string) => {
  const { data } = await client.get<Response<CategoryListProps[]>>(`/api/v1/category/${blogUrl}/list`);
  return data;
};

export const getTempSavedList = async (blogUrl: string) => {
  const { data } = await client.get<Response<TempSavedListProps[]>>(`/api/v1/article/${blogUrl}/draftList`);
  return data;
};

export const getUserInfo = async (blogUrl: string) => {
  const { data } = await client.get<Response<UserInfoProps>>(`/api/v1/user/dashboard/sidebar/${blogUrl}`);
  return data;
};

export const getUserInfoAfterLogin = async (blogUrl: string, accessToken: string) => {
  const { data } = await client.get<Response<UserInfoProps>>(`/api/v1/user/dashboard/sidebar/${blogUrl}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const getMemberList = async (blogUrl: string) => {
  const { data } = await client.get<Response<MemberProps[]>>(`/api/v1/user/dashboard/team/${blogUrl}`);
  return data;
};

export const getUserBasicInfo = async (blogUrl: string) => {
  const { data } = await client.get<Response<UserBasicInfoProps>>(`/api/v1/user/dashboard/me/${blogUrl}/detail`);
  return data;
};

export const postCategory = async (blogUrl: string, name: string, description: string) => {
  const { data } = await client.post<Response<null>>(`/api/v1/category/${blogUrl}/create`, {
    name,
    description,
  });
  return data;
};

export const postNavigation = async (blogUrl: string, name: string, isPage: boolean, navUrl: string) => {
  const { data } = await client.post<Response<null>>(`/api/v1/nav/${blogUrl}/admin/create`, {
    name,
    isPage,
    navUrl,
  });
  return data;
};
