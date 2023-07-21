import { useQuery } from '@tanstack/react-query';

import { getAuthor } from '@/api/author';

const QUERY_KEY_BLOG = {
  authorInfo: 'authorInfo',
};

export const useGetAuthorInfo = (blogUrl: string, authorId: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.authorInfo], () => getAuthor(blogUrl, authorId));
  return data;
};
