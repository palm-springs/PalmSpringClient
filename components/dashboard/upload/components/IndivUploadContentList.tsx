import { useParams, useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

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
}

const IndivUploadContentList = (props: IndivUploadContentListProps) => {
  const { team } = useParams();

  const router = useRouter();

  const { id, title, articleCategory, memberName, job, createdAt, articleUrl } = props;

  const [dashboardModalState, setDashboardModalState] = useRecoilState(dashBoardModalState);

  const { mutate } = useDeleteArticle(team, id);
  return (
    <>
      {dashboardModalState === 'deleteArticle' && (
        <DashboardContentDeleteModal
          text="글을 삭제하시겠어어요?"
          subText="글을 삭제할 시, 복구할 수 없습니다."
          onDelete={() => mutate()}
        />
      )}
      <DashBoardContent
        id={String(id)}
        content={title}
        tabType={articleCategory && articleCategory.categoryName}
        author={memberName}
        position={job}
        createdAt={createdAt}
        onMutateClick={() => router.push(`/${team}/editor/article/${String(id)}/edit`)}
        onTitleClick={() => {
          window.location.href = `https://${team}.palms.blog/content/article/${articleUrl}/${String(id)}`;
        }}
        onDeleteClick={() => setDashboardModalState('deleteArticle')}
      />
    </>
  );
};

export default IndivUploadContentList;
