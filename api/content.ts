import { Response } from '@/types/common';
import { ContentProps } from '@/types/content';

import client from '.';

export const getContent = async (blogUrl: string, articleId: number) => {
  const { data } = await client.get<Response<ContentProps>>(`/api/v1/article/${blogUrl}/detail?articleId=${articleId}`);
  return data;
};
