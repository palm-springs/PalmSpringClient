import axios, { isAxiosError } from 'axios';

import client from '.';

export const postImage = async (formData: FormData) => {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/dashboard/image/add`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
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
