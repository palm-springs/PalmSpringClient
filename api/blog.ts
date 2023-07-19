import { createBlogData } from '@/types/blogInfo';

import { client } from '.';

export const getBlogInfo = async (blogUrl: string) => {
  const { data } = await client.get(`/api/v1/blog?url=${blogUrl}`);
  return data;
};

// 블로그 url 중복 검사
export const getCheckBlogUrlDuplication = async (blogUrl: string) => {
  const {
    data: { data },
  } = await client.get(`/api/v1/blog/check?url=${blogUrl}`);
  return data;
};

// 블로그 생성
export const postCreateBlog = async (requestBody: createBlogData) => {
  const { data } = await client.post(`/api/v1/blog/create`, requestBody);
  return data;
};

export const putBlogConfig = async (blogUrl: string, requestBody: any) => {
  const { data } = await client.put(`/api/v1/blog/${blogUrl}/modify`, requestBody, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
