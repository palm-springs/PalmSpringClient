import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';

import {
  delegateUserRole,
  deleteArticle,
  deleteCategory,
  deleteNavigation,
  deletePage,
  getCategoryList,
  getMemberList,
  getNavList,
  getPageList,
  getTempSavedList,
  getUserBasicInfo,
  getUserInfo,
  postCategory,
  postNavigation,
  updateCategory,
  updateNavigation,
  updateUserInfo,
} from '@/api/dashboard';
import { deleteMember } from '@/api/user';
import userState from '@/recoil/atom/user';
import { UserBasicInfo } from '@/types/user';

import { QUERY_KEY_ARTICLE } from './editor';

export const QUERY_KEY_DASHBOARD = {
  getNavList: 'getNavList',
  getCategoryList: 'getCategoryList',
  getBlogHeader: 'getBlogHeader',
  getPageList: 'getPageList',
  deletePage: 'deletePage',
  getTempSavedList: 'getTempSavedList',
  postCategory: 'postCategory',
  updateCategory: 'updateCategory',
  deleteCategory: 'deleteCategory',
  postNavigation: 'postNavigation',
  deleteNavigation: 'deleteNavigation',
  updateNavigation: 'updateNavigation',
  getUserInfo: 'getUserInfo',
  getMemberInfo: 'getMemberInfo',
  getUserBasicInfo: 'getUserBasicInfo',
  deleteArticle: 'deleteArticle',
  updateUserInfo: 'updateUserInfo',
  deleteMember: 'deleteMember',
  delegateUserRole: 'delegateUserRole',
};

export const useGetNavList = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getNavList, blogUrl], () => getNavList(blogUrl));
  return data;
};

export const useGetCategoryList = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getCategoryList, blogUrl], () => getCategoryList(blogUrl));
  return data;
};

export const useGetPageList = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getPageList, blogUrl], () => getPageList(blogUrl));
  return data;
};

export const useGetTempSavedList = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getTempSavedList, blogUrl], () => getTempSavedList(blogUrl));

  if (!data || !data.data) return;

  return data.data;
};

export const useGetUserInfo = () => {
  const { data, isSuccess } = useQuery([QUERY_KEY_DASHBOARD.getUserInfo], () => getUserInfo());

  const [userValue, setUserState] = useRecoilState(userState);

  const { team } = useParams();

  useEffect(() => {
    if (!userValue && isSuccess) {
      const currentUserBlog = data.data.joinBlogList.find(({ blogUrl }) => blogUrl === team);
      setUserState({
        ...data.data,
        currentUserRole: currentUserBlog ? currentUserBlog.role : null,
      });
    }
  }, [isSuccess, data]);

  return data;
};

export const useGetUserBasicInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getUserBasicInfo, blogUrl], () => getUserBasicInfo(blogUrl));
  return data;
};

export const useGetMemberInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_DASHBOARD.getMemberInfo, blogUrl], () => getMemberList(blogUrl));
  return data;
};

export const usePostCategory = (blogUrl: string, name: string, description: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    [QUERY_KEY_DASHBOARD.postCategory, blogUrl, name, description],
    () => postCategory(blogUrl, name, description),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getCategoryList]);
      },
    },
  );
};

export const usePostNavigation = (blogUrl: string, name: string, isPage: boolean, navUrl: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    [QUERY_KEY_DASHBOARD.postNavigation, blogUrl, name, isPage, navUrl],
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

  const mutation = useMutation(
    [QUERY_KEY_DASHBOARD.deleteNavigation, blogUrl, id],
    () => deleteNavigation(blogUrl, id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getNavList]);
      },
    },
  );
  return mutation;
};

export const useUpdateNavigation = (blogUrl: string, id: number, name: string, isPage: boolean, navUrl: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    [QUERY_KEY_DASHBOARD.updateNavigation, blogUrl, id, name, isPage, navUrl],
    () => updateNavigation(blogUrl, id, name, isPage, navUrl),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getNavList]);
      },
    },
  );
  return mutation;
};

export const useUpdateUserInfo = (blogUrl: string, userInfo: UserBasicInfo) => {
  const queryClient = useQueryClient();

  return useMutation([QUERY_KEY_DASHBOARD.updateUserInfo, blogUrl, userInfo], () => updateUserInfo(blogUrl, userInfo), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getNavList]);
    },
  });
};

export const useDeleteCategory = (blogUrl: string, id: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation([QUERY_KEY_DASHBOARD.deleteCategory, blogUrl, id], () => deleteCategory(blogUrl, id), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getCategoryList]);
    },
  });
  return mutation;
};

export const useUpdateCategory = (blogUrl: string, id: number, name: string, description: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    [QUERY_KEY_DASHBOARD.updateCategory, blogUrl, id, name, description],
    () => updateCategory(blogUrl, id, name, description),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getCategoryList]);
      },
    },
  );
  return mutation;
};

export const useDeletePage = (blogUrl: string, id: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation([QUERY_KEY_DASHBOARD.deletePage, blogUrl, id], () => deletePage(blogUrl, id), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getPageList]);
    },
  });
  return mutation;
};

export const useDeleteArticle = (blogUrl: string, id: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation([QUERY_KEY_DASHBOARD.deleteArticle, blogUrl, id], () => deleteArticle(blogUrl, id), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_ARTICLE.getTempSavedList]);
    },
  });
  return mutation;
};

export const useDeleteMember = (blogUrl: string, memberId: string, email: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    [QUERY_KEY_DASHBOARD.deleteMember, blogUrl, memberId, email],
    () => deleteMember(blogUrl, memberId, email),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getMemberInfo]);
      },
    },
  );
  return mutation;
};

export const useDelegateUserRole = (
  blogUrl: string,
  memberId: string,
  email: string,
  role: 'OWNER' | 'MANAGER' | 'EDITOR',
) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    [QUERY_KEY_DASHBOARD.delegateUserRole, blogUrl, memberId, email],
    () => delegateUserRole(blogUrl, memberId, email, role),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getMemberInfo]);
      },
    },
  );
  return mutation;
};
