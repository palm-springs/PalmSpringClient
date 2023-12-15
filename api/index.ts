import axios, { AxiosInstance } from 'axios';

const client: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
});

// 배포본 테스트 이후 삭제 예정
// const accessToken = sessionStorage?.getItem('userToken');
// if (accessToken) {
//   console.log('여기는 client 설정하는 곳에서 header 갈아끼움');
//   const { accessTokenState } = JSON.parse(accessToken);
//   axios.defaults.headers.common.Authorization = `Bearer ${accessTokenState}`;
//   client.defaults.headers.common.Authorization = `Bearer ${accessTokenState}`;
// }

export default client;

export const refreshAxiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
});
