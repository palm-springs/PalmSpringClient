import AuthRequired from '@/components/auth/AuthRequired';
import CreateBlogBasicInfo from '@/components/create-blog/info/CreateBlogBasicInfo';

const CreateBlogInfoPage = async () => {
  return (
    <AuthRequired>
      <CreateBlogBasicInfo />
    </AuthRequired>
  );
};

export default CreateBlogInfoPage;
