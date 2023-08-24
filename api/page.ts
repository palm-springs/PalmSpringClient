import { Response } from '@/types/common';
import { PageData, UpdatePageContentProps, UpdateTempPageDraftProps } from '@/types/page';

import client from '.';

export const getPageDetail = async (blogUrl: string, pageUrl: string) => {
  const { data } = await client.get<Response<PageData>>(
    `/api/v2/dashboard/page/admin/detail/${blogUrl}?pageUrl=${pageUrl}`,
  );
  return data;
};

interface postPageRequest {
  title: string;
  content: string;
  images: string[] | null;
}

export const postPageDraft = async (url: string, requestBody: postPageRequest) => {
  const { data } = await client.post<Response<null>>(`/api/v2/dashboard/page/admin/draft/create/${url}`, requestBody);
  return data;
};

export const getSinglePageData = async (blogUrl: string, pageUrl: string) => {
  const { data } = await client.get<Response<PageData>>(
    `/api/v2/dashboard/page/admin/detail/${blogUrl}?pageUrl=${pageUrl}`,
  );
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
  const { data } = await client.post<Response<null>>(`/api/v2/dashboard/page/admin/publish/create/${url}`, requestBody);
  return data;
};

export const getCheckPageUrlDuplication = async (teamUrl: string, pageUrl: string) => {
  const { data } = await client.get(`/api/v2/dashboard/page/admin/check/${teamUrl}?pageUrl=${pageUrl}`);
  return data;
};

// 페이지 업로드된 글 get (path 수정)
export const getUpdatePageContent = async (blogUrl: string, pageId: number) => {
  const { data } = await client.get(`/api/v2/dashboard/page/admin/detail/modify/${blogUrl}?pageId=${pageId}`);
  return data;
};

//페이지 업로드된 글 수정하기(path 수정)
export const updatePageDetail = async (blogUrl: string, updatePageData: UpdatePageContentProps) => {
  const { data } = await client.put<Response<null>>(`/api/v2/dashboard/page/admin/publish/modify/${blogUrl}`, {
    ...updatePageData,
  });
  return data;
};

// 페이지 임시저장 수정하기 -> requestBody 보내야함

export const updatePageDraft = async (blogUrl: string, requestBody: UpdateTempPageDraftProps) => {
  const { data } = await client.put<Response<null>>(
    `/api/v2/dashboard/page/admin/draft/modify/${blogUrl}`,
    requestBody,
  );
  return data;
};

// 페이지 글 삭제하기
export const deletePage = async (blogUrl: string, pageId: string) => {
  const { data } = await client.delete(`/api/v2/dashboard/page/admin/remove/${blogUrl}?pageId=${pageId}`);
  return data;
};
