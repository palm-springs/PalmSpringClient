// import { url } from 'inspector';

import { useQuery } from '@tanstack/react-query';

import { ArticleData, CreateArticleProps, SingleArticleData } from '@/types/article';
import { Response } from '@/types/common';
import { PageData } from '@/types/page';

// import { getImageMultipartData } from '@/utils/getImageMultipartData';
import client from '.';

export const getArticleList = async (blogUrl: string, categoryId: string | null) => {
  const { data } = await client.get<Response<ArticleData[]>>(
    `/api/v1/article/${blogUrl}/list?categoryId=${categoryId}`,
  );
  return data;
};

export const getSingleArticleData = async (blogUrl: string, articleId: number) => {
  const { data } = await client.get<Response<SingleArticleData>>(
    `/api/v1/article/${blogUrl}/detail?articleUrl=${articleId}`,
  );
  return data;
};

interface postArticleListRequest {
  title: string;
  content: string;
  images: string[] | null;
}

export const postArticleList = async (url: string, requestBody: postArticleListRequest) => {
  const { data } = await client.post<Response<null>>(`/api/v1/article/${url}/draft`, requestBody);
  return data;
};

//위치 변경
export const getSinglePageData = async (blogUrl: string, pageUrl: string) => {
  const { data } = await client.get<Response<PageData>>(`/api/v1/page/${blogUrl}/detail?pageUrl=${pageUrl}}`);
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
  const { data } = await client.post<Response<null>>(`/api/v1/article/${url}/create`, requestBody).then((res) => {
    if (res.status < 300) {
      useQuery(['getArticleList', url, '']);
    }
    return res;
  });
  return data;
};

export const getCheckArticleUrlDuplication = async (teamUrl: string, articleUrl: string) => {
  const { data } = await client.get(`/api/v1/article/${teamUrl}/check?articleUrl=${articleUrl}`);
  return data;
};
