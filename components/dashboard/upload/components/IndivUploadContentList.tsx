import { useParams, useRouter } from 'next/navigation';

import { useDeleteArticle } from '@/hooks/dashboard';

import DashBoardContent from '../../components/DashBoardContent';

interface IndivUploadContentListProps {
  id: number;
  title: string;
  articleCategory: {
    categoryId: number;
    categoryName: string;
  };
  memberName: string;
  job: string;
  createdAt: string;
  articleUrl: string;
}

const IndivUploadContentList = (props: IndivUploadContentListProps) => {
  const { team } = useParams();

  const router = useRouter();

  const { id, title, articleCategory, memberName, job, createdAt, articleUrl } = props;

  const { mutate } = useDeleteArticle(team, id);
  return (
    <DashBoardContent
      id={String(id)}
      content={title}
      tabType={articleCategory && articleCategory.categoryName}
      author={memberName}
      position={job}
      createdAt={createdAt}
      onTitleClick={() => router.push(`/${team}/content/article/${articleUrl}/${String(id)}`)}
      onMutateClick={() => router.push(`/${team}/editor/article/edit/${String(id)}`)}
      onDeleteClick={() => mutate()}
    />
  );
};

export default IndivUploadContentList;
