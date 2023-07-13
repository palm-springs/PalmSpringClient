import { useQuery } from '@tanstack/react-query';

import { getBlogInfo } from '@/api/blog';

const QUERY_KEY = {
  blogInfo: 'blogInfo',
};

export const useGetBlogInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY.blogInfo], () => getBlogInfo(blogUrl));
  return data;
};
