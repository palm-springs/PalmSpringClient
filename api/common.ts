import { isAxiosError } from 'axios';

import { Response } from '@/types/common';

import client from '.';

export const uploadImage = async (formData: FormData) => {
  try {
    const { data } = await client.post<Response<string>>(`/api/v2/dashboard/image/add`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.response?.data;
    }
  }
};

//article, page와 같은 Content 이미지 저장하기
export const uploadContentImage = async (blogUrl: string, formData: FormData) => {
  const { data } = await client.post(`/api/v2/dashboard/image/add/article`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};
