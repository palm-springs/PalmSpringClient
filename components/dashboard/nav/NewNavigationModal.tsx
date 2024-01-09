import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { SetterOrUpdater } from 'recoil';

import DashboardCreateModal from '@/components/common/ui/DashboardCreateModal';
import { usePostNavigation } from '@/hooks/dashboard';

import ModalPortalContainer from '../components/ui/ModalPortalContainer';

import NavUrlInput from './NavUrlInput';

interface NewNavigationModalProps {
  setModalState: SetterOrUpdater<modalStateProps>;
  newNavigationName: string;
  setNewNavigationName: Dispatch<SetStateAction<string>>;
  newNavigationSelector: string;
  setNewNavigationSelector: Dispatch<SetStateAction<string>>;
  newNavigationUrl: string;
  setNewNavigationUrl: Dispatch<SetStateAction<string>>;
}

const NewNavigationModal = (props: NewNavigationModalProps) => {
  const { team: blogUrl } = useParams();
  const {
    setModalState,
    newNavigationName,
    setNewNavigationName,
    newNavigationSelector,
    newNavigationUrl,
    setNewNavigationSelector,
    setNewNavigationUrl,
  } = props;

  const { mutate } = usePostNavigation(
    blogUrl,
    newNavigationName,
    newNavigationSelector !== '직접 입력',
    // false,
    newNavigationUrl,
  );

  return (
    <DashboardCreateModal
      mainText="새 네비게이션 만들기"
      buttonText="저장하기"
      buttonHandler={() => {
        mutate();
        setModalState('');
        setNewNavigationName('');
        setNewNavigationSelector('');
        setNewNavigationUrl('');
      }}
      onModalCloseBtnClick={() => {
        setModalState('');
        setNewNavigationName('');
        setNewNavigationSelector('');
        setNewNavigationUrl('');
      }}
      disabled={newNavigationName === '' && newNavigationUrl === ''}>
      <ModalPortalContainer
        title="네비게이션 이름"
        placeholder="네비게이션 이름을 입력하세요."
        state={newNavigationName}
        setState={setNewNavigationName}
      />
      <NavUrlInput
        newNavigationSelector={newNavigationSelector}
        setNewNavigationSelector={setNewNavigationSelector}
        newNavigationUrl={newNavigationUrl}
        setNewNavigationUrl={setNewNavigationUrl}
        newNavigationName={newNavigationName}
        setNewNavigationName={setNewNavigationName}
      />
    </DashboardCreateModal>
  );
};

export default NewNavigationModal;
