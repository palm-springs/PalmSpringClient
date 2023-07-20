import axios, { AxiosInstance } from 'axios';

export const client: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,

  headers: { 'content-type': 'application/json' },
  withCredentials: true,
});
