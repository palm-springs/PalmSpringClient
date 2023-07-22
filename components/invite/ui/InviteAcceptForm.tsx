'use client';
import styled from 'styled-components';

import { ProfilePhotoIcon } from '@/public/icons';

import TextInputForm from './TextInputForm';
const InviteAcceptForm = () => {
  return (
    <InviteAcceptFormContainer>
      <TeamName>햇살티미단</TeamName>
      <Title>초대 수락하기</Title>
      <Label>
        <ProfilePhotoIcon />
        <input type="file" />
      </Label>

      <TextInputForm type={'name'} text={'이름'}>
        <TextInput placeholder="이름을 입력해주세요" />
      </TextInputForm>

      <TextInputForm type={'id'} text={'ID'}>
        <div>/@timi/author/</div>
        <TextInput />
      </TextInputForm>

      <TextInputForm type={'description'} text={'한 줄 소개'}>
        <TextAreaInput placeholder="한 줄 소개를 입력해주세요" />
      </TextInputForm>

      <TextInputForm type={'position'} text={'직책'}>
        <TextInput placeholder="직책을 입력해주세요" />
      </TextInputForm>

      <AcceptButton type="button">완료</AcceptButton>
    </InviteAcceptFormContainer>
  );
};

export default InviteAcceptForm;

const InviteAcceptFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  width: 40rem;
`;

const TeamName = styled.h1`
  ${({ theme }) => theme.fonts.Body1_Semibold};

  margin-top: 10.7rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.Heading1};
  color: ${({ theme }) => theme.colors.grey_900};
`;

const Label = styled.label`
  margin-top: 3.2rem;

  cursor: pointer;

  & > input {
    display: none;
  }
`;
// input (text)
const TextInput = styled.input`
  ${({ theme }) => theme.fonts.Body2_Regular};
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;

// input (textarea)
const TextAreaInput = styled.textarea`
  ${({ theme }) => theme.fonts.Body2_Regular};
  border: none;
  width: 100%;
  height: 100%;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }
`;

const AcceptButton = styled.button`
  ${({ theme }) => theme.fonts.Button_medium};
  margin: 3.2rem 0 11.4rem;

  border: none;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.green};
  width: 100%;
  height: 3.6rem;

  color: ${({ theme }) => theme.colors.grey_0};
`;
