'use client';

import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import ModalPortal from '@/components/common/ModalPortal';
import DashboardCreateModal from '@/components/common/ui/DashboardCreateModal';

import DashBoardTemplateContainer from '../components/ui/DashBoardTemplateContainer';
import Line from '../components/ui/Line';
import ModalPortalContainer from '../components/ui/ModalPortalContainer';
import { dashBoardModalState } from '../state/modalState';

import NavContentList from './NavContentList';
import NavUrlInput from './NavUrlInput';

const NavTemplate = () => {
  const [modalState, setModalState] = useRecoilState(dashBoardModalState);

  const [newNavigationName, setNewNavigationName] = useState<string>('');

  const [newNavigationUrl, setNewNavigationUrl] = useState<string>('');

  return (
    <>
      <DashBoardTemplateContainer>
        <Line />
        <NavContentList />
      </DashBoardTemplateContainer>
      {modalState === 'createNavigation' && (
        <ModalPortal>
          <DashboardCreateModal
            mainText="새 네비게이션 만들기"
            buttonText="저장하기"
            buttonHandler={() => {
              console.log(newNavigationName, newNavigationUrl);
              setModalState('');
            }}
            onModalCloseBtnClick={() => setModalState('')}
            disabled={newNavigationName === '' && newNavigationUrl === ''}>
            <ModalPortalContainer
              title="네비게이션 이름"
              placeholder="네비게이션 이름을 입력하세요."
              state={newNavigationName}
              setState={setNewNavigationName}
            />
            <NavUrlInput newNavigationUrl={newNavigationUrl} setNewNavigationUrl={setNewNavigationUrl} />
          </DashboardCreateModal>
        </ModalPortal>
      )}
    </>
  );
};

export default NavTemplate;
