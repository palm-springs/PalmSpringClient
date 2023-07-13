import { client } from '.';

export const getBlogInfo = async (blogUrl: string) => {
  const { data } = await client.get(`/api/v1/blog?url=${blogUrl}`);
  return data;
};
