'use client';

import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import ModalPortal from '@/components/common/ModalPortal';
import AddMemberForm from '@/components/common/ui/AddMemberForm';
import DashboardCreateModal from '@/components/common/ui/DashboardCreateModal';

import { dashBoardModalState } from '../../state/modalState';

import MemberList from './MemberList';
import MemberListHeader from './MemberListHeader';

const MemberTemplate = () => {
  const [modalState, setModalState] = useRecoilState(dashBoardModalState);

  const [emailBox, setEmailBox] = useState<string[]>([]);

  return (
    <MemberTemplateContainer>
      <MemberListHeader />
      <MemberList />
      {modalState === 'createMember' && (
        <ModalPortal>
          <DashboardCreateModal
            mainText="팀원 초대하기"
            buttonText="초대하기"
            buttonHandler={() => {
              setModalState('');
            }}
            onModalCloseBtnClick={() => setModalState('')}
            disabled={emailBox.length === 0}>
            <AddMemberForm
              emailBox={emailBox}
              setEmailBox={setEmailBox}
              width={'40'}
              height={'9.8'}
              paddingLR="1.2"
              paddingUD="1.2"
            />
          </DashboardCreateModal>
        </ModalPortal>
      )}
    </MemberTemplateContainer>
  );
};

export default MemberTemplate;

const MemberTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;

  margin-top: 1.2rem;
  margin-left: 4rem;

  width: 109rem;
`;
