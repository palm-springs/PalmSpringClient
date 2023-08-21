import { Response } from '@/types/common';
import { PageData, UpdatePageContentProps } from '@/types/page';

import client from '.';

export const getPageDetail = async (blogUrl: string, pageUrl: string) => {
  const { data } = await client.get<Response<PageData>>(`/api/v1/page/${blogUrl}/detail?pageUrl=${pageUrl}`);
  return data;
};

interface postPageRequest {
  title: string;
  content: string;
  images: string[] | null;
}

export const postPageDraft = async (url: string, requestBody: postPageRequest) => {
  const { data } = await client.post<Response<null>>(`/api/v1/page/${url}/draft/create`, requestBody);
  return data;
};

interface postPageCreateRequest {
  title: string;
  content: string;
  images: string[] | null;
  thumbnail: string | null;
  pageUrl: string;
}

export const postPageCreate = async (url: string, requestBody: postPageCreateRequest) => {
  const { data } = await client.post<Response<null>>(`/api/v1/page/${url}/admin/create`, requestBody);
  return data;
};

export const getCheckPageUrlDuplication = async (teamUrl: string, pageUrl: string) => {
  const { data } = await client.get(`/api/v1/page/${teamUrl}/check?pageUrl=${pageUrl}`);
  return data;
};

export const getSinglePageData = async (blogUrl: string, pageUrl: string) => {
  const { data } = await client.get<Response<PageData>>(`/api/v1/page/${blogUrl}/detail/list?pageUrl=${pageUrl}`);
  return data;
};

export const getUpdatePageContent = async (pageId: number) => {
  const { data } = await client.get(`/api/v1/page/admin/detail/modify?id=${pageId}`);
  return data;
};

export const updatePageDetail = async (updatePageData: UpdatePageContentProps) => {
  const { data } = await client.put<Response<null>>(`/api/v1/page/admin/modify`, {
    ...updatePageData,
  });
  return data;
};
