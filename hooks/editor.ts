import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  deleteArticle,
  getArticleList,
  getSingleArticleData,
  getUpdateArticleContent,
  updateArticleDetail,
} from '@/api/article';
import { getContent } from '@/api/content';
import { getSinglePageData, getUpdatePageContent, updatePageDetail } from '@/api/page';
import { UpdateArticleContentProps } from '@/types/article';
import { UpdatePageContentProps } from '@/types/page';

export const QUERY_KEY_ARTICLE = {
  getArticleList: 'getArticleList',
  getSingleArticleData: 'getSingleArticleData',
  getSinglePageData: 'getSinglePageData',
  getContent: 'getContent',
  getUpdateArticleContent: 'getUpdateArticleContent',
  updateArticleDetail: 'updateArticleDetail',
  updatePageDetail: 'updatePageDetail',
  getPageList: 'getPageList',
  deleteArticle: 'deleteArticle',
  deletePage: 'deletePage',
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

export const useGetContent = (team: string, id: number) => {
  const { data } = useQuery([QUERY_KEY_ARTICLE.getContent], () => getContent(team, id));
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

export const useGetUpdatePageContent = (pageId: number) => {
  const { data } = useQuery([QUERY_KEY_ARTICLE.getUpdateArticleContent, pageId], () => getUpdatePageContent(pageId));
  return data;
};

export const useUpdateArticleContent = (articleUrl: string) => {
  const queryClient = useQueryClient();

  const articleMutation = useMutation(
    [QUERY_KEY_ARTICLE.updateArticleDetail],
    (updateArticleData: UpdateArticleContentProps) => updateArticleDetail(articleUrl, updateArticleData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_ARTICLE.getArticleList]);
      },
    },
  );
  return articleMutation;
};

export const useUpdatePageContent = () => {
  const queryClient = useQueryClient();

  const pageMutation = useMutation(
    [QUERY_KEY_ARTICLE.updatePageDetail],
    (updatePageData: UpdatePageContentProps) => updatePageDetail(updatePageData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_ARTICLE.getPageList]);
      },
    },
  );
  return pageMutation;
};

// 아티클 글 삭제 query
export const useDeleteArticleContent = (blogUrl: string, articleId: string) => {
  const queryClient = useQueryClient();

  const articleMutation = useMutation([QUERY_KEY_ARTICLE.deleteArticle], () => deleteArticle(blogUrl, articleId), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_ARTICLE.getArticleList]);
    },
  });
  return articleMutation;
};

//페이지 글 삭제하기 query

export const useDeletePageContent = (blogUrl: string, pageId: string) => {
  const queryClient = useQueryClient();

  const pageMutation = useMutation([QUERY_KEY_ARTICLE.deletePage], () => deleteArticle(blogUrl, pageId), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_ARTICLE.getPageList]);
    },
  });
  return pageMutation;
};
