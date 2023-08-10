import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { deleteBlog, getBlogHeaderInfo, getBlogInfo } from '@/api/blog';
import { getContent } from '@/api/content';
import { getPageDetail } from '@/api/page';
import { Response } from '@/types/common';
import { UserInfoProps } from '@/types/user';

import { QUERY_KEY_DASHBOARD, useGetUserInfo } from './dashboard';
import { useGetCurrentUserInfo } from './user';

const QUERY_KEY_BLOG = {
  getBlogInfo: 'getBlogInfo',
  getBlogHeaderInfo: 'getBlogHeaderInfo',
  getContent: 'getContent',
  getPageDetail: 'getPageDetail',
  deleteBlog: 'deleteBlog',
};

export const useGetBlogInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogInfo], () => getBlogInfo(blogUrl));
  return data;
};

export const useGetBlogHeaderInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogHeaderInfo], () => getBlogHeaderInfo(blogUrl));
  return data;
};

export const useGetContent = (blogUrl: string, articleId: number) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getContent], () => getContent(blogUrl, articleId));
  return data;
};

export const useGetPageDetail = (blogUrl: string, articleId: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getPageDetail], () => getPageDetail(blogUrl, articleId));
  return data;
};

export const useDeleteBlog = (blogUrl: string) => {
  const queryClient = useQueryClient();

  const router = useRouter();

  return useMutation([QUERY_KEY_BLOG.deleteBlog], () => deleteBlog(blogUrl), {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getUserInfo]);

      const res = queryClient.getQueryData<Response<UserInfoProps>>([QUERY_KEY_DASHBOARD.getUserInfo]);

      if (!res) return;

      console.log('구분해줘', res);

      if (res.data && res.data.joinBlogList.length > 0) {
        router.push(`/${res.data.joinBlogList[0].url}/dashboard/upload`);
      } else {
        router.push(`/no-team/dashboard`);
      }
    },
  });
};
