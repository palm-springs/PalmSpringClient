import client from '.';

export const uploadImage = async (blogUrl: string, formData: FormData) => {
  const { data } = await client.post(`/api/v2/dashboard/image/add/${blogUrl}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};
