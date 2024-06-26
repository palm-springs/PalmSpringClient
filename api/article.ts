import { isAxiosError } from 'axios';

import {
  ArticleData,
  CreateArticleProps,
  SingleArticleData,
  UpdateArticleContentProps,
  UpdateTempArticleDraftProps,
} from '@/types/article';
import { Response } from '@/types/common';

import client from '.';

//아티클 리스트 가져오기 - 반영 완
export const getArticleList = async (blogUrl: string, categoryId: string | null) => {
  const { data } = await client.get<Response<ArticleData[]>>(
    `/api/v2/dashboard/article/list/publish/${blogUrl}?categoryId=${categoryId}`,
  );
  return data;
};

export const getSingleArticleData = async (blogUrl: string, articleId: number) => {
  try {
    const { data } = await client.get<Response<SingleArticleData>>(
      `/api/v2/dashboard/article/detail/${blogUrl}?articleId=${articleId}`,
    );
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.response?.data;
    }
  }
};

interface postArticleListRequest {
  title: string;
  content: string;
  images: string[] | null;
}

export const postArticleList = async (url: string, requestBody: postArticleListRequest) => {
  const { data } = await client.post<Response<null>>(`/api/v2/dashboard/article/draft/create/${url}`, requestBody);
  return data;
};

export const postArticleCreateList = async (url: string, requestBody: CreateArticleProps) => {
  const { data } = await client.post<Response<null>>(`/api/v2/dashboard/article/publish/create/${url}`, requestBody);
  return data;
};

export const getCheckArticleUrlDuplication = async (teamUrl: string, articleUrl: string) => {
  const { data } = await client.get(`/api/v2/dashboard/article/check/${teamUrl}?articleUrl=${articleUrl}`);
  return data;
};

export const getCheckContentUrlDuplication = async (teamUrl: string, contentUrl: string) => {
  const { data } = await client.get(`/api/v2/dashboard/contents/check/${teamUrl}?contentsUrl=${contentUrl}`);
  return data;
};

//아티클 업로드한 글 get
export const getUpdateArticleContent = async (blogUrl: string, articleId: number) => {
  const { data } = await client.get(`/api/v2/dashboard/article/detail/modify/${blogUrl}?articleId=${articleId}`);
  return data;
};

//아티클 업로드 된 글 수정하기
export const updateArticleDetail = async (articleUrl: string, updateArticleData: UpdateArticleContentProps) => {
  const { data } = await client.put<Response<null>>(`/api/v2/dashboard/article/publish//modify/${articleUrl}`, {
    ...updateArticleData,
  });
  return data;
};

//아티클 임시저장 수정하기 (requestBody 넣어서 보내기)
export const updateArticleDraft = async (blogUrl: string, requestBody: UpdateTempArticleDraftProps) => {
  const { data } = await client.put(`/api/v2/dashboard/article/draft/modify/${blogUrl}`, requestBody);
  return data;
};

// 아티클 삭제하기
export const deleteArticle = async (blogUrl: string, articleId: string) => {
  const { data } = await client.delete(`/api/v2/dashboard/article/remove/${blogUrl}?articleId=${articleId}`);
  return data;
};
