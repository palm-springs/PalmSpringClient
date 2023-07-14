interface getAccessTokenProps extends authClientInfo {
  code: string;
}

interface authClientInfo {
  clientId: string;
  clientSecret: string;
}

interface getAccessTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  refresh_token: string;
}
