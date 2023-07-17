import { url } from 'inspector';

import { ArticleProps } from '@/types/article';
import { Response } from '@/types/common';
import { getImageMultipartData } from '@/utils/getImageMultipartData';

import { client } from '.';

export const getArticleList = async (blogUrl: string, categoryId: string | null) => {
  const { data } = await client.get<Response<ArticleProps>>(`/api/v1/article/${blogUrl}?categoryId=${categoryId}`);
  return data;
};

export const postArticleList = async (articleUrl: string, title: string, content: string, image: string) => {
  const { data } = await client.post<Response<null>>(`/api/v1/article/${articleUrl}/draft`, {
    title,
    content,
    image,
  });
  return data;
};
