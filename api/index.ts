import axios, { AxiosInstance } from 'axios';

const client: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
});

// Authorization 설정
const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

const accessToken = sessionStorage?.getItem('userToken');
if (accessToken) {
  const { accessTokenState } = JSON.parse(accessToken);
  console.log(accessTokenState);
  axios.defaults.headers.Authorization = `Bearer ${accessTokenState}`;
}

export default client;
