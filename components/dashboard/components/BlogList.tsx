import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetUserInfo } from '@/hooks/dashboard';

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
        {userData.joinBlogList.map(({ blogName, blogUrl }, idx) => {
          return (
            <IndivBlog
              isCurrentBlog={idx === currentBlog}
              innerText={blogName}
              key={blogName}
              handleChange={() => {
                setCurrentBlog(idx);
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
