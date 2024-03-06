import { Dispatch, SetStateAction } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { articleDataState } from '@/components/editor/states/atom';
import { IS_FIRST_DRAFT_CLICK } from '@/constants/editor';
import { useDeleteArticle } from '@/hooks/dashboard';

import DashBoardContent from '../../components/DashBoardContent';
import DashboardContentDeleteModal from '../../components/DashboardContentDeleteModal';
import { dashBoardModalState } from '../../state/modalState';

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
  deleteModalId: number | null;
  setDeleteModalId: Dispatch<SetStateAction<number | null>>;
}

const IndivUploadContentList = (props: IndivUploadContentListProps) => {
  const { team } = useParams();

  const router = useRouter();
  const resetArticleData = useResetRecoilState(articleDataState);

  const { id, title, articleCategory, memberName, job, createdAt, articleUrl, deleteModalId, setDeleteModalId } = props;

  const [dashboardModalState, setDashboardModalState] = useRecoilState(dashBoardModalState);

  // sessionStorage
  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

  const { mutate } = useDeleteArticle(team, id);
  return (
    <>
      {dashboardModalState === 'deleteArticle' && deleteModalId === id && (
        <DashboardContentDeleteModal
          text="글을 삭제하시겠어요?"
          subText="글을 삭제할 시, 복구할 수 없습니다."
          onDelete={() => {
            mutate();
            setDashboardModalState('');
            setDeleteModalId(null);
          }}
        />
      )}
      <DashBoardContent
        id={String(id)}
        content={title}
        tabType={articleCategory && articleCategory.categoryName}
        author={memberName}
        position={job}
        createdAt={createdAt}
        onMutateClick={() => {
          resetArticleData();
          sessionStorage?.removeItem(IS_FIRST_DRAFT_CLICK);
          router.push(`/${team}/editor/article/${String(id)}/edit`);
        }}
        onTitleClick={() => {
          window.open(
            `https://${team}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}/content/article/${articleUrl}/${String(id)}`,
          );
        }}
        onDeleteClick={() => {
          setDashboardModalState('deleteArticle');
          setDeleteModalId(id);
        }}
      />
    </>
  );
};

export default IndivUploadContentList;
