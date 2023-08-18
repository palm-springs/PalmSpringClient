import React, { Dispatch, SetStateAction } from 'react';
import { useParams } from 'next/navigation';
import { SetterOrUpdater } from 'recoil';

import DashboardCreateModal from '@/components/common/ui/DashboardCreateModal';
import { useUpdateNavigation } from '@/hooks/dashboard';

import ModalPortalContainer from '../components/ui/ModalPortalContainer';

import NavUrlInput from './NavUrlInput';

interface UpdateNavigationModalProps {
  setModalState: SetterOrUpdater<modalStateProps>;
  id: number;
  updateNavigationName: string;
  setUpdateNavigationName: Dispatch<SetStateAction<string>>;
  updateNavigationSelector: string;
  setUpdateNavigationSelector: Dispatch<SetStateAction<string>>;
  updateNavigationUrl: string;
  setUpdateNavigationUrl: Dispatch<SetStateAction<string>>;
  updateNavigationIsPage: boolean;
}

const UpdateNavigationModal = (props: UpdateNavigationModalProps) => {
  const { team: blogUrl } = useParams();
  const {
    setModalState,
    id,
    updateNavigationName,
    setUpdateNavigationName,
    updateNavigationSelector,
    setUpdateNavigationSelector,
    updateNavigationUrl,
    setUpdateNavigationUrl,
    updateNavigationIsPage,
  } = props;

  const { mutate } = useUpdateNavigation(
    blogUrl,
    id,
    updateNavigationName,
    updateNavigationIsPage,
    updateNavigationUrl,
  );

  return (
    <DashboardCreateModal
      mainText="네비게이션 수정하기"
      buttonText="저장하기"
      buttonHandler={() => {
        mutate();
        setModalState('');
        setUpdateNavigationName('');
        setUpdateNavigationSelector('');
        setUpdateNavigationUrl('');
      }}
      onModalCloseBtnClick={() => {
        setModalState('');
        setUpdateNavigationName('');
        setUpdateNavigationSelector('');
        setUpdateNavigationUrl('');
      }}
      disabled={updateNavigationName === '' || updateNavigationUrl === ''}>
      <ModalPortalContainer
        title="네비게이션 이름"
        placeholder="네비게이션 이름을 입력하세요."
        state={updateNavigationName}
        setState={setUpdateNavigationName}
      />
      <NavUrlInput
        newNavigationSelector={updateNavigationSelector}
        setNewNavigationSelector={setUpdateNavigationSelector}
        newNavigationUrl={updateNavigationUrl}
        setNewNavigationUrl={setUpdateNavigationUrl}
        newNavigationName={updateNavigationName}
        setNewNavigationName={setUpdateNavigationName}
      />
    </DashboardCreateModal>
  );
};

export default UpdateNavigationModal;
