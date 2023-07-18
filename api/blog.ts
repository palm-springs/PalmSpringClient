import { HeaderProps } from '@/types/blogHeader';
import { BlogImgProps } from '@/types/blogMainImg';
import { Response } from '@/types/common';
import { PageListProps } from '@/types/dashboard';

import { client } from '.';

export const getBlogInfo = async (blogUrl: string) => {
  const { data } = await client.get<Response<PageListProps>>(`/api/v1/blog?url=${blogUrl}`);
  return data;
};

// 블로그 url 중복 검사
export const getCheckBlogUrlDuplication = async (blogUrl: string) => {
  const { data } = await client.get(`/blog/check?url=${blogUrl}`);
  return data;
};

//blog header 정보 가져오기
export const getBlogHeaderInfo = async (blogUrl: string) => {
  const { data } = await client.get<Response<HeaderProps>>(`/api/v1/blog/${blogUrl}/header`);
  return data;
};

//blog 대문 이미지와 한 줄 소개 가져오기
export const getBlogMainImg = async (blogUrl: string) => {
  const { data } = await client.get<Response<BlogImgProps>>(`/api/v1/blog/${blogUrl}/thumbnail`);
  return data;
};

//blog home 페이지의 아티클 카테고리 가져오기 - 대시보드의 것과 같아서 그거 사용중
// export const getCategoryList = async (blogUrl: string) => {
//   const { data } = await client.get<Response<CategoryProps>>(`/api/v1/category/${blogUrl}`);
//   return data;
// };
