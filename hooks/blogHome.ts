import { useQuery } from '@tanstack/react-query';

// import { getBlogCategoryList, getBlogHeaderInfo, getBlogInfo, getBlogMainImg } from '@/api/blog';
import {
  getBlogArticleDetail,
  getBlogAuthorDetail,
  getBlogCategoryList,
  getBlogHeaderInfo,
  getBlogPageDetail,
} from '@/api/blogHome';

const QUERY_KEY_BLOG = {
  getBlogInfo: 'getBlogInfo',
  getBlogHeaderInfo: 'getBlogHeaderInfo',
  getBlogArticleDetail: 'getBlogArticleDetail',
  getBlogPageDetail: 'getBlogPageDetail',
  getBlogCategoryList: 'getBlogCategoryList',
  getBlogAuthorDetail: 'getBlogAuthorDetail',
};

//블로그용 헤더 가져오기
export const useGetBlogHeaderInfo = () => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogHeaderInfo], () => getBlogHeaderInfo());
  return data;
};

//블로그용 아티클 상세 가져오기
export const useGetBlogArticleDetail = (articleId: number) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogArticleDetail], () => getBlogArticleDetail(articleId));
  return data;
};

//블로그용 카테고리 리스트 가져오기
export const useGetBlogCategoryList = () => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogCategoryList], () => getBlogCategoryList());
  return data;
};

//블로그용 페이지 상세 가져오기
export const useGetBlogPageDetail = (pageUrl: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogPageDetail], () => getBlogPageDetail(pageUrl));
  return data;
};

//블로그용 글쓴이 정보 가져오기
export const useGetBlogAuthorDetail = (memberId: number) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogAuthorDetail], () => getBlogAuthorDetail(memberId));
  return data;
};
