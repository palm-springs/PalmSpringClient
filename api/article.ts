import { ArticleData } from '@/types/article';
import { Response } from '@/types/common';

import { client } from '.';

export const getArticleList = async (blogUrl: string, categoryId: string | null) => {
  const { data } = await client.get<Response<ArticleData>>(`/api/v1/article/${blogUrl}?categoryId=${categoryId}`);
  return data;
};

interface postArticleListRequest {
  title: string;
  content: string;
  image: string[];
}

export const postArticleList = async (url: string, requestBody: postArticleListRequest) => {
  const { data } = await client.post<Response<null>>(`/api/v1/article/${url}/draft`, requestBody);
  return data;
};

interface postArticleCreateListRequest {
  title: string;
  content: string;
  images: string[];
  thumbnail: string;
  categoryId: number; //long 이라고 써져있는데 number 맞져..?
  description: string;
  articleUrl: string;
}

export const postArticleCreateList = async (url: string, requestBody: postArticleCreateListRequest) => {
  const { data } = await client.post<Response<null>>(`/api/v1/article/${url}/create`, requestBody);
  return data;
};

export const getCheckDuplicateUrl = async (teamUrl: string, articleUrl: string) => {
  const {
    data: { data },
  } = await client.get(`/api/v1/article/${teamUrl}/check?articleUrl=${articleUrl}`);
  return data;
};
