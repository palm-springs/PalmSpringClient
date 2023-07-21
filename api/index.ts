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
const token = sessionStorage?.getItem('userToken');

client.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;

export default client;
