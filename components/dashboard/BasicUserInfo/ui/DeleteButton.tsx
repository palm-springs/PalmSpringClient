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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const { withdrawPalmSpring, resignCurrentTeam } = usePerMissionPolicy();

  // 팜스프링 탈퇴 함수
  const handleWithdrawPlatform = async () => {
    await updateWithdrawPlatform();
    router.push('/auth');
  };

  // 팀 나가기 함수
  const handleWithdrawTeam = async () => {
    const {
      data: { joinBlogList },
    } = await updateWithdrawTeam(team);

    if (joinBlogList.length === 0) {
      router.push('/no-team/dashboard/upload');
    } else {
      router.push(`/${joinBlogList[0].blogUrl}/dashboard/upload`);
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
      {withdrawPalmSpring && (
        <LeavingPalms type="button" onClick={() => handleModalType('platform')}>
          팜스프링 탈퇴하기
        </LeavingPalms>
      )}
      {resignCurrentTeam && (
        <LeavingBlog type="button" onClick={() => handleModalType('team')}>
          블로그에서 나가기
        </LeavingBlog>
      )}
    </DeleteButtonContainer>
  );
};

export default DeleteButton;

const DeleteButtonContainer = styled.div`
  display: flex;
  margin: auto 0 6.3rem;
`;

const LeavingPalms = styled.button`
  text-decoration-line: underline;
  letter-spacing: -0.0048rem;
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;

const LeavingBlog = styled.button`
  margin-left: 3.3rem;
  text-decoration-line: underline;
  letter-spacing: -0.0048rem;
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;
