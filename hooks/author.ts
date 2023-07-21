import { useQuery } from '@tanstack/react-query';

import { getAuthor } from '@/api/author';

const QUERY_KEY_BLOG = {
  authorInfo: 'authorInfo',
};

export const useGetAuthorInfo = (authorId: number) => {
  const { data } = useQuery([QUERY_KEY_BLOG.authorInfo], () => getAuthor(authorId));
  return data;
};
