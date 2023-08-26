import { useParams, useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

import { useDeleteArticle } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashboardContentDeleteModal from '../components/DashboardContentDeleteModal';
import { dashBoardModalState } from '../state/modalState';

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

  const [modalState, setModalState] = useRecoilState(dashBoardModalState);

  const { mutate } = useDeleteArticle(blogUrl, id);

  return (
    <>
      <DashBoardContent
        key={id}
        id={String(id)}
        content={title}
        author={name}
        position={job}
        createdAt={createdAt}
        onTitleClick={() => router.push(`/${blogUrl}/editor/article/${id}/draft`)}
        onMutateClick={() => router.push(`/${blogUrl}/editor/article/${id}/draft`)}
        onDeleteClick={() => setModalState('deleteArticle')}
      />
      {modalState === 'deleteArticle' && (
        <DashboardContentDeleteModal
          text="글을 삭제하시겠어요?"
          subText="글을 삭제할 시, 복구할 수 없습니다."
          onDelete={() => mutate()}
        />
      )}
    </>
  );
};

export default IndivTempsavedContentList;
