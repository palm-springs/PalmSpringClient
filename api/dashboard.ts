import { Response } from '@/types/common';
import { CategoryListProps, NavListProps, PageListProps } from '@/types/dashboard';

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
