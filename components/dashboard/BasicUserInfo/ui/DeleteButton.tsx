import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';

import { updateWithdrawPlatform, updateWithdrawTeam } from '@/api/user';
import ModalPortal from '@/components/common/ModalPortal';
import DashboardDeleteModal from '@/components/common/ui/DashboardDeleteModal';
import usePerMissionPolicy from '@/hooks/usePermissionPolicy';

const DeleteButton = () => {
  const { team } = useParams();
  const router = useRouter();

  const [hoverTarget, setHoverTarget] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const { withdrawPalmSpring, resignCurrentTeam } = usePerMissionPolicy();

  // 팜스프링 탈퇴 함수
  const handleWithdrawPlatform = async () => {
    await updateWithdrawPlatform();
    router.push('/login');
  };

  // 팀 나가기 함수
  const handleWithdrawTeam = async () => {
    const {
      data: { joinBlogList },
    } = await updateWithdrawTeam(team);

    if (joinBlogList.length === 0) {
      router.push('/no-team/dashboard/statistics');
    } else {
      router.push(`/${joinBlogList[0].blogUrl}/dashboard/statistics`);
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleModalType = (type: string) => {
    setIsModalOpen((prev) => !prev);
    setModalType(type);
  };

  return (
    <DeleteButtonContainer>
      {isModalOpen && (
        <ModalPortal>
          <DashboardDeleteModal
            text={modalType === 'platform' ? '정말 탈퇴하시겠어요?' : '팀에서 나가시겠어요?'}
            subText={
              modalType === 'platform' ? '탈퇴할 시, 돌이킬 수 없습니다.' : '팀에서 나가도, 작성한 글은 유지됩니다.'
            }
            leftButtonText={'취소하기'}
            rightButtonText={modalType === 'platform' ? '탈퇴하기' : '나가기'}
            leftHandler={handleModalOpen}
            rightHandler={modalType === 'platform' ? handleWithdrawPlatform : handleWithdrawTeam}
          />
        </ModalPortal>
      )}
      {/* <LeavingContainer className="palms">
        {!withdrawPalmSpring && hoverTarget === 'LeavingPalms' && (
          <DisabledMessage className="palms">
            소유하고 있는 블로그가 있다면 팜스프링을 탈퇴할 수 없어요.
          </DisabledMessage>
        )}
        <LeavingPalms
          type="button"
          onClick={() => handleModalType('platform')}
          onMouseOver={() => {
            setHoverTarget('LeavingPalms');
          }}
          onMouseOut={() => {
            setHoverTarget('');
          }}
          disabled={!withdrawPalmSpring}>
          팜스프링 탈퇴하기
        </LeavingPalms>
      </LeavingContainer>
      <DivisionLine>|</DivisionLine> */}
      <LeavingContainer>
        {!resignCurrentTeam && hoverTarget === 'LeavingBlog' && (
          <DisabledMessage className="blog">내가 소유한 블로그에서는 나갈 수 없어요.</DisabledMessage>
        )}
        <LeavingBlog
          type="button"
          onClick={() => handleModalType('team')}
          onMouseOver={() => {
            setHoverTarget('LeavingBlog');
          }}
          onMouseOut={() => {
            setHoverTarget('');
          }}
          disabled={!resignCurrentTeam}>
          블로그에서 나가기
        </LeavingBlog>
      </LeavingContainer>
    </DeleteButtonContainer>
  );
};

export default DeleteButton;

const DeleteButtonContainer = styled.div`
  display: flex;
  margin: auto 0 6.3rem;
`;

const LeavingPalms = styled.button`
  ${({ theme }) => theme.fonts.Body2_Regular};
  margin-right: 0.8rem;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  letter-spacing: -0.0048rem;
  color: ${({ theme, disabled }) => (disabled ? theme.colors.grey_400 : theme.colors.grey_700)};

  &:not(:disabled):hover {
    text-decoration-line: underline;
  }
`;

const LeavingBlog = styled.button`
  ${({ theme }) => theme.fonts.Body2_Regular};
  margin: 0 0.8rem;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  letter-spacing: -0.0048rem;
  color: ${({ theme, disabled }) => (disabled ? theme.colors.grey_400 : theme.colors.grey_700)};

  &:not(:disabled):hover {
    text-decoration-line: underline;
  }
`;

const DivisionLine = styled.span`
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_300};
`;

const DisabledMessage = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  display: flex;

  position: absolute;
  top: -7rem;
  align-items: center;
  justify-content: center;
  z-index: 5;

  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.8rem;

  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.grey_0};

  padding: 1rem;

  text-align: center;
  line-height: 2rem;

  &.palms {
    left: -3.5rem;
    width: 20rem;
  }
  &.blog {
    left: -2rem;
    width: 17rem;
  }
`;

const LeavingContainer = styled.div`
  position: relative;

  margin-left: 5rem;
`;
