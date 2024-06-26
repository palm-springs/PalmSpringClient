'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import ModalPortal from '@/components/common/ModalPortal';
import { useDeleteInvite } from '@/hooks/auth';
import {
  ArrowDownSmallIcon,
  CharmMenuMeatballIcon,
  IcClose24Icon,
  IcUserIcon,
} from '@/public/icons';
import { RoleType } from '@/utils/PermissionPolicyClass';

import MemberPermissionPopOver from '../MemberPermissionPopOver';
import PopOver from '../PopOver';

import CancelInviteModal from './CancelInviteModal';
import Pending from './Pending';

interface MemberComponentProps {
  memberId: string;
  email: string;
  job: string;
  role: RoleType;
  nickname: string;
  thumbnail: string;
  showPopOver: string;
  setShowPopOver: Dispatch<SetStateAction<string>>;
  isUserCanEditIndivMemberPermission?: boolean;
  isPermissionModalOpen: string;
  setIsPermissionModalOpen: Dispatch<SetStateAction<string>>;
}

const Member = (props: MemberComponentProps) => {
  const {
    memberId,
    role,
    email,
    job,
    nickname,
    thumbnail,
    showPopOver,
    setShowPopOver,
    isUserCanEditIndivMemberPermission,
    isPermissionModalOpen,
    setIsPermissionModalOpen,
  } = props;

  const [showCancelInviteModal, setShowCancelInviteModal] = useState<boolean>(false);

  const memberRole = role === 'OWNER' ? '소유자' : role === 'MANAGER' ? '관리자' : '편집자';
  const { team } = useParams();
  const { mutate: cancelInvite } = useDeleteInvite(team, { email });

  const [showModal, setShowModal] = useState(false);

  const modalCloseHandler = () => {
    setShowCancelInviteModal(false);
  };
  const handleDeleteInvite = () => {
    cancelInvite();
    setShowCancelInviteModal(false);
  };

  if (!nickname)
    return (
      <>
        <MemberContainer>
          <NameBox>
            <IcUserIcon />
            <Email>{email} </Email>
            <Pending />
          </NameBox>
          <MenuBtnContainer>
            <IcClose24Icon onClick={() => setShowCancelInviteModal(!showCancelInviteModal)} />
          </MenuBtnContainer>
        </MemberContainer>
        {showCancelInviteModal && (
          <ModalPortal>
            <CancelInviteModal
              text={'초대를 취소하시겠어요?'}
              subText={`${email}`}
              leftButtonText={'유지하기'}
              rightButtonText={'초대 취소'}
              leftHandler={modalCloseHandler}
              rightHandler={handleDeleteInvite}
            />
          </ModalPortal>
        )}
      </>
    );

  return (
    <>
      <MemberContainer>
        <MemberInnerContent>
          <>
            <MemberInfoBox>
              <NameBox className="member">
                {thumbnail ? (
                  <MemberProfile src={thumbnail} alt="member profile pic" width={36} height={36} />
                ) : (
                  <IcUserIcon />
                )}
                <Name> {nickname} </Name>
              </NameBox>
              <Position> {job} </Position>
              <Email> {email} </Email>
              <button
                type="button"
                onBlur={() => setIsPermissionModalOpen('')}
                onClick={() => {
                  if (isPermissionModalOpen === email) {
                    setIsPermissionModalOpen('');
                  } else {
                    setIsPermissionModalOpen(email);
                  }
                }}>
                <Role>
                  {memberRole} {isUserCanEditIndivMemberPermission && <ArrowDownSmallIcon />}
                  {isPermissionModalOpen === email && isUserCanEditIndivMemberPermission && (
                    <MemberPermissionPopOver memberRole={role} memberEmail={email} />
                  )}
                </Role>
              </button>
            </MemberInfoBox>
            <MenuBtnContainer
              onBlur={() => {
                if (!showModal) setShowPopOver('');
              }}
              onClick={() => {
                if (showPopOver === email) {
                  setShowPopOver('');
                } else {
                  setShowPopOver(email);
                }
              }}>
              <CharmMenuMeatballIcon />
            </MenuBtnContainer>
            {showPopOver === email && (
              <PopOver
                memberRole={role}
                nickname={nickname}
                memberId={memberId}
                memberEmail={email}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            )}
          </>
        </MemberInnerContent>
      </MemberContainer>
    </>
  );
};

//밑의 코드는 수락대기중인 멤버가 생기면 다시 사용할 코드입니다.
// {role === '수락대기중' ? (
{
  /* <>
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
</>; */
}
// ) : (
//   <>
//     <MemberInfoBox>
//       <NameBox className="manager">
//         {thumbnail ? (
//           // <Image src={profilePicUrl} alt="member profile photo" width={36} height={36} />
//           //후에 멤버 프로필 이미지의 url이 생기면 사용할 예정
//           <>
//             <Image src={MemberExampleImg} alt="member profile pic example" width={36} height={36} />
//           </>
//         ) : (
//           <Image src={MemberExampleImg} alt="member profile photo" width={36} height={36} />
//         )}
//         <Name> {nickname} </Name>
//         {job === '관리자' && <Manager />}
//       </NameBox>
//       <Position> {role} </Position>
//       <Email> {email} </Email>
//     </MemberInfoBox>
//     <MenuBtn onClick={() => setShowPopOver(!showPopOver)} />
//     {showPopOver && <PopOver nickname={nickname} />}
//   </>
// )}

export default Member;

const MemberProfile = styled(Image)`
  border-radius: 50%;

  width: 3.6rem;
  height: 3.6rem;
`;

const MemberInfoBox = styled.div`
  display: flex;
  align-items: center;
  height: 5.2rem;
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

  width: 100%;
`;

const NameBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  margin-right: 2rem;

  &.member {
    width: 19rem;
  }
`;

const Name = styled.div`
  max-width: 19rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  ${({ theme }) => theme.fonts.Body3_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};
`;

const Position = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};

  margin-right: 2rem;
  width: 12rem;
  height: 1.7rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;

  color: ${({ theme }) => theme.colors.grey_700};
`;

const Email = styled.div`
  width: 24.4rem;
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;

const Role = styled.div`
  display: flex;
  position: relative;
  gap: 0.2rem;
  align-items: center;
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;

const MenuBtnContainer = styled.button`
  display: flex;
  position: absolute;
  right: 0;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-out;
  margin-right: 0.6rem;
  border: none;
  border-radius: 0.4rem;
  background: none;
  width: 2.4rem;
  height: 2.4rem;
  &:hover {
    background: ${({ theme }) => theme.colors.grey_300};
  }
`;
