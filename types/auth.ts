export interface getAccessTokenProps extends authClientInfo {
  code: string;
}

export interface authClientInfo {
  clientId: string;
  clientSecret: string;
}

export interface getAccessTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  refresh_token: string;
}
