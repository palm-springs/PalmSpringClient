import { isAxiosError } from 'axios';

import { createBlogData } from '@/types/blogInfo';
import { Response } from '@/types/common';

import client from '.';

interface BlogConfigRequestBodyProps {
  name: string;
  description: string | null;
  thumbnail: string | null;
  logo: string | null;
  metaThumbnail: string | null;
  metaName: string | null;
  metaDescription: string | null;
}

interface BlogInfoProps {
  name: string;
  url: string;
  thumbnail: string;
  logo: string;
  description: string;
  metaThumbnail: string;
  metaName: string;
  metaDescription: string;
}

interface MetaBlogInfoProps extends BlogInfoProps {
  blogUrl: string;
}

//외부에서 블로그 정보 가져오기- 서브도메인
export const getMetaBlogInfo = async (blogUrl: string) => {
  try {
    const { data } = await client.get<Response<MetaBlogInfoProps>>(`/api/v2/view/blog/${blogUrl}/home`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.response?.data;
    }
  }
};

//블로그 정보 가져오기 - 반영 완
export const getBlogInfo = async (blogUrl: string) => {
  const { data } = await client.get<Response<BlogInfoProps>>(`/api/v2/dashboard/blog/admin/info/${blogUrl}`);
  return data;

  // {{BASE_URL}}/api/v2/dashboard/blog/admin/info/{blogUrl}
};

// 블로그 url 중복 검사 - 반영 완
export const getCheckBlogUrlDuplication = async (blogUrl: string) => {
  const { data } = await client.get(`/api/v2/dashboard/blog/check?url=${blogUrl}`);
  return data;
  // {{BASE_URL}}/api/v2/dashboard/blog/check?url=
};

// 블로그 생성 - 반영 완
export const postCreateBlog = async (requestBody: createBlogData) => {
  const { data } = await client.post(`/api/v2/dashboard/blog/create`, requestBody);
  return data;
  // {{BASE_URL}}/api/v2/dashboard/blog/create
};

//블로그 수정 - 반영 완
export const putBlogConfig = async (blogUrl: string, requestBody: BlogConfigRequestBodyProps) => {
  const { data } = await client.put(`/api/v2/dashboard/blog/admin/info/${blogUrl}`, requestBody);
  return data;
  // {{BASE_URL}}/api/v2/dashboard/blog/admin/info/{blogUrl}
};

//블로그 삭제 - 반영 완
export const deleteBlog = async (blogUrl: string) => {
  const { data } = await client.delete<Response<null>>(`/api/v2/dashboard/blog/admin/remove/${blogUrl}`);
  return data;
  // {{BASE_URL}}/api/v2/dashboard/blog/admin/remove/{blogUrl}
};
