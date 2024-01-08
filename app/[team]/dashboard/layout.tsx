'use client';
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';

import AuthRequired from '@/components/auth/AuthRequired';
import DashBoardTemplate from '@/components/dashboard/DashBoardTemplate';
import userState from '@/recoil/atom/user';

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const [userValue, setUserValue] = useRecoilState(userState);
  const { team } = useParams();

  useEffect(() => {
    console.log('here!!!!!!!!!!!!!!!');
    const currentUserBlog = userValue?.joinBlogList.find(({ blogUrl }) => blogUrl === team);
    if (userValue && currentUserBlog) {
      console.log('here???????????');
      setUserValue({
        ...userValue,
        currentUserRole: currentUserBlog.role,
      });
      console.log(userValue);
    }
  }, [team]);

  return (
    <AuthRequired>
      <DashBoardTemplate>{children}</DashBoardTemplate>
    </AuthRequired>
  );
};

export default DashBoardLayout;
