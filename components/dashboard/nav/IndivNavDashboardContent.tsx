import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

import ModalPortal from '@/components/common/ModalPortal';
import { useDeleteNavigation } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import { dashBoardModalState } from '../state/modalState';

import UpdateNavigationModal from './UpdateNavigationModal';

interface IndivNavDashboardContentProps {
  currentModalId: number | null;
  setCurrentModalId: Dispatch<SetStateAction<number | null>>;
  id: number;
  content: string;
  url: string;
  blogUrl: string;
  isPage: boolean;
}

const IndivNavDashboardContent = (props: IndivNavDashboardContentProps) => {
  const { currentModalId, setCurrentModalId, id, content, url, blogUrl, isPage } = props;

  const router = useRouter();

  const { mutate: deleteNav } = useDeleteNavigation(blogUrl, id);

  const [dashboardModalState, setDashboardModalState] = useRecoilState(dashBoardModalState);

  const [updateNavigationName, setUpdateNavigationName] = useState<string>(content);

  const [updateNavigationSelector, setUpdateNavigationSelector] = useState<string>(isPage ? content : '직접 입력');

  const [updateNavigationUrl, setUpdateNavigationUrl] = useState<string>(url);

  return (
    <>
      <DashBoardContent
        key={id}
        id={String(id)}
        content={content}
        url={url}
        onTitleClick={() => {
          if (isPage) {
            window.location.href = `https://${blogUrl}.palms.blog/${blogUrl}/content/page/${url}/${id}`;
            return;
          }
          if (typeof window !== 'undefined') {
            window.location.href = `https://${url}`;
          }
        }}
        onMutateClick={() => {
          setDashboardModalState('updateNavigation');
          setCurrentModalId(id);
          setUpdateNavigationName(content);
          setUpdateNavigationSelector(isPage ? content : '직접 입력');
          setUpdateNavigationUrl(url);
        }}
        onDeleteClick={() => {
          deleteNav();
        }}
      />
      {dashboardModalState === 'updateNavigation' && currentModalId === id && (
        <ModalPortal>
          <UpdateNavigationModal
            id={id}
            setModalState={setDashboardModalState}
            setUpdateNavigationName={setUpdateNavigationName}
            updateNavigationName={updateNavigationName}
            updateNavigationSelector={updateNavigationSelector}
            updateNavigationUrl={updateNavigationUrl}
            setUpdateNavigationUrl={setUpdateNavigationUrl}
            setUpdateNavigationSelector={setUpdateNavigationSelector}
            updateNavigationIsPage={updateNavigationSelector === '직접 입력' ? false : true}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default IndivNavDashboardContent;
