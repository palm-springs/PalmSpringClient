import React, { Dispatch, SetStateAction, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

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

  const { team } = useParams();

  const res = useGetUserInfo(team);

  const router = useRouter();

  // const [currentBlog, setCurrentBlog] = useState<number>(0);

  if (!res) return <div>로더</div>;

  const { data } = res;

  return (
    <BlogListContainer>
      {data.joinBlogList.map(({ name, url }, idx) => {
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
      <MakeNewBlogContainer />
    </BlogListContainer>
  );
};

export default BlogList;
