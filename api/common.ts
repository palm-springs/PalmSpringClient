// import axios, { AxiosRequestConfig } from 'axios';

// url 불러오기
// export const getPageList = async (blogUrl: string) => {
//   const url = `/api/v1/nav/${blogUrl}`;
//   const config: AxiosRequestConfig = {
//     baseURL: process.env.NEXT_PUBLIC_BASE_URL,
//     headers: { 'Content-Type': 'multipart/form-data' },
//   };
//   const { data } = await axios.get(url, config);
//   return data;
// };
import axios from 'axios';

export const uploadImage = async (formData: FormData) => {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/image/add`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};
