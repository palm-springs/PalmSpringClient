import { useQuery } from '@tanstack/react-query';

import { getCurrentUserInfo } from '@/api/user';

const QUERY_KEY_USER = {
  getCurrentUserInfo: 'getCurrentUserInfo',
};

export const useGetCurrentUserInfo = () => {
  const { data } = useQuery([QUERY_KEY_USER.getCurrentUserInfo], getCurrentUserInfo);
  return data;
};
