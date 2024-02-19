'use client';

import AuthRequired from '@/components/auth/AuthRequired';
import CreateBlogBasicInfo from '@/components/create-blog/info/CreateBlogBasicInfo';

const CreateBlogInfoPage = () => {
  return (
    <AuthRequired>
      <CreateBlogBasicInfo />
    </AuthRequired>
  );
};

export default CreateBlogInfoPage;
