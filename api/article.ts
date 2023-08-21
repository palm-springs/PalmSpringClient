import { ArticleData, CreateArticleProps, SingleArticleData, UpdateArticleContentProps } from '@/types/article';
import { Response } from '@/types/common';

import client from '.';

export const getArticleList = async (blogUrl: string, categoryId: string | null) => {
  const { data } = await client.get<Response<ArticleData[]>>(
    `/api/v1/article/${blogUrl}/list?categoryId=${categoryId}`,
  );
  return data;
};

export const getSingleArticleData = async (blogUrl: string, articleId: number) => {
  const { data } = await client.get<Response<SingleArticleData>>(
    `/api/v2/dashboard/article/detail/${blogUrl}?articleId=${articleId}`,
  );
  return data;
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

interface postArticleCreateListRequest {
  title: string;
  content: string;
  images: string[] | null;
  thumbnail: string;
  categoryId: number;
  description: string;
  articleUrl: string;
}

export const postArticleCreateList = async (url: string, requestBody: CreateArticleProps) => {
  const { data } = await client.post<Response<null>>(`/api/v2/dashboard/article/publish/create/${url}`, requestBody);
  return data;
};

export const getCheckArticleUrlDuplication = async (teamUrl: string, articleUrl: string) => {
  const { data } = await client.get(`/api/v1/article/${teamUrl}/check?articleUrl=${articleUrl}`);
  return data;
};

export const getUpdateArticleContent = async (articleId: number) => {
  const { data } = await client.get(`/api/v1/article/detail/modify?id=${articleId}`);
  return data;
};

export const updateArticleDetail = async (articleUrl: string, updateArticleData: UpdateArticleContentProps) => {
  const { data } = await client.put<Response<null>>(`/api/v1/article/${articleUrl}/modify`, {
    ...updateArticleData,
  });
  return data;
};

export const updateArticleDraft = async (articleUrl: string) => {
  const { data } = await client.put(`/api/v1/article/${articleUrl}/modify/draft`);
  return data;
};
