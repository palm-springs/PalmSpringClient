import { Dispatch, SetStateAction } from 'react';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

import { DOMAIN_NAME } from '@/constants/palmspringInfo';
import { useDeletePage } from '@/hooks/dashboard';
import theme from '@/styles/theme';
import { createToast } from '@/utils/lib/toast';

import DashBoardContent from '../components/DashBoardContent';
import DashboardContentDeleteModal from '../components/DashboardContentDeleteModal';
import { dashBoardModalState } from '../state/modalState';

interface IndivPageContentProps {
  blogUrl: string;
  id: string;
  title: string;
  isDraft: boolean;
  isLinked: boolean;
  createdAt: string;
  pageUrl: string;
  deleteContentId: string;
  setDeleteContentId: Dispatch<SetStateAction<string>>;
}

const IndivPageContent = (props: IndivPageContentProps) => {
  const { blogUrl, id, title, isDraft, isLinked, createdAt, pageUrl, deleteContentId, setDeleteContentId } = props;

  const router = useRouter();

  const { mutate } = useDeletePage(blogUrl, Number(id));

  const [modalState, setModalState] = useRecoilState(dashBoardModalState);

  const hasConnectionErrorNotify = createToast({
    type: 'ERROR',
    message: '네비게이션 연결을 해제하고 다시 시도해주세요!',
    id: 'already has connection',
    background: theme.colors.background_red,
  });

  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerClassName=""
        containerStyle={{
          bottom: 50,
        }}
      />
      <DashBoardContent
        key={id}
        id={id}
        content={title}
        draft={isDraft}
        createdAt={createdAt}
        onTitleClick={() => {
          if (isDraft) {
            router.push(`/${blogUrl}/editor/page/${id}/draft`);
          } else {
            window.open(`https://${blogUrl}.${DOMAIN_NAME}/content/page/${pageUrl}/${id}`);
          }
        }}
        onMutateClick={() => {
          if (isDraft) {
            router.push(`/${blogUrl}/editor/page/${id}/draft`);
          } else {
            router.push(`/${blogUrl}/editor/page/${id}/edit`);
          }
        }}
        onDeleteClick={() => {
          setModalState('deletePage');
          setDeleteContentId(id);
        }}
      />
      {modalState === 'deletePage' && deleteContentId === id && (
        <DashboardContentDeleteModal
          text="페이지를 삭제하시겠어요?"
          subText="페이지를 삭제할 시, 복구할 수 없습니다."
          onDelete={() => {
            if (isLinked) {
              hasConnectionErrorNotify();
              setModalState('');
              return;
            }
            mutate();
            setModalState('');
            setDeleteContentId('');
          }}
        />
      )}
    </>
  );
};

export default IndivPageContent;
