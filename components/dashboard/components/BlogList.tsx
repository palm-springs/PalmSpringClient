import React, { Dispatch, SetStateAction, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

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

  return (
    <BlogListContainer>
      {res ? (
        <>
          {res.data.joinBlogList.map(({ name, url }, idx) => {
            return (
              <IndivBlog
                isCurrentBlog={idx === currentBlog}
                innerText={name}
                key={name}
                handleChange={() => {
                  setCurrentBlog(idx);
                  router.push(`/${url}/dashboard/upload`);
                }}
              />
            );
          })}
          <MakeNewBlogContainer onClick={() => router.push('/create-blog')} />
        </>
      ) : (
        <LoadingLottie width={4} height={4} />
      )}
    </BlogListContainer>
  );
};

export default BlogList;
