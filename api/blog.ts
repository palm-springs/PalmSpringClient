import { HeaderProps } from '@/types/blogHeader';
import { createBlogData } from '@/types/blogInfo';
import { BlogImgProps } from '@/types/blogMainImg';
import { Response } from '@/types/common';

import client from '.';

interface BlogConfigRequestBodyProps {
  name: string;
  description: string;
  thumbnail: string;
  logo: string;
}

interface BlogInfoProps {
  name: string;
  url: string;
  thumbnail: string;
  logo: string;
  description: string;
}

export const getBlogInfo = async (blogUrl: string) => {
  const { data } = await client.get<Response<BlogInfoProps>>(`/api/v1/blog?url=${blogUrl}`);
  return data;
};

// 블로그 url 중복 검사
export const getCheckBlogUrlDuplication = async (blogUrl: string) => {
  const { data } = await client.get(`/api/v2/dashboard/blog/check?url=${blogUrl}`);
  return data;
};

//blog header 정보 가져오기
export const getBlogHeaderInfo = async (blogUrl: string) => {
  const { data } = await client.get<Response<HeaderProps>>(`/api/v1/blog/${blogUrl}/header`);
  return data;
};

// blog 대문 이미지와 한 줄 소개 가져오기
export const getBlogMainImg = async (blogUrl: string) => {
  const { data } = await client.get<Response<BlogImgProps>>(`/api/v1/blog/${blogUrl}/thumbnail`);
  return data;
};

// 블로그 생성
export const postCreateBlog = async (requestBody: createBlogData) => {
  const { data } = await client.post(`/api/v2/dashboard/blog/create`, requestBody);
  return data;
};

export const putBlogConfig = async (blogUrl: string, requestBody: BlogConfigRequestBodyProps) => {
  const { data } = await client.put(`/api/v1/blog/${blogUrl}/admin/modify`, requestBody);
  return data;
};

export const deleteBlog = async (blogUrl: string) => {
  const { data } = await client.delete<Response<null>>(`/api/v1/blog/${blogUrl}/admin/remove`);
  return data;
};
