'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { useDelegateUserRole } from '@/hooks/dashboard';
import usePerMissionPolicy from '@/hooks/usePermissionPolicy';
import { CheckIcon } from '@/public/icons';
import userState from '@/recoil/atom/user';
import { RoleType } from '@/utils/PermissionPolicyClass';

type ConditionType = 'expelManager' | 'expelEditor' | 'appointManager' | 'appointOwner' | 'appointEditor';

interface MemberPermissionPopOverProp {
  memberEmail: string;
  memberRole: RoleType;
}

const MemberPermissionPopOver = (prop: MemberPermissionPopOverProp) => {
  const { memberEmail, memberRole } = prop;
  const { team: blogUrl } = useParams();
  const router = useRouter();

  const { appointEditor, appointManager } = usePerMissionPolicy();
  const userValue = useRecoilValue(userState);

  const matchCondition2Role = (condition: ConditionType): RoleType => {
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

  const { mutate: appointManagerAction } = useDelegateUserRole(
    blogUrl,
    memberEmail,
    matchCondition2Role('appointManager'),
  );
  const { mutate: appointEditorAction } = useDelegateUserRole(
    blogUrl,
    memberEmail,
    matchCondition2Role('appointEditor'),
  );

  if (userValue === null) {
    router.push('/login');
    return <></>;
  }

  return (
    <PopOverContainer>
      <ModalText
        $isCurrentUserRole={memberRole === 'MANAGER'}
        type="button"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={() => {
          if (memberRole === 'EDITOR' && appointManager) {
            appointManagerAction();
          }
        }}>
        <span>관리자</span> {memberRole === 'MANAGER' && <CheckIcon />}
      </ModalText>
      <ModalText
        $isCurrentUserRole={memberRole === 'EDITOR'}
        type="button"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={() => {
          if (memberRole === 'MANAGER' && appointEditor) {
            appointEditorAction();
          }
        }}>
        <span>편집자</span> {memberRole === 'EDITOR' && <CheckIcon />}
      </ModalText>
    </PopOverContainer>
  );
};

export default MemberPermissionPopOver;

const PopOverContainer = styled.div`
  display: flex;
  position: absolute;
  top: 2.6rem;
  left: 0;

  flex-direction: column;
  z-index: 5;

  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.8rem;

  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.grey_0};
  padding: 0.8rem;
  width: 10.4rem;
`;

const ModalText = styled.button<{ $isCurrentUserRole: boolean }>`
  ${({ theme, $isCurrentUserRole }) => ($isCurrentUserRole ? theme.fonts.Body3_Semibold : theme.fonts.Body3_Regular)};

  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  padding: 12px;
  color: ${({ theme }) => theme.colors.grey_900};

  svg {
    margin-bottom: 0.4rem;
  }
`;
