import axios, { isAxiosError } from 'axios';

import {
  getAccessTokenProps,
  googleAccessTokenResponse,
  jwtAccessTokenResponse,
  loginRequest,
  loginResponse,
  verifyEmailRequest,
  verifyEmailResponse,
} from '@/types/auth';
import { Response } from '@/types/common';

import client, { refreshAxiosInstance } from '.';

const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
// 브랜치테스트용
// const redirectUri = TEST_REDIRECT_URI;

// 구글 액세스 토큰 발급
export const getAccessToken = async (props: getAccessTokenProps) => {
  const { clientId, clientSecret, code } = props;

  const { data } = await axios.post<googleAccessTokenResponse>(
    `https://oauth2.googleapis.com/token?code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&grant_type=authorization_code`,
    {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    },
  );
  return data;
};

// JWT 토큰 발급
export const postSocialLogin = async (platform: string, AccessToken: string) => {
  try {
    const { data } = await client.post<Response<jwtAccessTokenResponse>>(
      `/api/v2/auth/social/login/${platform}`,
      {
        accessToken: AccessToken,
      },
      { withCredentials: true },
    );
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.response?.data;
    }
    return;
  }
};

// 리프레시 토큰 재발급
export const getRefreshToken = async () => {
  try {
    const { data } = await refreshAxiosInstance.get(`/api/v2/auth/token/reissue`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.response?.data;
    }
  }
};

// 로그아웃
export const logout = async () => {
  const { data } = await client.delete<Response<null>>(`/api/v2/auth/logout`);
  return data;
};

/* 자체 플랫폼 */
// 로그인
export const platformLogin = async (requestBody: loginRequest) => {
  try {
    const { data } = await client.post<Response<loginResponse>>(`/api/v2/auth/internal/login`, requestBody);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return { code: err.response?.status, message: '로그인 정보가 올바르지 않습니다', data: null };
    }
  }
};

export const platformRegister = async (requestBody: loginRequest) => {
  try {
    const { data } = await client.post<Response<null>>(`/api/v2/auth/internal/register`, requestBody);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return { code: err.response?.status, message: err.response?.data.message, data: null };
    }
  }
};

export const sendVerifyEmail = async (requestBody: verifyEmailRequest) => {
  try {
    const { data } = await client.post<Response<null>>(`/api/v2/auth/internal/verify`, requestBody);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return { code: err.response?.status, message: '', data: null };
    }
  }
};

export const getVerifyEmail = async (type: string, code: string) => {
  try {
    const { data } = await client.get<Response<verifyEmailResponse>>(
      `/api/v2/auth/internal/verify?type=${type}&code=${code}`,
    );
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return { code: err.response?.status, message: '', data: null };
    }
  }
};

export const resetPassword = async (requestBody: loginRequest) => {
  try {
    const { data } = await client.put<Response<null>>(`/api/v2/auth/internal/reset/password`, requestBody);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return { code: err.response?.status, message: '', data: null };
    }
  }
};
