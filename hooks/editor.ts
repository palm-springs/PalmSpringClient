import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  deleteArticle,
  getArticleList,
  getSingleArticleData,
  getUpdateArticleContent,
  updateArticleDetail,
  updateArticleDraft,
} from '@/api/article';
import { getSinglePageData, getUpdatePageContent, updatePageDetail, updatePageDraft } from '@/api/page';
import { UpdateArticleContentProps, UpdateTempArticleDraftProps } from '@/types/article';
import { UpdatePageContentProps, UpdateTempPageDraftProps } from '@/types/page';

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
  getTempSavedList: 'getTempSavedList',
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

// 아티클 수정하기 get
export const useGetUpdateArticleContent = (articleId: number) => {
  const { data } = useQuery([QUERY_KEY_ARTICLE.getUpdateArticleContent, articleId], () =>
    getUpdateArticleContent(articleId),
  );
  return data;
};

// 페이지 수정하기 get
export const useGetUpdatePageContent = (pageId: number) => {
  const { data } = useQuery([QUERY_KEY_ARTICLE.getUpdateArticleContent, pageId], () => getUpdatePageContent(pageId));
  return data;
};

// 아티클수정하기
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

//페이지 수정하기
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

//아티클 임시저장 수정하기 (발행, 임시저장 모두 포함)

export const useUpdateTempArticleDraft = (blogUrl: string) => {
  const queryClient = useQueryClient();

  const draftArticleMutation = useMutation(
    [QUERY_KEY_ARTICLE.updateArticleDetail],
    (updateTempArticleData: UpdateTempArticleDraftProps) => updateArticleDraft(blogUrl, updateTempArticleData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_ARTICLE.getTempSavedList]);
      },
    },
  );
  return draftArticleMutation;
};

//페이지 임시저장 수정하기 (발행, 임시저장 모두 포함)
export const useUpdateTempPageDraft = () => {
  const queryClient = useQueryClient();

  const draftPageMutation = useMutation(
    [QUERY_KEY_ARTICLE.updatePageDetail],
    (updateTempPageData: UpdateTempPageDraftProps) => updatePageDraft(updateTempPageData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_ARTICLE.getPageList]);
      },
    },
  );
  return draftPageMutation;
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
