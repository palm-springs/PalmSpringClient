export interface getAccessTokenProps extends authClientInfo {
  code: string;
}

export interface authClientInfo {
  clientId: string;
  clientSecret: string;
}

export interface googleAccessTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  refresh_token: string;
}

export interface jwtAccessTokenResponse {
  accessToken: string;
  grantType: string;
  refreshToken: string;
}

export interface loginRequest {
  email: string;
  password: string;
}

export interface loginResponse {
  grantType: string;
  refreshToken: string;
  accessToken: string;
}

export interface verifyEmailRequest {
  type: string;
  email: string;
  password?: string;
}

export interface verifyEmailResponse {
  type: string;
  email: string;
  password: string;
}
