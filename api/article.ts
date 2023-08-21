// import { url } from 'inspector';

import { ArticleData, CreateArticleProps, SingleArticleData } from '@/types/article';
import { Response } from '@/types/common';

// import { getImageMultipartData } from '@/utils/getImageMultipartData';
import client from '.';

//아티클 리스트 가져오기 - 반영 완
export const getArticleList = async (blogUrl: string, categoryId: string | null) => {
  const { data } = await client.get<Response<ArticleData[]>>(
    `/api/v2/dashboard/article/list/publish/${blogUrl}?categoryId=${categoryId}`,
  );
  return data;
};

//단일 아티클 가져오기 - 반영 완
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
