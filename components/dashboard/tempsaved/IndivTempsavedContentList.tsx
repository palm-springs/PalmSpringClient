import { Dispatch, SetStateAction } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { articleDataState } from '@/components/editor/states/atom';
import { useDeleteArticle } from '@/hooks/dashboard';
import { removeDraftContentData } from '@/utils/removeContentData';

import DashBoardContent from '../components/DashBoardContent';
import DashboardContentDeleteModal from '../components/DashboardContentDeleteModal';
import { dashBoardModalState } from '../state/modalState';

interface IndivTempsavedContentListProps {
  id: number;
  title: string;
  name: string;
  job: string;
  createdAt: string;
  deleteModalId: number | null;
  setDeleteModalId: Dispatch<SetStateAction<number | null>>;
}

const IndivTempsavedContentList = (props: IndivTempsavedContentListProps) => {
  const { team: blogUrl } = useParams();

  const router = useRouter();

  const { id, title, name, job, createdAt, deleteModalId, setDeleteModalId } = props;
  const resetArticleData = useResetRecoilState(articleDataState);

  const [modalState, setModalState] = useRecoilState(dashBoardModalState);

  // sessionStorage
  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

  const { mutate } = useDeleteArticle(blogUrl, id);

  return (
    <>
      {modalState === 'deleteArticle' && deleteModalId === id && (
        <DashboardContentDeleteModal
          title={title}
          text="글을 삭제하시겠어요?"
          subText="글을 삭제할 시, 복구할 수 없습니다."
          onDelete={() => {
            mutate();
            setModalState('');
            setDeleteModalId(null);
          }}
        />
      )}
      <DashBoardContent
        key={id}
        id={String(id)}
        content={title}
        author={name}
        position={job}
        createdAt={createdAt}
        onTitleClick={() => {
          resetArticleData();
          removeDraftContentData();
          router.push(`/${blogUrl}/editor/article/${id}/draft`);
        }}
        onMutateClick={() => {
          resetArticleData();
          removeDraftContentData();
          router.push(`/${blogUrl}/editor/article/${id}/draft`);
        }}
        onDeleteClick={() => {
          resetArticleData();
          removeDraftContentData();
          setModalState('deleteArticle');
          setDeleteModalId(id);
        }}
      />
    </>
  );
};

export default IndivTempsavedContentList;
