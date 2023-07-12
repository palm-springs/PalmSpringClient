import axios, { AxiosInstance } from 'axios';

export const client: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
