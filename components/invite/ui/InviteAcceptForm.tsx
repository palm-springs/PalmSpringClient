'use client';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { DeleteImageIcon, ProfilePhotoIcon, UploadProfileImageIcon } from '@/public/icons';

import TextInputForm from './TextInputForm';
const InviteAcceptForm = () => {
  const [nameValue, setNameValue] = useState('');
  const [idValue, setIdValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [positionValue, setPositionValue] = useState('');

  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isIdFocus, setIsIdFocus] = useState(false);
  const [isDescriptionFocus, setIsDescriptionFocus] = useState(false);
  const [isPositionFocus, setIsPositionFocus] = useState(false);

  const [imgSrc, setImgSrc] = useState('');

  const handleOnFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    const reader = new FileReader();
    if (files) {
      reader.readAsDataURL(files[0] as Blob);
      reader.onloadend = () => {
        setImgSrc(reader.result as string);
      };
    }
  };

  const handleOnNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setNameValue(value);
  };
  const handleOnIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setIdValue(value);
  };
  const handleOnDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setDescriptionValue(value);
  };
  const handleOnPositionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPositionValue(value);
  };

  return (
    <InviteAcceptFormContainer>
      <TeamName>햇살티미단 기술블로그</TeamName>
      <Title>초대 수락하기</Title>

      {imgSrc ? (
        <ImageContainer>
          <img src={imgSrc} alt={'프로필 사진'} />
          <button type="button" onClick={() => setImgSrc('')}>
            <DeleteImageIcon />
          </button>
        </ImageContainer>
      ) : (
        <Label>
          <ProfilePhotoIcon />
          <UploadProfileImageIcon />
          <input type="file" onChange={handleOnFileChange} />
        </Label>
      )}

      <TextInputForm type={'name'} text={'이름'} isFocus={isNameFocus}>
        <TextInput
          placeholder="이름을 입력해주세요"
          value={nameValue}
          onChange={handleOnNameChange}
          onFocus={() => setIsNameFocus(true)}
          onBlur={() => setIsNameFocus(false)}
        />
      </TextInputForm>

      <TextInputForm type={'id'} text={'ID'} isFocus={isIdFocus}>
        <div>/@timi/author/</div>
        <TextInput
          value={idValue}
          onChange={handleOnIdChange}
          onFocus={() => setIsIdFocus(true)}
          onBlur={() => setIsIdFocus(false)}
        />
      </TextInputForm>

      <TextInputForm type={'description'} text={'한 줄 소개'} isFocus={isDescriptionFocus}>
        <TextAreaInput
          placeholder="한 줄 소개를 입력해주세요"
          value={descriptionValue}
          onChange={handleOnDescriptionChange}
          onFocus={() => setIsDescriptionFocus(true)}
          onBlur={() => setIsDescriptionFocus(false)}
        />
      </TextInputForm>

      <TextInputForm type={'position'} text={'직책'} isFocus={isPositionFocus}>
        <TextInput
          placeholder="직책을 입력해주세요"
          value={positionValue}
          onChange={handleOnPositionChange}
          onFocus={() => setIsPositionFocus(true)}
          onBlur={() => setIsPositionFocus(false)}
        />
      </TextInputForm>

      <AcceptButton type="button" disabled={nameValue === '' || idValue === ''}>
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

const ImageContainer = styled.div`
  position: relative;

  margin-top: 3.2rem;
  width: 14.2rem;
  height: 14.2rem;

  & > img {
    border-radius: 14.2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > button {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const Label = styled.label`
  position: relative;
  margin-top: 3.2rem;

  cursor: pointer;
  width: 14.2rem;
  height: 14.2rem;

  & > :nth-child(2) {
    position: absolute;
    right: 0;
    bottom: 0;
  }

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

  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.background_green : theme.colors.green)};
  width: 100%;
  height: 3.6rem;

  color: ${({ theme }) => theme.colors.grey_0};
`;
