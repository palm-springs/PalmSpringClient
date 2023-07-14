import { useQuery } from '@tanstack/react-query';

import { getCategoryList, getNavList, getPageList } from '@/api/dashboard';

const QUERY_KEY_DASHBOARD = {
  getNavList: 'getNavList',
  getCategoryList: 'getCategoryList',
  getPageList: 'getPageList',
};

export const useGetNavList = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getNavList], () => getNavList(blogUrl));
  return data;
};

export const useGetCategoryList = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getCategoryList], () => getCategoryList(blogUrl));
  return data;
};

export const useGetPageList = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getPageList], () => getPageList(blogUrl));
  return data;
};
