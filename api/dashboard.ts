import { Response } from '@/types/common';
import { CategoryListProps, NavListProps, PageListProps, TempSavedListProps } from '@/types/dashboard';

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

export const getPageList = async (blogUrl: string) => {
  const { data } = await client.get<Response<PageListProps[]>>(`/api/v1/page/${blogUrl}`);
  return data;
};

export const getNavList = async (blogUrl: string) => {
  const { data } = await client.get<Response<NavListProps[]>>(`/api/v1/nav/${blogUrl}`);
  return data;
};

export const getCategoryList = async (blogUrl: string) => {
  const { data } = await client.get<Response<CategoryListProps[]>>(`/api/v1/category/${blogUrl}`);
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

export const getMemberList = async (blogUrl: string) => {
  const { data } = await client.get(`/api/v1/user/members/${blogUrl}`);
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
