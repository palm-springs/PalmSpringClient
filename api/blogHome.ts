import { ArticleData } from '@/types/article';
import { AuthorInfoProps } from '@/types/author';
import { HeaderProps } from '@/types/blogHeader';
import { BlogImgProps } from '@/types/blogMainImg';
import { Response } from '@/types/common';
import { ContentProps } from '@/types/content';
import { CategoryListProps } from '@/types/dashboard';
import { PageData } from '@/types/page';

import client from '.';

//블로그 header 정보 가져오기 - 반영 완
export const getBlogHeaderInfo = async () => {
  const { data } = await client.get<Response<HeaderProps>>(`/api/v2/view/meta/header`);
  return data;
  // {{SUBDOMAIN_URL}}/api/v2/view/meta/header
};

// blog 대문 이미지와 한 줄 소개 가져오기 - 반영 완
export const getBlogMainImg = async () => {
  const { data } = await client.get<Response<BlogImgProps>>(`/api/v2/view/meta/thumbnail`);
  return data;
  // {{SUBDOMAIN_URL}}/api/v2/view/meta/thumbnail
};

//블로그용 카테고리 가져오기 - 반영 완 - 새로 생김
export const getBlogCategoryList = async () => {
  const { data } = await client.get<Response<CategoryListProps[]>>(`/api/v2/view/category/list`);
  return data;
  // {{SUBDOMAIN_URL}}/api/v2/view/category/list
};

//블로그용 아티클 리스트 가져오기 - 반영 완
export const getBlogArticleList = async (categoryId: string | null) => {
  const { data } = await client.get<Response<ArticleData[]>>(`/api/v2/view/article/list?categoryId=${categoryId}`);
  return data;
  // {{SUBDOMAIN_URL}}/api/v2/view/article/list?categoryId=
};

//블로그용 페이지 상세 정보 가져오기
export const getBlogPageDetail = async (pageUrl: string) => {
  const { data } = await client.get<Response<PageData>>(`/api/v2/view/page/detail?pageUrl=${pageUrl}`);
  return data;
  // {{SUBDOMAIN_URL}}/api/v2/view/page/detail?pageUrl=
};

//블로그용 아티클 상세 정보 가져오기
export const getBlogArticleDetail = async (articleId: number) => {
  const { data } = await client.get<Response<ContentProps>>(`/api/v2/view/article/detail?articleId=${articleId}`);
  return data;
  //   {{SUBDOMAIN_URL}}/api/v2/view/article/detail?articleId=
};

//블로그용 글쓴이 정보 가져오기
export const getBlogAuthorDetail = async (memberId: number) => {
  const { data } = await client.get<Response<AuthorInfoProps>>(`/api/v2/view/author/detail/${memberId}`);
  return data;
  // {{SUBDOMAIN_URL;}}/api/v2/view/author/detail/{ memberId };
};
