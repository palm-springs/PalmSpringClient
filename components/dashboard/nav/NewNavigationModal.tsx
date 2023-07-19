import React, { Dispatch, SetStateAction } from 'react';
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
  const blogUrl = 'helloworld';
  const {
    setModalState,
    newNavigationName,
    setNewNavigationName,
    newNavigationSelector,
    newNavigationUrl,
    setNewNavigationSelector,
    setNewNavigationUrl,
  } = props;

  const isPage = newNavigationName === '직접 입력' ? false : true;

  const { mutate } = usePostNavigation(blogUrl, newNavigationName, isPage, newNavigationUrl);

  return (
    <DashboardCreateModal
      mainText="새 네비게이션 만들기"
      buttonText="저장하기"
      buttonHandler={() => {
        console.log(newNavigationName, newNavigationUrl);
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
      />
    </DashboardCreateModal>
  );
};

export default NewNavigationModal;
