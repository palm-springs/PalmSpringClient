import { Response } from '@/types/common';
import { PageData } from '@/types/page';

import client from '.';

export const getPageDetail = async (blogUrl: string, pageUrl: string) => {
  const { data } = await client.get<Response<PageData[]>>(`/api/v1/page/${blogUrl}/detail?pageUrl=${pageUrl}`);
  return data;
};

interface postPageRequest {
  title: string;
  content: string;
  images: string[] | null;
}

export const postPageDraft = async (url: string, requestBody: postPageRequest) => {
  const { data } = await client.post<Response<null>>(`/api/v1/page/Palms/${url}/create`, requestBody);
  return data;
};

interface postPageCreateRequest {
  title: string;
  content: string;
  images: string[] | null;
  thumbnail: string;
  pageUrl: string;
}

export const postPageCreate = async (url: string, requestBody: postPageCreateRequest) => {
  const { data } = await client.post<Response<null>>(`/api/v1/page/${url}/create`, requestBody);
  return data;
};