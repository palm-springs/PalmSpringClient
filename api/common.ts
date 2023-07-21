import client from '.';

export const uploadImage = async (formData: FormData) => {
  const { data } = await client.post(`/api/v1/image/add`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};
