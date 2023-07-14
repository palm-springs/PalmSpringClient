'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import ModalPortal from '@/components/common/ModalPortal';
import { CharmMenuMeatballIcon, IcClose24Icon, IcUserIcon } from '@/public/icons';
import { MemberExampleImg } from '@/public/images';
import { MemberProps } from '@/types/member';

import PopOver from '../PopOver';

import CancelInviteModal from './CancelInviteModal';
import Manager from './Manager';
import Pending from './Pending';

const Member = (props: MemberProps) => {
  const { profilePicUrl, name, status, position, email } = props;

  const [showPopOver, setShowPopOver] = useState(false);
  const [showCancelInviteModal, setShowCancelInviteModal] = useState(false);

  const modalCloseHandler = () => {
    setShowCancelInviteModal(false);
  };

  return (
    <MemberContainer>
      <MemberInnerContent>
        {status === '수락대기중' ? (
          <>
            <MemberInfoBox>
              <NameBox>
                <IcUserIcon />
                <Email>{email} </Email>
                <Pending />
              </NameBox>
            </MemberInfoBox>
            <IcClose24Icon onClick={() => setShowCancelInviteModal(!showCancelInviteModal)} />
            {showCancelInviteModal && (
              <ModalPortal>
                <CancelInviteModal
                  text={'초대를 취소하시겠어요?'}
                  subText={`${email}`}
                  leftButtonText={'유지하기'}
                  rightButtonText={'초대 취소'}
                  leftHandler={modalCloseHandler}
                />
              </ModalPortal>
            )}
          </>
        ) : (
          <>
            <MemberInfoBox>
              <NameBox className="manager">
                {profilePicUrl ? (
                  // <Image src={profilePicUrl} alt="member profile photo" width={36} height={36} />
                  //후에 멤버 프로필 이미지의 url이 생기면 사용할 예정
                  <div>
                    <Image src={MemberExampleImg} alt="member profile pic example" width={36} height={36} />
                    이건 나중에 위에 주석을 사용하면 지울 텍스트입니다!
                  </div>
                ) : (
                  <Image src={MemberExampleImg} alt="member profile photo" width={36} height={36} />
                )}
                <Name> {name} </Name>
                {status === '관리자' && <Manager />}
              </NameBox>
              <Position> {position} </Position>
              <Email> {email} </Email>
            </MemberInfoBox>
            <MenuBtn onClick={() => setShowPopOver(!showPopOver)} />
            {showPopOver && <PopOver name={name} />}
          </>
        )}
      </MemberInnerContent>
    </MemberContainer>
  );
};

export default Member;

const MemberInfoBox = styled.div`
  display: flex;
  align-items: center;
`;

const MemberContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_400};

  width: 100%;
  height: 5.2rem;
`;

const MemberInnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 109rem;
`;

const NameBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  margin-right: 2rem;
  &.manager {
    width: 19rem;
  }
`;

const Name = styled.div`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};
`;

const Position = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  margin-right: 2rem;
  width: 8.4rem;
  height: 1.7rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;

  color: ${({ theme }) => theme.colors.grey_700};
`;

const Email = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;

const MenuBtn = styled(CharmMenuMeatballIcon)`
  width: 2.4rem;
  height: 2.2286rem;
`;
