import AuthRequired from '@/components/auth/AuthRequired';

import CreateBlogLanding from './ui/CreateBlogLanding';

const CreateBlogBasicInfo = () => {
  return (
    <AuthRequired>
      <CreateBlogLanding />
    </AuthRequired>
  );
};

export default CreateBlogBasicInfo;
