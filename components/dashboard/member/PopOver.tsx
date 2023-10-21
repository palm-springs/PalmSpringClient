'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import ModalPortal from '@/components/common/ModalPortal';
import { useDeleteMember } from '@/hooks/dashboard';
import usePerMissionPolicy from '@/hooks/usePermissionPolicy';
import userRoleSelector from '@/recoil/selector/userRoleSelector';

import DeleteMemberModal from './ui/DeleteMemberModal';

interface PopOverProp {
  nickname: string;
  memberId: string;
  memberEmail: string;
  memberRole: string;
}

const PopOver = (prop: PopOverProp) => {
  const { nickname, memberId, memberEmail, memberRole } = prop;
  const { team: blogUrl } = useParams();
  const [showModal, setShowModal] = useState(false);

  const { expelEditor, expelManager, appointManager } = usePerMissionPolicy();
  const { mutate } = useDeleteMember(blogUrl, memberId, memberEmail);

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
        <LinkText href={`https://${blogUrl}.palms.blog/author/${nickname}`}>팀원이 쓴 글로 이동하기</LinkText>
        {memberRole === 'EDITOR' && expelEditor ? (
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
        ) : memberRole === 'MANAGER' && expelManager ? (
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
        ) : (
          <></>
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
