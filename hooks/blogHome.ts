import { useQuery } from '@tanstack/react-query';

import {
  getBlogArticleDetail,
  getBlogAuthorDetail,
  getBlogCategoryList,
  getBlogHeaderInfo,
  getBlogPageDetail,
} from '@/api/blogHome';

const QUERY_KEY_BLOG = {
  getBlogHeaderInfo: 'getBlogHeaderInfo',
  getBlogArticleDetail: 'getBlogArticleDetail',
  getBlogCategoryList: 'getBlogCategoryList',
  getBlogPageDetail: 'getBlogPageDetail',
  getBlogAuthorDetail: 'getBlogAuthorDetail',
};

//블로그용 헤더 가져오기
export const useGetBlogHeaderInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogHeaderInfo], () => getBlogHeaderInfo(blogUrl));
  return data;
};

//블로그용 아티클 상세 가져오기
export const useGetBlogArticleDetail = (blogUrl: string, articleId: number) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogArticleDetail], () => getBlogArticleDetail(blogUrl, articleId));
  return data;
};

//블로그용 카테고리 리스트 가져오기
export const useGetBlogCategoryList = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogCategoryList], () => getBlogCategoryList(blogUrl));
  return data;
};

//블로그용 페이지 상세 가져오기
export const useGetBlogPageDetail = (blogUrl: string, pageUrl: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogPageDetail], () => getBlogPageDetail(blogUrl, pageUrl));
  return data;
};

//블로그용 글쓴이 정보 가져오기
export const useGetBlogAuthorDetail = (blogUrl: string, memberId: number) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogAuthorDetail], () => getBlogAuthorDetail(blogUrl, memberId));
  return data;
};
