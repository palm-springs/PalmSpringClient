import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  deleteArticle,
  getArticleList,
  getSingleArticleData,
  getUpdateArticleContent,
  updateArticleDetail,
  updateArticleDraft,
} from '@/apis/article';
import { getSinglePageData, getUpdatePageContent, updatePageDetail, updatePageDraft } from '@/apis/page';
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
  const { data } = useQuery({
    queryKey: [QUERY_KEY_ARTICLE.getArticleList, blogUrl, categoryId],
    queryFn: () => getArticleList(blogUrl, categoryId),
  });
  return data;
};

export const useGetSingleArticleData = (blogUrl: string, articleId: number) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY_ARTICLE.getSingleArticleData, blogUrl, articleId],
    queryFn: () => getSingleArticleData(blogUrl, articleId),
    gcTime: 0,
  });
  return data;
};

export const useGetSinglePageData = (blogUrl: string, pageUrl: string) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY_ARTICLE.getSinglePageData, blogUrl, pageUrl],
    queryFn: () => getSinglePageData(blogUrl, pageUrl),
    gcTime: 0,
  });
  return data;
};

// 아티클 수정하기 get
export const useGetUpdateArticleContent = (blogUrl: string, articleId: number) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY_ARTICLE.getUpdateArticleContent, blogUrl, articleId],
    queryFn: () => getUpdateArticleContent(blogUrl, articleId),
    gcTime: 0,
  });
  return data;
};

// 페이지 수정하기 get
export const useGetUpdatePageContent = (blogUrl: string, pageId: number) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY_ARTICLE.getUpdateArticleContent, blogUrl, pageId],
    queryFn: () => getUpdatePageContent(blogUrl, pageId),
    gcTime: 0,
  });
  return data;
};

// 아티클수정하기
export const useUpdateArticleContent = (articleUrl: string) => {
  const queryClient = useQueryClient();

  const articleMutation = useMutation({
    mutationKey: [QUERY_KEY_ARTICLE.updateArticleDetail],
    mutationFn: (updateArticleData: UpdateArticleContentProps) => updateArticleDetail(articleUrl, updateArticleData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_ARTICLE.getArticleList] });
    },
  });
  return articleMutation;
};

//페이지 수정하기
export const useUpdatePageContent = (blogUrl: string) => {
  const queryClient = useQueryClient();

  const pageMutation = useMutation({
    mutationKey: [QUERY_KEY_ARTICLE.updatePageDetail],
    mutationFn: (updatePageData: UpdatePageContentProps) => updatePageDetail(blogUrl, updatePageData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_ARTICLE.getPageList] });
    },
  });
  return pageMutation;
};

//아티클 임시저장 수정하기 (발행, 임시저장 모두 포함)

export const useUpdateTempArticleDraft = (blogUrl: string) => {
  const queryClient = useQueryClient();

  const draftArticleMutation = useMutation({
    mutationKey: [QUERY_KEY_ARTICLE.updateArticleDetail],
    mutationFn: (updateTempArticleData: UpdateTempArticleDraftProps) =>
      updateArticleDraft(blogUrl, updateTempArticleData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_ARTICLE.getTempSavedList] });
    },
  });
  return draftArticleMutation;
};

//페이지 임시저장 수정하기 (발행, 임시저장 모두 포함)
export const useUpdateTempPageDraft = (blogUrl: string) => {
  const queryClient = useQueryClient();

  const draftPageMutation = useMutation({
    mutationKey: [QUERY_KEY_ARTICLE.updatePageDetail],
    mutationFn: (updateTempPageData: UpdateTempPageDraftProps) => updatePageDraft(blogUrl, updateTempPageData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_ARTICLE.getPageList] });
    },
  });
  return draftPageMutation;
};

// 아티클 글 삭제 query
export const useDeleteArticleContent = (blogUrl: string, articleId: string) => {
  const queryClient = useQueryClient();

  const articleMutation = useMutation({
    mutationKey: [QUERY_KEY_ARTICLE.deleteArticle],
    mutationFn: () => deleteArticle(blogUrl, articleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_ARTICLE.getArticleList] });
    },
  });
  return articleMutation;
};

//페이지 글 삭제하기 query

export const useDeletePageContent = (blogUrl: string, pageId: string) => {
  const queryClient = useQueryClient();

  const pageMutation = useMutation({
    mutationKey: [QUERY_KEY_ARTICLE.deletePage],
    mutationFn: () => deleteArticle(blogUrl, pageId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_ARTICLE.getPageList] });
    },
  });
  return pageMutation;
};
