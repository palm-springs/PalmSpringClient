import { createBlogData } from '@/types/blogInfo';
import { Response } from '@/types/common';

import client from '.';

interface BlogConfigRequestBodyProps {
  name: string;
  description: string;
  thumbnail: string;
  logo: string;
}

export const getBlogInfo = async (blogUrl: string) => {
  const { data } = await client.get(`/api/v1/blog?url=${blogUrl}`);
  return data;
};

// 블로그 url 중복 검사
export const getCheckBlogUrlDuplication = async (blogUrl: string) => {
  const { data } = await client.get(`/api/v1/blog/check?url=${blogUrl}`);
  return data;
};

export const getBlogHeaderInfo = async (blogUrl: string) => {
  const { data } = await client.get<Response<HeaderProps>>(`/api/v1/blog/${blogUrl}/header`);
  return data;
};

// 블로그 생성
export const postCreateBlog = async (requestBody: createBlogData) => {
  const { data } = await client.post(`/api/v1/blog/create`, requestBody);
  return data;
};

export const putBlogConfig = async (blogUrl: string, requestBody: BlogConfigRequestBodyProps) => {
  const { data } = await client.put(`/api/v1/blog/${blogUrl}/admin/modify`, requestBody);
  return data;
};
