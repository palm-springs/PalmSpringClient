'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import { useDelegateUserRole, useDeleteMember } from '@/hooks/dashboard';
import usePerMissionPolicy from '@/hooks/usePermissionPolicy';
import { RoleType } from '@/utils/PermissionPolicyClass';

interface MemberPermissionButtonProps {
  condition: 'expelManager' | 'expelEditor' | 'appointManager' | 'appointOwner' | 'appointEditor';
  memberInfo: {
    memberId: string;
    memberEmail: string;
    memberRole: RoleType;
  };
}

const MemberPermissionButton = (props: MemberPermissionButtonProps) => {
  const {
    condition,
    memberInfo: { memberId, memberEmail, memberRole },
  } = props;

  const { team: blogUrl } = useParams();

  const { appointManager, appointOwner, appointEditor, expelEditor, expelManager } = usePerMissionPolicy();

  const matchCondition2Text = (): string => {
    switch (condition) {
      case 'appointEditor':
        return '편집자로 임명하기';
      case 'appointManager':
        return '관리자로 임명하기';
      case 'appointOwner':
        return '소유권 이전하기';
      case 'expelEditor':
        return '편집자 추방하기';
      case 'expelManager':
        return '관리자 추방하기';
      default:
        return '';
    }
  };

  const matchCondition2Role = (): RoleType => {
    switch (condition) {
      case 'appointEditor':
        return 'EDITOR';
      case 'appointManager':
        return 'MANAGER';
      case 'appointOwner':
        return 'OWNER';
      case 'expelEditor':
        return 'EDITOR';
      case 'expelManager':
        return 'MANAGER';
      default:
        return 'EDITOR';
    }
  };

  const checkCondition = (): boolean => {
    switch (condition) {
      case 'appointEditor':
        return memberRole !== 'EDITOR' && appointEditor;
      case 'appointManager':
        return memberRole !== 'MANAGER' && appointManager;
      case 'appointOwner':
        return memberRole === 'MANAGER' && appointOwner;
      case 'expelEditor':
        return memberRole === 'EDITOR' && expelEditor;
      case 'expelManager':
        return memberRole === 'MANAGER' && expelManager;
      default:
        return false;
    }
  };

  const { mutate: delegateUserRole } = useDelegateUserRole(blogUrl, memberEmail, matchCondition2Role());

  const { mutate: deleteMember } = useDeleteMember(blogUrl, memberId, memberEmail);

  if (!checkCondition()) return <></>;
  return (
    <ModalText
      type="button"
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      onClick={() => {
        if (condition === 'expelEditor' || condition === 'expelManager') {
          deleteMember();
        } else {
          delegateUserRole();
        }
      }}>
      {matchCondition2Text()}
    </ModalText>
  );
};

export default MemberPermissionButton;

const ModalText = styled.button`
  ${({ theme }) => theme.fonts.Body3_Regular};

  border-radius: 0.8rem;
  padding: 0 1rem;
  height: 4.2rem;

  color: ${({ theme }) => theme.colors.red};

  &:hover {
    background: ${({ theme }) => theme.colors.grey_100};
  }
`;
