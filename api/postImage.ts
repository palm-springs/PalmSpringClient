import axios from 'axios';

export const postImage = async (formData: FormData) => {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/dashboard/image/add`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};
