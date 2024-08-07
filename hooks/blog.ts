import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { deleteBlog, getBlogFooterInfo, getBlogInfo, getBlogTemplateInfo } from '@/api/blog';
import { Response } from '@/types/common';
import { UserInfoProps } from '@/types/user';

import { QUERY_KEY_DASHBOARD } from './dashboard';

const QUERY_KEY_BLOG = {
  getBlogInfo: 'getBlogInfo',
  deleteBlog: 'deleteBlog',
  getBlogFooterInfo: 'getBlogFooterInfo',
  getBlogTemplateInfo: 'getBlogTemplateInfo',
};

export const useGetBlogInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogInfo, blogUrl], () => getBlogInfo(blogUrl));
  return data;
};

export const useGetBlogFooterInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogFooterInfo, blogUrl], () => getBlogFooterInfo(blogUrl));
  return data;
};

export const useGetBlogTemplateInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogTemplateInfo, blogUrl], () => getBlogTemplateInfo(blogUrl));
  return data;
};

export const useDeleteBlog = (blogUrl: string) => {
  const queryClient = useQueryClient();

  const router = useRouter();

  return useMutation([QUERY_KEY_BLOG.deleteBlog, blogUrl], () => deleteBlog(blogUrl), {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getUserInfo]);

      const res = queryClient.getQueryData<Response<UserInfoProps>>([QUERY_KEY_DASHBOARD.getUserInfo]);

      if (!res) return;

      if (res.data && res.data.joinBlogList.length > 0) {
        router.push(`/${res.data.joinBlogList[0].blogUrl}/dashboard/statistics`);
      } else {
        router.push(`/no-team/dashboard/statistics`);
      }
    },
  });
};
