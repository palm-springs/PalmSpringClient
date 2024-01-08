'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { getUserInfo } from '@/api/dashboard';

const TeamValidation = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const teamValidation = async () => {
      const { data } = await getUserInfo();
      if (data.joinBlogList.length > 0) {
        router.push(`/${data.joinBlogList[0].blogUrl}/dashboard/upload`);
      }
    };
    teamValidation();
  }, []);

  return <div>{children}</div>;
};

export default TeamValidation;
