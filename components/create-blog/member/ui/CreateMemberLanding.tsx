'use client';
import styled from 'styled-components';

const CreateMemberLanding = () => {
  return (
    <CreateMemberContainer>
      <Title>이메일로 팀원을 초대하세요</Title>
      <SubTitle>쉼표, 엔터, 스페이스바로 메일 주소를 구분할 수 있습니다</SubTitle>
      {/* <AddMemberForm /> */}
      <InviteButton type="button">초대하기</InviteButton>
      <SkipButton type="button">건너뛰기</SkipButton>
    </CreateMemberContainer>
  );
};

export default CreateMemberLanding;

const CreateMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
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

  margin-top: 3.2rem;

  border: none;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.green};

  cursor: pointer;

  width: 9.6rem;
  height: 3.6rem;

  color: ${({ theme }) => theme.colors.grey_0};
`;

const SkipButton = styled.button`
  ${({ theme }) => theme.fonts.Body3_Regular};
  margin-top: 0.8rem;

  border: none;
  background: none;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.grey_900};
`;
