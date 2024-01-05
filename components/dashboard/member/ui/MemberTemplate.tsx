'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import ModalPortal from '@/components/common/ModalPortal';
import AddMemberForm from '@/components/common/ui/AddMemberForm';
import DashboardCreateModal from '@/components/common/ui/DashboardCreateModal';
import { usePostMemberInvite } from '@/hooks/auth';
import { useGetMemberInfo } from '@/hooks/dashboard';
import { emailData } from '@/types/member';

import Line from '../../components/ui/Line';
import { dashBoardModalState } from '../../state/modalState';

import MemberList from './MemberList';
import MemberListHeader from './MemberListHeader';

const MemberTemplate = () => {
  const [modalState, setModalState] = useRecoilState(dashBoardModalState);

  const [emailDataList, setEmailDataList] = useState<emailData[]>([]);
  const [isError, setIsError] = useState(false);

  const { team } = useParams();

  const res = useGetMemberInfo(team);

  const emailList = emailDataList.map(({ emailValue }) => {
    return emailValue;
  });

  const resetEmailDataList = () => {
    setEmailDataList([]);
  };

  const { mutate: inviteMember } = usePostMemberInvite(team, { inviteEmails: emailList }, resetEmailDataList);

  const handleOnClickInvite = () => {
    inviteMember();
    setModalState('');
  };

  useEffect(() => {
    res && console.log(res.data);
  }, [res]);

  const subText = (
    <span>
      쉼표, 엔터, 스페이스바로 메일 주소를 구분할 수 있습니다. <br /> 현재 Gmail 계정만 초대 가능합니다.
    </span>
  );
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
              subText={subText}
              buttonHandler={handleOnClickInvite}
              onModalCloseBtnClick={() => setModalState('')}
              disabled={emailDataList.length === 0 || isError}>
              <AddMemberForm
                width={'40'}
                height={'9.8'}
                paddingLR="1.2"
                paddingUD="1.2"
                emailList={emailDataList}
                setEmailList={setEmailDataList}
                isError={isError}
                setIsError={setIsError}
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
