import { useQuery } from '@tanstack/react-query';

import { getAccessToken } from '@/api/auth';
import { getAccessTokenProps } from '@/types/auth';

export const useGetAccessToken = (props: getAccessTokenProps) => {
  const { data } = useQuery(['auth'], () => getAccessToken(props));
  return data;
};
