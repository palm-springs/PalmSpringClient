import { Response } from '@/types/common';
import { CategoryListProps, NavListProps, PageListProps, TempSavedListProps } from '@/types/dashboard';

import { client } from '.';

export const getPageList = async (blogUrl: string) => {
  const { data } = await client.get<Response<PageListProps>>(`/api/v1/page/${blogUrl}`);
  return data;
};

export const getNavList = async (blogUrl: string) => {
  const { data } = await client.get<Response<NavListProps>>(`/api/v1/nav/${blogUrl}`);
  return data;
};

export const getCategoryList = async (blogUrl: string) => {
  const { data } = await client.get<Response<CategoryListProps>>(`/api/v1/category/${blogUrl}`);
  return data;
};

export const getTempSavedList = async (blogUrl: string) => {
  const { data } = await client.get<Response<TempSavedListProps>>(`/api/v1/article/${blogUrl}/draftList`);
  return data;
};
