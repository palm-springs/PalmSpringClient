import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { deleteBlog, getBlogInfo } from '@/apis/blog';
import { Response } from '@/types/common';
import { UserInfoProps } from '@/types/user';

import { QUERY_KEY_DASHBOARD } from './dashboard';

const QUERY_KEY_BLOG = {
  getBlogInfo: 'getBlogInfo',
  deleteBlog: 'deleteBlog',
};
// 주석

export const useGetBlogInfo = (blogUrl: string) => {
  const { data } = useQuery({ queryKey: [QUERY_KEY_BLOG.getBlogInfo, blogUrl], queryFn: () => getBlogInfo(blogUrl) });
  return data;
};

export const useDeleteBlog = (blogUrl: string) => {
  const queryClient = useQueryClient();

  const router = useRouter();

  return useMutation({
    mutationKey: [QUERY_KEY_BLOG.deleteBlog, blogUrl],
    mutationFn: () => deleteBlog(blogUrl),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_DASHBOARD.getUserInfo] });

      const res = queryClient.getQueryData<Response<UserInfoProps>>([QUERY_KEY_DASHBOARD.getUserInfo]);

      if (!res) return;

      if (res.data && res.data.joinBlogList.length > 0) {
        router.push(`/${res.data.joinBlogList[0].blogUrl}/dashboard/upload`);
      } else {
        router.push(`/no-team/dashboard/upload`);
      }
    },
  });
};
