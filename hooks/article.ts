import { useQuery } from '@tanstack/react-query';

import { getArticleList, getSingleArticleData } from '@/api/article';

const QUERY_KEY_ARTICLE = {
  getArticleList: 'getArticleList',
  getSingleArticleData: 'getSingleArticleData',
};

export const useGetArticleList = (blogUrl: string, categoryId: string) => {
  const { data } = useQuery([QUERY_KEY_ARTICLE.getArticleList, blogUrl, categoryId], () =>
    getArticleList(blogUrl, categoryId),
  );
  return data;
};

export const useGetSingleArticleData = (blogUrl: string, articleId: number) => {
  const { data } = useQuery([QUERY_KEY_ARTICLE.getSingleArticleData, blogUrl, articleId], () =>
    getSingleArticleData(blogUrl, articleId),
  );
  return data;
};

export const useGetSinglePageleData = (blogUrl: string, pageUrl: number) => {
  const { data } = useQuery([QUERY_KEY_ARTICLE.getSingleArticleData, blogUrl, pageUrl], () =>
    getSingleArticleData(blogUrl, pageUrl),
  );
  return data;
};
