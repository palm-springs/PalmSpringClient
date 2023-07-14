import { useQuery } from '@tanstack/react-query';

import { getArticleList } from '@/api/article';

const QUERY_KEY_ARTICLE = {
  getArticleList: 'getArticleList',
};

export const useGetArticleList = (blogUrl: string, categoryId: string | null) => {
  const { data } = useQuery([QUERY_KEY_ARTICLE.getArticleList], () => getArticleList(blogUrl, categoryId));
  return data;
};
