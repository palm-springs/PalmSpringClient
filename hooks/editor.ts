import { useQuery } from '@tanstack/react-query';

import { getArticleList, getSingleArticleData, getUpdateArticleContent } from '@/api/article';
import { getSinglePageData } from '@/api/page';

export const QUERY_KEY_ARTICLE = {
  getArticleList: 'getArticleList',
  getSingleArticleData: 'getSingleArticleData',
  getSinglePageData: 'getSinglePageData',
  getContent: 'getContent',
  getUpdateArticleContent: 'getUpdateArticleContent',
  getBlogSingleArticleData: 'getBlogSingleArticleData',
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

export const useGetSinglePageData = (blogUrl: string, pageUrl: string) => {
  const { data } = useQuery([QUERY_KEY_ARTICLE.getSinglePageData, blogUrl, pageUrl], () =>
    getSinglePageData(blogUrl, pageUrl),
  );
  return data;
};

export const useGetUpdateArticleContent = (articleId: number) => {
  const { data } = useQuery([QUERY_KEY_ARTICLE.getUpdateArticleContent, articleId], () =>
    getUpdateArticleContent(articleId),
  );
  return data;
};
