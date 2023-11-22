'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import ModalPortal from '@/components/common/ModalPortal';
import { useDeleteMember } from '@/hooks/dashboard';
import usePerMissionPolicy from '@/hooks/usePermissionPolicy';
import userState from '@/recoil/atom/user';
import { RoleType } from '@/utils/PermissionPolicyClass';

import DeleteMemberModal from './ui/DeleteMemberModal';
import MemberPermissionButton from './MemberPermissionButton';

interface PopOverProp {
  nickname: string;
  memberId: string;
  memberEmail: string;
  memberRole: RoleType;
}

const PopOver = (prop: PopOverProp) => {
  const { nickname, memberId, memberEmail, memberRole } = prop;
  const { team: blogUrl } = useParams();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const { expelManager, expelEditor } = usePerMissionPolicy();
  const { mutate } = useDeleteMember(blogUrl, memberId, memberEmail);
  const userValue = useRecoilValue(userState);

  const isUserCanDeleteMember = (memberRole === 'EDITOR' && expelEditor) || (memberRole === 'MANAGER' && expelManager);

  if (userValue === null) {
    router.push('/auth');
    return <></>;
  }

  return (
    <>
      {showModal && (
        <ModalPortal>
          <DeleteMemberModal
            text={`${nickname}님을 팀에서`}
            lineBreaking={'제외하시겠어요?'}
            subText={'팀원을 제외할 시, 복구할 수 없습니다'}
            leftButtonText={'유지하기'}
            rightButtonText={'제외하기'}
            leftHandler={() => setShowModal(false)}
            rightHandler={() => mutate()}
          />
        </ModalPortal>
      )}
      <PopOverContainer>
        <LinkText
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          href={`https://${blogUrl}.palms.blog/author/${nickname}`}
          target="_blank">
          프로필 보기
        </LinkText>
        {memberEmail !== userValue.email && (
          <>
            {isUserCanDeleteMember && (
              <ModalText
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
                onClick={() => {
                  setShowModal(true);
                }}>
                팀에서 제외하기
              </ModalText>
            )}
            <MemberPermissionButton
              condition="appointOwner"
              memberInfo={{
                memberId,
                memberEmail,
                memberRole,
              }}
            />
          </>
        )}
      </PopOverContainer>
    </>
  );
};

export default PopOver;

const PopOverContainer = styled.div`
  display: flex;
  position: absolute;
  top: 4.2rem;
  right: 0;

  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  z-index: 5;

  border: 1px solid ${({ theme }) => theme.colors.grey_500};
  border-radius: 0.8rem;

  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.grey_0};
  padding: 2rem 2.4rem;
  width: fit-content;
`;

const LinkText = styled(Link)`
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_900};

  &.red {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const ModalText = styled.button`
  ${({ theme }) => theme.fonts.Body3_Regular};

  color: ${({ theme }) => theme.colors.red};
`;
