import { Dispatch, RefObject, SetStateAction, useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import { usePathname, useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetUserInfo } from '@/hooks/dashboard';
import userState from '@/recoil/atom/user';
import { RoleType } from '@/utils/PermissionPolicyClass';

import BlogListContainer from './ui/BlogListContainer';
import IndivBlog from './ui/IndivBlog';
import MakeNewBlogContainer from './ui/MakeNewBlogContainer';

interface BlogListProps {
  currentBlog: number;
  setCurrentBlog: Dispatch<SetStateAction<number>>;
  blogListRef: RefObject<HTMLElement>;
}

export let test: {
  blogName: string;
  blogUrl: string;
  role: RoleType;
};

const BlogList = (props: BlogListProps) => {
  const { currentBlog, setCurrentBlog, blogListRef } = props;

  const res = useGetUserInfo();

  const router = useRouter();
  const path = usePathname();

  const setUserValue = useSetRecoilState(userState);

  const [, drop] = useDrop(() => ({ accept: typeof test }));

  const [list, setList] = useState(res?.data.joinBlogList ?? []);

  const findItem = useCallback((blogUrl: string) => {
    const item = list.filter((i) => `${i.blogUrl}` === blogUrl)[0] as typeof test;
    return {
      item,
      index: list.indexOf(item),
    };
  }, [list]);

  const moveItem = useCallback((blogUrl: string, atIndex: number) => {
    const { item, index } = findItem(blogUrl);

    setList(update(list, {
      $splice: [
        [index, 1],
        [atIndex, 0, item],
      ],
    }));
  }, [findItem, list, setList]);

  if (!res) {
    return (
      <BlogListContainer blogListRef={blogListRef}>
        <LoadingLottie width={4} height={4} />
      </BlogListContainer>
    );
  }

  const userData = res.data;

  return (
    <BlogListContainer blogListRef={blogListRef}>
      <div ref={drop}>
        {list.map(({ blogName, blogUrl, role }, idx) => {
          return (
            <IndivBlog
              isCurrentBlog={path.startsWith(`/${blogUrl}`)}
              innerText={blogName}
              key={blogName}
              blogUrl={blogUrl}
              moveBlog={moveItem}
              findBlog={findItem}
              handleChange={() => {
                setCurrentBlog(idx);
                setUserValue((prev) => {
                  if (prev === null) {
                    router.push('/login');
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
      </div>
    </BlogListContainer>
  );
};

export default BlogList;
