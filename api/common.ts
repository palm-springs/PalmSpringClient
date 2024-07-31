import axios from 'axios';

import { Response } from '@/types/common';
import { imageSizeErrorNotify } from '@/utils/imageSizeErrorNotify';

import client from '.';

export const uploadImage = async (formData: FormData) => {
  try {
    const { data } = await client.post<Response<string>>(`/api/v2/dashboard/image/add`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  } catch (err) {
    return { code: 406, message: 'payload Too Large', data: null };
  }
};

//article, page와 같은 Content 이미지 저장하기
export const uploadContentImage = async (blogUrl: string, formData: FormData) => {
  try {
    const { data } = await client.post<Response<string>>(`/api/v2/dashboard/image/add/article`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  } catch (err) {
    imageSizeErrorNotify();
  }
};

export const postExternalImage = async (imageUrl: string) => {
  const { data } = await client.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/dashboard/image/encode`, {
    imageUrl,
  });
  if (data.code === 400) {
    return null;
  }
  return data;
};
