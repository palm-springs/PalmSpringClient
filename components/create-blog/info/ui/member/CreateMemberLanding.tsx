'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import AddMemberForm from '@/components/common/ui/AddMemberForm';
import { ProgressStateProps } from '@/types/progress';

const CreateMemberLanding = (props: ProgressStateProps) => {
  const { progressState, setProgressState } = props;

  const [containerState, setContainerState] = useState('');

  useEffect(() => {
    if (progressState === -2) {
      setContainerState('fadeDownOut');
    } else if (progressState === 3) {
      setContainerState('fadeIn');
    }
  }, [progressState]);

  return (
    <CreateMemberContainer className={containerState}>
      <AddMemberContainer>
        <Title>
          팀원과 함께 시작하기<div>(선택)</div>
        </Title>
        <SubTitleContainer>
          <span>팀원의 이메일을 입력하세요 </span>
          <span>쉼표, 엔터, 스페이스바로 메일 주소를 구분할 수 있습니다</span>
        </SubTitleContainer>
        <AddMemberForm width={'40'} height={'17.2'} paddingUD={'2'} paddingLR={'2.4'} />
        <ButtonContainer>
          <PreviousButton type="button" onClick={() => setProgressState(-2)}>
            이전으로
          </PreviousButton>
          <InviteButton type="button">시작하기</InviteButton>
        </ButtonContainer>
      </AddMemberContainer>
    </CreateMemberContainer>
  );
};

export default CreateMemberLanding;

const CreateMemberContainer = styled.div`
  display: flex;
  position: fixed;
  top: 30rem;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  opacity: 0;
  z-index: 0;

  width: 100%;
  height: 100vh;

  &.fadeIn {
    transform: translateY(-30rem);

    transition: transform 1s, opacity 0.3s;
    opacity: 1;
    z-index: 100;
  }

  &.fadeDownOut {
    transform: translateY(30rem);

    transition: transform 1s, opacity 0.3s;
    opacity: 0;
    z-index: 0;
  }
`;

const AddMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

const Title = styled.h1`
  position: relative;
  ${({ theme }) => theme.fonts.Heading1};

  & > div {
    ${({ theme }) => theme.fonts.Body2_Regular};
    position: absolute;
    right: -4.3rem;
    bottom: 0.4rem;
    color: ${({ theme }) => theme.colors.grey_700};
  }
`;

const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.2rem;

  & > span {
    ${({ theme }) => theme.fonts.Body2_Regular};
    color: ${({ theme }) => theme.colors.grey_900};
  }
`;

const InviteButton = styled.button`
  ${({ theme }) => theme.fonts.Button_medium};
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.green};

  cursor: pointer;

  width: 9.6rem;
  height: 3.6rem;

  color: ${({ theme }) => theme.colors.grey_0};
`;

const PreviousButton = styled.button`
  ${({ theme }) => theme.fonts.Body1_Regular};
  margin-left: 0.3rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 3.2rem;
  width: 100%;
`;