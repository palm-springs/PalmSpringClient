'use client';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { ProfilePhotoIcon } from '@/public/icons';
import { UserBasicInfo } from '@/types/user';

import { invitedUserDataState } from '../states/userData';

import TextInputForm from './TextInputForm';
const InviteAcceptForm = () => {
  // focus state
  const [focus, setFocus] = useState({ nickname: false, url: false, description: false, job: false });
  const [{ nickname, url, description, job }, setInvitedUserData] = useRecoilState(invitedUserDataState);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, id } = e.currentTarget;
    setInvitedUserData((prev: UserBasicInfo) => ({ ...prev, [id]: value }));
  };

  return (
    <InviteAcceptFormContainer>
      <TeamName>햇살티미단</TeamName>
      <Title>초대 수락하기</Title>
      <Label>
        <ProfilePhotoIcon />
        <input type="file" />
      </Label>

      <TextInputForm type={'name'} text={'이름'} isFocus={focus.nickname}>
        <TextInput
          id={'nickname'}
          placeholder="이름을 입력해주세요"
          onFocus={() => setFocus({ ...focus, nickname: true })}
          onBlur={() => setFocus({ ...focus, nickname: false })}
          value={nickname}
          onChange={handleOnChange}
        />
      </TextInputForm>

      <TextInputForm type={'id'} text={'ID'} isFocus={focus.url}>
        <div>/@timi/author/</div>
        <TextInput
          id={'url'}
          onFocus={() => setFocus({ ...focus, url: true })}
          onBlur={() => setFocus({ ...focus, url: false })}
          value={url as string}
          onChange={handleOnChange}
        />
      </TextInputForm>

      <TextInputForm type={'description'} text={'한 줄 소개'} isFocus={focus.description}>
        <TextAreaInput
          id={'description'}
          placeholder="한 줄 소개를 입력해주세요"
          onFocus={() => setFocus({ ...focus, description: true })}
          onBlur={() => setFocus({ ...focus, description: false })}
          value={description}
          onChange={handleOnChange}
        />
      </TextInputForm>

      <TextInputForm type={'position'} text={'직책'} isFocus={focus.job}>
        <TextInput
          id={'job'}
          placeholder="직책을 입력해주세요"
          onFocus={() => setFocus({ ...focus, job: true })}
          onBlur={() => setFocus({ ...focus, job: false })}
          value={job}
          onChange={handleOnChange}
        />
      </TextInputForm>

      <AcceptButton type="button" disabled={true}>
        수락하기
      </AcceptButton>
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
  &:focus {
    outline: none;
  }
`;

const AcceptButton = styled.button<{ disabled: boolean }>`
  ${({ theme }) => theme.fonts.Button_medium};
  margin: 3.2rem 0 11.4rem;

  border: none;
  border-radius: 0.8rem;

  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.background_green : theme.colors.green)};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  width: 100%;
  height: 3.6rem;

  color: ${({ theme }) => theme.colors.grey_0};
`;
