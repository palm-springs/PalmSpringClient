'use client';

import React from 'react';
import styled from 'styled-components';

import InvitedMember from './InvitedMember';
import MemberManager from './ManagerMember';
import PendingMember from './PendingMember';
interface MemberInfoProps {
  name: string;
  status: string;
  position: string;
  email: string;
}

const MemberInfo = (props: MemberInfoProps) => {
  const { name, status, position, email } = props;

  return (
    <MemberInfoContainer>
      <MemberName>{name}</MemberName>
      <MemberManager />
      <PendingMember />
      <InvitedMember />

      {/* switch ({status}) {
        case 'manager':
          <MemberManager />
          break;
          case 'pending':
            <PendingMember />
            break;
            case 'invited':
              <InvitedMember />
              break;
        default: <></>
          break;
      } */}
      <MemberDetail className="position">{position}</MemberDetail>
      <MemberDetail>{email}</MemberDetail>
    </MemberInfoContainer>
  );
};

export default MemberInfo;

const MemberInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MemberName = styled.div`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin-right: 0.8rem;

  color: ${({ theme }) => theme.colors.grey_900};
`;

const MemberDetail = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
  &.position {
    margin-right: 3rem;
    width: 8.4rem;
  }
`;
