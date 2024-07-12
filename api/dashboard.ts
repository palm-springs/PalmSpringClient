import { getBlogCategoryList } from './blogHome';
import { AxiosResponse } from 'axios';

import { Response } from '@/types/common';
import {
  BlogPeriodProps,
  BlogSummaryProps,
  CategoryListProps,
  NavListProps,
  PageListProps,
  TempSavedListProps,
} from '@/types/dashboard';
import { MemberProps } from '@/types/member';
import { UserBasicInfo, UserInfoProps } from '@/types/user';
import { RoleType } from '@/utils/PermissionPolicyClass';

import client from '.';

interface UserBasicInfoProps {
  registerId: string;
  teamMemberId: string;
  thumbnail: string;
  nickname: string;
  url: string | null;
  description: string;
  job: string;
}

//대시보드 블로그 통계
export const getBlogPeriod = async (blogUrl: string, StartDate: string, EndDate: string) => {
  const { data } = await client.get<Response<BlogPeriodProps>>(
    `/api/v2/dashboard/data/${blogUrl}/period?startDate=${StartDate}&endDate=${EndDate}&type=DAY`,
  );
  return data;
};

export const getBlogSummary = async (blogUrl: string) => {
  const { data } = await client.get<Response<BlogSummaryProps>>(`/api/v2/dashboard/data/${blogUrl}/summary`);
  return data;
};

//대시보드
export const getPageList = async (blogUrl: string) => {
  const { data } = await client.get<Response<PageListProps[]>>(`/api/v2/dashboard/page/admin/list/${blogUrl}`);
  return data;
};

export const getNavList = async (blogUrl: string) => {
  const { data } = await client.get<Response<NavListProps[]>>(`/api/v2/dashboard/nav/admin/list/${blogUrl}`);
  return data;
};

export const getCategoryList = async (blogUrl: string) => {
  const { data } = await client.get<Response<CategoryListProps[]>>(`/api/v2/dashboard/category/admin//list/${blogUrl}`);
  return data;
};

export const getTempSavedList = async (blogUrl: string) => {
  const { data } = await client.get<Response<TempSavedListProps[]>>(`/api/v2/dashboard/article/list/draft/${blogUrl}`);
  return data;
};

export const getUserInfo = async () => {
  const { data } = await client.get<Response<UserInfoProps>>(`/api/v2/dashboard/user/sidebar`);
  return data;
};

export const getUserInfoAfterLogin = async (blogUrl: string, accessToken: string) => {
  const { data } = await client.get<Response<UserInfoProps>>(`/api/v2/dashboard/user/sidebar`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const getMemberList = async (blogUrl: string) => {
  const { data } = await client.get<Response<MemberProps[]>>(`/api/v2/dashboard/user/team/list/members/${blogUrl}`);
  return data;
};

// 왜 있지?
export const getUserBasicInfo = async (blogUrl: string) => {
  const { data } = await client.get<Response<UserBasicInfoProps>>(`/api/v2/dashboard/user/me/detail/joined/${blogUrl}`);
  return data;
};

export const postCategory = async (blogUrl: string, name: string, description: string) => {
  const { data } = await client.post<Response<null>>(`/api/v2/dashboard/category/admin/create/${blogUrl}`, {
    name,
    description,
  });
  return data;
};

export const postNavigation = async (blogUrl: string, name: string, isPage: boolean, navUrl: string) => {
  const { data } = await client.post<Response<null>>(`/api/v2/dashboard/nav/admin/create/${blogUrl}`, {
    name,
    isPage,
    navUrl,
  });
  return data;
};

export const deleteNavigation = async (blogUrl: string, id: number) => {
  const { data } = await client.delete(`/api/v2/dashboard/nav/admin/remove/${blogUrl}?navId=${String(id)}`);
  return data;
};

export const updateNavigation = async (blogUrl: string, id: number, name: string, isPage: boolean, navUrl: string) => {
  const { data } = await client.put<Response<null>>(`/api/v2/dashboard/nav/admin/modify/${blogUrl}`, {
    id,
    name,
    isPage,
    navUrl,
  });
  return data;
};

export const deleteCategory = async (blogUrl: string, id: number) => {
  const { data } = await client.delete<Response<null>>(
    `/api/v2/dashboard/category/admin/remove/${blogUrl}?categoryId=${id}`,
  );
  return data;
};

export const updateCategory = async (blogUrl: string, id: number, name: string, description: string) => {
  const { data } = await client.put<Response<null>>(`/api/v2/dashboard/category/admin/modify/${blogUrl}`, {
    id,
    name,
    description,
  });
  return data;
};

export const deletePage = async (blogUrl: string, id: number) => {
  const { data } = await client.delete<Response<null>>(`/api/v2/dashboard/page/admin/remove/${blogUrl}?pageId=${id}`);
  return data;
};

export const deleteArticle = async (blogUrl: string, id: number) => {
  const { data } = await client.delete<Response<null>>(`/api/v2/dashboard/article/remove/${blogUrl}?articleId=${id}`);
  return data;
};

export const updateUserInfo = async (blogUrl: string, userInfo: UserBasicInfo) => {
  const { data } = await client.put<Response<UserBasicInfoProps>>(
    `/api/v2/dashboard/user/me/detail/joined/${blogUrl}`,
    userInfo,
  );
  return data;
};

export const delegateUserRole = async (blogUrl: string, email: string, role: 'OWNER' | 'MANAGER' | 'EDITOR') => {
  const { data } = await client.put<
    unknown,
    AxiosResponse<unknown>,
    {
      email: string;
      role: RoleType;
    }
  >(`/api/v2/dashboard/user/team/delegate/${blogUrl}`, {
    email,
    role,
  });
  return data;
};
