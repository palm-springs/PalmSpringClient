import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';

import { updateWithdrawPlatform, updateWithdrawTeam } from '@/api/user';

const DeleteButton = () => {
  const { team } = useParams();
  const router = useRouter();

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
      router.push('/no-team/dashboard');
    } else {
      router.push(`/${joinBlogList[0].url}/dashboard/upload`);
    }
  };

  return (
    <DeleteButtonContainer>
      <LeavingPalms type="button" onClick={handleWithdrawPlatform}>
        팜스프링 탈퇴하기
      </LeavingPalms>
      <LeavingBlog type="button" onClick={handleWithdrawTeam}>
        블로그에서 나가기
      </LeavingBlog>
    </DeleteButtonContainer>
  );
};

export default DeleteButton;

const DeleteButtonContainer = styled.div`
  display: flex;
  margin-top: 19.9rem;
  padding-bottom: 6.3rem;
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
