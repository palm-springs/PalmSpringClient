'use client';

import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import ModalPortal from '@/components/common/ModalPortal';

import DashBoardTemplateContainer from '../components/ui/DashBoardTemplateContainer';
import Line from '../components/ui/Line';
import { dashBoardModalState } from '../state/modalState';

import NavContentList from './NavContentList';
import NewNavigationModal from './newNavigationModal';

const NavTemplate = () => {
  const [modalState, setModalState] = useRecoilState(dashBoardModalState);

  const [newNavigationName, setNewNavigationName] = useState<string>('');

  const [newNavigationSelector, setNewNavigationSelector] = useState<string>('');

  const [newNavigationUrl, setNewNavigationUrl] = useState<string>('');

  return (
    <>
      <DashBoardTemplateContainer>
        <Line />
        <NavContentList />
      </DashBoardTemplateContainer>
      {modalState === 'createNavigation' && (
        <ModalPortal>
          <NewNavigationModal
            setModalState={setModalState}
            setNewNavigationName={setNewNavigationName}
            newNavigationName={newNavigationName}
            newNavigationSelector={newNavigationSelector}
            newNavigationUrl={newNavigationUrl}
            setNewNavigationUrl={setNewNavigationUrl}
            setNewNavigationSelector={setNewNavigationSelector}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default NavTemplate;
