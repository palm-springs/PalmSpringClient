import client from '.';

export const uploadImage = async (formData: FormData) => {
  const { data } = await client.post(`/api/v2/dashboard/image/add`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};
