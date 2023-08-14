import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getBlogHeaderInfo } from '@/api/blog';
import {
  deleteNavigation,
  getCategoryList,
  getMemberList,
  getNavList,
  getPageList,
  getTempSavedList,
  getUserBasicInfo,
  getUserInfo,
  postCategory,
  postNavigation,
  updateNavigation,
} from '@/api/dashboard';

const QUERY_KEY_DASHBOARD = {
  getNavList: 'getNavList',
  getCategoryList: 'getCategoryList',
  getBlogHeader: 'getBlogHeader',
  getPageList: 'getPageList',
  getTempSavedList: 'getTempSavedList',
  postCategory: 'postCategory',
  postNavigation: 'postNavigation',
  deleteNavigation: 'deleteNavigation',
  updateNavigation: 'updateNavigation',
  getUserInfo: 'getUserInfo',
  getMemberInfo: 'getMemberInfo',
  getUserBasicInfo: 'getUserBasicInfo',
};

export const useGetNavList = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getNavList], () => getNavList(blogUrl));
  return data;
};

export const useGetCategoryList = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getCategoryList], () => getCategoryList(blogUrl));
  return data;
};

export const useGerBlogHeader = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getBlogHeader], () => getBlogHeaderInfo(blogUrl));
  return data;
};

export const useGetPageList = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getPageList], () => getPageList(blogUrl));
  return data;
};

export const useGetTempSavedList = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getTempSavedList], () => getTempSavedList(blogUrl));

  if (!data || !data.data) return;

  return data.data;
};

export const useGetUserInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getUserInfo], () => getUserInfo(blogUrl));
  return data;
};

export const useGetUserBasicInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getUserBasicInfo], () => getUserBasicInfo(blogUrl));
  return data;
};

export const useGetMemberInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getMemberInfo], () => getMemberList(blogUrl));
  return data;
};

export const usePostCategory = (blogUrl: string, name: string, description: string) => {
  const queryClient = useQueryClient();

  return useMutation([QUERY_KEY_DASHBOARD.postCategory], () => postCategory(blogUrl, name, description), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getCategoryList]);
    },
  });
};

export const usePostNavigation = (blogUrl: string, name: string, isPage: boolean, navUrl: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    [QUERY_KEY_DASHBOARD.postNavigation],
    () => postNavigation(blogUrl, name, isPage, navUrl),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getNavList]);
      },
    },
  );
  return mutation;
};

export const useDeleteNavigation = (blogUrl: string, id: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation([QUERY_KEY_DASHBOARD.deleteNavigation], () => deleteNavigation(blogUrl, id), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getNavList]);
    },
  });
  return mutation;
};

export const useUpdateNavigation = (blogUrl: string, id: number, name: string, isPage: boolean, navUrl: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    [QUERY_KEY_DASHBOARD.updateNavigation],
    () => updateNavigation(blogUrl, id, name, isPage, navUrl),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getNavList]);
      },
    },
  );
  return mutation;
};
