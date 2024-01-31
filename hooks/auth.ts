import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getAccessToken } from '@/api/auth';
import { deleteInvite, getMemberInvite, postMemberInvite } from '@/api/user';
import { getAccessTokenProps } from '@/types/auth';
import { DeleteRequestBody, InviteRequestBody } from '@/types/user';

import { QUERY_KEY_DASHBOARD } from './dashboard';

const QUERY_KEY_AUTH = {
  auth: 'auth',
  invite: 'invite',
};

export const useGetAccessToken = (props: getAccessTokenProps) => {
  const { data } = useQuery([QUERY_KEY_AUTH.auth], () => getAccessToken(props));
  return data;
};

export const usePostMemberInvite = (blogUrl: string, requestBody: InviteRequestBody, handleEmailList: () => void) => {
  const queryClient = useQueryClient();
  return useMutation(() => postMemberInvite(blogUrl, requestBody), {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getMemberInfo]);
      handleEmailList();
    },
  });
};

export const useGetMemberInvite = (code: string | null) => {
  const { data } = useQuery([QUERY_KEY_AUTH.invite, code], () => getMemberInvite(code));
  return data;
};

export const useDeleteInvite = (blogUrl: string, requestBody: DeleteRequestBody) => {
  const queryClient = useQueryClient();
  return useMutation(() => deleteInvite(blogUrl, requestBody), {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY_DASHBOARD.getMemberInfo]);
    },
  });
};
