import { getArticleList } from '@/api/article';
import CreateBlogBasicInfo from '@/components/create-blog/info/CreateBlogBasicInfo';

const CreateBlogInfoPage = async () => {
  const data = await getArticleList('synthiablog', '');
  console.log(data);
  return <CreateBlogBasicInfo />;
};

export default CreateBlogInfoPage;
