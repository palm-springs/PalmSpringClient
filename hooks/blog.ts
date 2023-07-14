import { useQuery } from '@tanstack/react-query';

import { getBlogInfo } from '@/api/blog';

const QUERY_KEY_BLOG = {
  blogInfo: 'blogInfo',
};

export const useGetBlogInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.blogInfo], () => getBlogInfo(blogUrl));
  return data;
};
