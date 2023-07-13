import { client } from '.';

export const getPageList = async (
  blogUrl: string,
): Promise<{
  code: number;
  message: string;
  data: Array<{
    id: string;
    title: string;
    createdAt: string;
    isDraft: boolean;
  }>;
}> => {
  const { data } = await client.get(`/api/v1/page/${blogUrl}`);
  return data;
};

export const getNavList = async (
  blogUrl: string,
): Promise<{
  code: number;
  message: string;
  data: Array<{
    id: string;
    name: string;
    navUrl: string;
  }>;
}> => {
  const { data } = await client.get(`/api/v1/nav/${blogUrl}`);
  return data;
};

export const getCategoryList = async (
  blogUrl: string,
): Promise<{
  code: number;
  message: string;
  data: Array<{
    id: string;
    name: string;
    categoryUrl: string;
    description: string;
  }>;
}> => {
  const { data } = await client.get(`/api/v1/category/${blogUrl}`);
  return data;
};
