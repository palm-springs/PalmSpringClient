import { isAxiosError } from 'axios';

import { ArticleData } from '@/types/article';
import { AuthorInfoProps } from '@/types/author';
import { HeaderProps, subscribeData } from '@/types/blogHeader';
import { BlogImgProps } from '@/types/blogMainImg';
import { Response } from '@/types/common';
import { ContentProps } from '@/types/content';
import { CategoryListProps } from '@/types/dashboard';
import { PageData } from '@/types/page';

import client from '.';

//블로그 header 정보 가져오기 - 반영 완 -b

export const getBlogHeaderInfo = async (blogUrl: string) => {
  try {
    const { data } = await client.get<Response<HeaderProps>>(`/api/v2/view/meta/${blogUrl}/header`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.response?.data;
    }
    return;
  }
};

// blog 대문 이미지와 한 줄 소개 가져오기 - 반영 완 -b
export const getBlogMainImg = async (blogUrl: string) => {
  try {
    const { data } = await client.get<Response<BlogImgProps>>(`/api/v2/view/meta/${blogUrl}/thumbnail`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.response?.data;
    }
    return;
  }
};

//블로그용 카테고리 가져오기 - 반영 완 - 새로 생김 -b
export const getBlogCategoryList = async (blogUrl: string) => {
  const { data } = await client.get<Response<CategoryListProps[]>>(`/api/v2/view/category/${blogUrl}/list`);
  return data;
};

//블로그용 아티클 리스트 가져오기 - 반영 완 -b
export const getBlogArticleList = async (blogUrl: string, categoryId: string | null) => {
  try {
    const { data } = await client.get<Response<ArticleData[]>>(
      categoryId
        ? `/api/v2/view/article/${blogUrl}/list?categoryId=${categoryId}`
        : `/api/v2/view/article/${blogUrl}/list`,
    );
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.response?.data;
    }
    return;
  }
};

//블로그용 페이지 상세 정보 가져오기 -b
export const getBlogPageDetail = async (blogUrl: string, pageUrl: string) => {
  const { data } = await client.get<Response<PageData>>(`/api/v2/view/page/${blogUrl}/detail?pageUrl=${pageUrl}`);
  return data;
};

//블로그용 아티클 상세 정보 가져오기 -b
export const getBlogArticleDetail = async (blogUrl: string, articleId: number) => {
  const { data } = await client.get<Response<ContentProps>>(
    `/api/v2/view/article/${blogUrl}/detail?articleId=${articleId}`,
  );
  return data;
};

//블로그용 글쓴이 정보 가져오기
export const getBlogAuthorDetail = async (blogUrl: string, memberId: number) => {
  const { data } = await client.get<Response<AuthorInfoProps>>(`/api/v2/view/author/${blogUrl}/detail/${memberId}`);
  return data;
};

//뉴스레터 구독하기 post
export const postSubscriber = async (requestBody: subscribeData) => {
  const { data } = await client.post(`/api/v2/view/subscribe`, requestBody);
  return data;
};
