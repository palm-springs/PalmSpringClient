import { Response } from '@/types/common';
import { CategoryListProps, NavListProps, PageListProps, TempSavedListProps } from '@/types/dashboard';
import { MemberProps } from '@/types/member';
import { UserInfoProps } from '@/types/user';

import client from '.';

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

export const getUserInfo = async () => {
  const { data } = await client.get<Response<UserInfoProps>>(`/api/v1/user/dashboard/sidebar`);
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
  const { data } = await client.post<Response<null>>(`/api/v1/category/${blogUrl}/admin/create`, {
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

export const deleteNavigation = async (blogUrl: string, id: number) => {
  const { data } = await client.delete(`/api/v1/nav/${blogUrl}/admin/remove?id=${String(id)}`);
  return data;
};

export const updateNavigation = async (blogUrl: string, id: number, name: string, isPage: boolean, navUrl: string) => {
  const { data } = await client.put<Response<null>>(`/api/v1/nav/${blogUrl}/admin/modify`, {
    id,
    name,
    isPage,
    navUrl,
  });
  return data;
};

export const deleteCategory = async (blogUrl: string, id: number) => {
  const { data } = await client.delete<Response<null>>(
    `https://api.palms.blog/api/v1/category/${blogUrl}/admin/remove?id=${id}`,
  );
  console.log('이게지', data);
  if (data.code === 406) {
    alert('카테고리 안에 글이 없어야해요~');
  }
  return data;
};

export const updateCategory = async (blogUrl: string, id: number, name: string, description: string) => {
  const { data } = await client.put<Response<null>>(`/api/v1/category/${blogUrl}/admin/modify`, {
    id,
    name,
    description,
  });
  return data;
};

export const deletePage = async (blogUrl: string, id: number) => {
  const { data } = await client.delete<Response<null>>(`/api/v1/page/${blogUrl}/admin/remove?id=${id}`);
  return data;
};

export const deleteArticle = async (blogUrl: string, id: number) => {
  const { data } = await client.delete<Response<null>>(`/api/v1/article/${blogUrl}/remove?id=${id}`);
  return data;
};
