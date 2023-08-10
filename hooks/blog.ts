import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { deleteBlog, getBlogHeaderInfo, getBlogInfo } from '@/api/blog';
import { getContent } from '@/api/content';
import { getPageDetail } from '@/api/page';

import { useGetUserInfo } from './dashboard';
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
  const res = useGetUserInfo();

  const router = useRouter();

  return useMutation([QUERY_KEY_BLOG.deleteBlog], () => deleteBlog(blogUrl), {
    onSuccess: () => {
      if (!res) return;

      if (res && res.data.joinBlogList.length > 0) {
        router.push(`/${res.data.joinBlogList[0].url}/dashboard/upload`);
      } else {
        router.push(`/no-team/dashboard`);
      }
    },
  });
};
