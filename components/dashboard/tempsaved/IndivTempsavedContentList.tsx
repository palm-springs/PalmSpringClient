import { useParams, useRouter } from 'next/navigation';

import { useDeleteArticle } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';

interface IndivTempsavedContentListProps {
  id: number;
  title: string;
  name: string;
  job: string;
  createdAt: string;
}

const IndivTempsavedContentList = (props: IndivTempsavedContentListProps) => {
  const { team: blogUrl } = useParams();

  const router = useRouter();

  const { id, title, name, job, createdAt } = props;

  const { mutate } = useDeleteArticle(blogUrl, id);

  return (
    <DashBoardContent
      key={id}
      id={String(id)}
      content={title}
      author={name}
      position={job}
      createdAt={createdAt}
      onTitleClick={() => {
        router.push(`/${blogUrl}/editor/article/${id}/draft`);
      }}
      onMutateClick={() => router.push(`/${blogUrl}/editor/article/${id}/draft`)}
      onDeleteClick={() => mutate()}
    />
  );
};

export default IndivTempsavedContentList;
