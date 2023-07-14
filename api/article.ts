import { client } from '.';

export const getArticleList = async (blogUrl: string, categoryId: string | null) => {
  const { data } = await client.get<Response<ArticleProps>>(`/api/v1/article/${blogUrl}?categoryId=${categoryId}`);
  return data;
};
