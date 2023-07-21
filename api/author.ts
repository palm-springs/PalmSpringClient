import { AuthorInfoProps } from '@/types/author';
import { Response } from '@/types/common';

import client from '.';

export const getAuthor = async (blogUrl: string, nickname: string) => {
  const { data } = await client.get<Response<AuthorInfoProps>>(`/api/v1/user/blog/${blogUrl}/${nickname}`);
  return data;
};
