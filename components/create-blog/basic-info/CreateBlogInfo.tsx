'use client';
import { useGetBlogInfo } from '@/hooks/blog';

import CreateInfoLanding from './ui/CreateInfoLanding';

const CreateBlogInfo = () => {
  const data = useGetBlogInfo('Palms');
  console.log(data);
  return <CreateInfoLanding />;
};

export default CreateBlogInfo;
