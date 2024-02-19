'use client';
import { Suspense } from 'react';

import AuthRequired from '@/components/auth/AuthRequired';
import CreateBlogBasicInfo from '@/components/create-blog/info/CreateBlogBasicInfo';

const CreateBlogInfoPage = () => {
  return (
    <Suspense>
      <AuthRequired>
        <CreateBlogBasicInfo />
      </AuthRequired>
    </Suspense>
  );
};

export default CreateBlogInfoPage;
