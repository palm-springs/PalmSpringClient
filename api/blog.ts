import { client } from '.';

export const getBlogInfo = async (blogUrl: string) => {
  const {
    data: { data },
  } = await client.get(`/api/v1/blog?url=${blogUrl}`);
  return data;
};

// 블로그 url 중복 검사
export const getCheckBlogUrlDuplication = async (blogUrl: string) => {
  const {
    data: { data },
  } = await client.get(`/blog/check?url=${blogUrl}`);
  return data;
};
