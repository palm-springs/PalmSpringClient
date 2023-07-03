export interface getAccessTokenProps extends authClientInfo {
  code: string;
}

export interface authClientInfo {
  clientId: string;
  clientSecret: string;
}
