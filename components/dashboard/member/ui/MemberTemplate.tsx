'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import ModalPortal from '@/components/common/ModalPortal';
import AddMemberForm from '@/components/common/ui/AddMemberForm';
import DashboardCreateModal from '@/components/common/ui/DashboardCreateModal';
import { useGetMemberInfo } from '@/hooks/dashboard';
import { emailData } from '@/types/member';

import Line from '../../components/ui/Line';
import { dashBoardModalState } from '../../state/modalState';

import MemberList from './MemberList';
import MemberListHeader from './MemberListHeader';

const MemberTemplate = () => {
  const [modalState, setModalState] = useRecoilState(dashBoardModalState);

  const [emailList, setEmailList] = useState<emailData[]>([]);

  const { team } = useParams();

  const res = useGetMemberInfo(team);

  useEffect(() => {
    res && console.log(res.data);
  }, [res]);

  return (
    <>
      <Line />
      <MemberTemplateContainer>
        <MemberListHeader />
        <MemberList />
        {modalState === 'createMember' && (
          <ModalPortal>
            <DashboardCreateModal
              mainText="팀원 초대하기"
              buttonText="초대하기"
              subText="쉼표, 엔터, 스페이스바로 메일 주소를 구분할 수 있습니다"
              buttonHandler={() => {
                setModalState('');
              }}
              onModalCloseBtnClick={() => setModalState('')}
              disabled={emailList.length === 0}>
              <AddMemberForm
                width={'40'}
                height={'9.8'}
                paddingLR="1.2"
                paddingUD="1.2"
                emailList={emailList}
                setEmailList={setEmailList}
              />
            </DashboardCreateModal>
          </ModalPortal>
        )}
      </MemberTemplateContainer>
    </>
  );
};

export default MemberTemplate;

const MemberTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  padding: 0 2.4rem 0 4rem;

  width: 100%;
`;
