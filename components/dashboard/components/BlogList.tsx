import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetUserInfo } from '@/hooks/dashboard';
import userState from '@/recoil/atom/user';

import BlogListContainer from './ui/BlogListContainer';
import IndivBlog from './ui/IndivBlog';
import MakeNewBlogContainer from './ui/MakeNewBlogContainer';

interface BlogListProps {
  currentBlog: number;
  setCurrentBlog: Dispatch<SetStateAction<number>>;
}

const BlogList = (props: BlogListProps) => {
  const { currentBlog, setCurrentBlog } = props;

  const res = useGetUserInfo();

  const router = useRouter();

  const setUserValue = useSetRecoilState(userState);

  if (!res) {
    return (
      <BlogListContainer>
        <LoadingLottie width={4} height={4} />
      </BlogListContainer>
    );
  }

  const userData = res.data;

  return (
    <BlogListContainer>
      <>
        {userData.joinBlogList.map(({ blogName, blogUrl, role }, idx) => {
          return (
            <IndivBlog
              isCurrentBlog={idx === currentBlog}
              innerText={blogName}
              key={blogName}
              handleChange={() => {
                setCurrentBlog(idx);
                setUserValue((prev) => {
                  if (prev === null) {
                    router.push('/auth');
                    return prev;
                  }
                  return {
                    ...prev,
                    currentUserRole: role,
                  };
                });
                router.push(`/${blogUrl}/dashboard/upload`);
              }}
            />
          );
        })}
        <MakeNewBlogContainer onClick={() => router.push('/create-blog')} />
      </>
    </BlogListContainer>
  );
};

export default BlogList;
