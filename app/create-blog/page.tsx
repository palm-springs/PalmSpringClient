import { Suspense } from 'react';

import AuthRequired from '@/components/auth/AuthRequired';
import CreateBlogBasicInfo from '@/components/create-blog/info/CreateBlogBasicInfo';

const CreateBlogInfoPage = async () => {
  return (
    <Suspense>
      <AuthRequired>
        <CreateBlogBasicInfo />
      </AuthRequired>
    </Suspense>
  );
};

export default CreateBlogInfoPage;
