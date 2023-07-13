'use client';
import styled from 'styled-components';

import AddMemberForm from '@/components/common/ui/AddMemberForm';

interface CreateMemberLandingProps {
  progressState: number;
}

const CreateMemberLanding = (props: CreateMemberLandingProps) => {
  const { progressState } = props;
  return (
    <CreateMemberContainer className={progressState === 3 ? 'fadein' : ''}>
      <AddMemberContainer>
        <Title>이메일로 팀원을 초대하세요</Title>
        <SubTitle>쉼표, 엔터, 스페이스바로 메일 주소를 구분할 수 있습니다</SubTitle>
        <AddMemberForm width={'40'} height={'17.2'} paddingUD={'2'} paddingLR={'2.4'} />
        <ButtonContainer>
          <SkipButton type="button">건너뛰기</SkipButton>
          <InviteButton type="button">초대하기</InviteButton>
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
  z-index: 1;

  width: 100%;
  height: 100vh;

  &.fadein {
    transform: translateY(-30rem);
    transition: 1s;
    opacity: 1;
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
  ${({ theme }) => theme.fonts.Heading1};
`;

const SubTitle = styled.h2`
  ${({ theme }) => theme.fonts.Body2_Regular};
  margin-bottom: 3.2rem;
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

const SkipButton = styled.button`
  ${({ theme }) => theme.fonts.Button_medium};

  border: 1px solid ${({ theme }) => theme.colors.grey_700};
  border-radius: 0.8rem;
  background: none;

  cursor: pointer;

  width: 9.6rem;
  height: 3.6rem;

  color: ${({ theme }) => theme.colors.grey_700};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 3.2rem;
`;
