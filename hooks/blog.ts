import { useQuery } from '@tanstack/react-query';

import { getBlogHeaderInfo, getBlogInfo } from '@/api/blog';
import { getContent } from '@/api/content';
import { getPageDetail } from '@/api/page';

const QUERY_KEY_BLOG = {
  blogInfo: 'blogInfo',
};

export const useGetBlogInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.blogInfo], () => getBlogInfo(blogUrl));
  return data;
};

export const useGetBlogHeaderInfo = (blogUrl: string) => {
  const { data } = useQuery(['getBlogHeaderInfo'], () => getBlogHeaderInfo(blogUrl));
  return data;
};

export const useGetContent = (blogUrl: string, articleId: number) => {
  const { data } = useQuery(['getContent'], () => getContent(blogUrl, articleId));
  return data;
};

export const useGetPageDetail = (blogUrl: string, articleId: string) => {
  const { data } = useQuery(['getContent'], () => getPageDetail(blogUrl, articleId));
  return data;
};
