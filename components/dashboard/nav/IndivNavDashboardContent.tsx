import { useState } from 'react';
import { useRecoilState } from 'recoil';

import ModalPortal from '@/components/common/ModalPortal';
import { useDeleteNavigation } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import { dashBoardModalState } from '../state/modalState';

import UpdateNavigationModal from './UpdateNavigationModal';

interface IndivNavDashboardContentProps {
  id: number;
  content: string;
  url: string;
  blogUrl: string;
  isPage: boolean;
}

const IndivNavDashboardContent = (props: IndivNavDashboardContentProps) => {
  const { id, content, url, blogUrl, isPage } = props;

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
          window.location.href = url;
        }}
        onMutateClick={() => {
          setDashboardModalState('updateNavigation');
        }}
        onDeleteClick={() => {
          deleteNav();
        }}
      />
      {dashboardModalState === 'updateNavigation' && (
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
