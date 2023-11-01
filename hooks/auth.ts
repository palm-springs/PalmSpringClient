import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getAccessToken } from '@/api/auth';
import { postMemberInvite } from '@/api/user';
import { getAccessTokenProps } from '@/types/auth';
import { InviteRequestBody } from '@/types/user';

import { QUERY_KEY_DASHBOARD } from './dashboard';

export const useGetAccessToken = (props: getAccessTokenProps) => {
  const { data } = useQuery(['auth'], () => getAccessToken(props));
  return data;
};

export const usePostMemberInvite = (blogUrl: string, requestBody: InviteRequestBody) => {
  const queryClient = useQueryClient();
  return useMutation(() => postMemberInvite(blogUrl, requestBody), {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getMemberInfo]);
    },
  });
};
