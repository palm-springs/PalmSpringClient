'use client';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import styled from 'styled-components';

import { emailData } from '@/types/member';

import AddMemberInput from './AddMemberInput';

interface AddMemberFormProps {
  width: string;
  height: string;
  paddingUD: string;
  paddingLR: string;
  emailList: emailData[];
  setEmailList: Dispatch<SetStateAction<emailData[]>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
}

const AddMemberForm = (props: AddMemberFormProps) => {
  const { width, height, paddingUD, paddingLR, emailList, setEmailList, isError, setIsError } = props;

  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    emailInputRef.current && emailInputRef.current.focus();
  };

  const removeAllError = () => {
    const newEmailList = emailList.filter(({ verification }) => verification);
    setEmailList(newEmailList);
    setIsError(false);
  };

  return (
    <>
      <AddMemberFormContainer
        $width={width}
        $height={height}
        $paddingUD={paddingUD}
        $paddingLR={paddingLR}
        onClick={handleOnClick}
        $isError={isError}>
        <AddMemberInput
          emailInputRef={emailInputRef}
          setIsError={setIsError}
          emailList={emailList}
          setEmailList={setEmailList}
        />
      </AddMemberFormContainer>
      <ErrorContainer>
        {isError && (
          <>
            <ErrorMsg> 올바른 이메일 형식을 입력해주세요.</ErrorMsg>
            <RemoveErrorButton onClick={removeAllError}>오류 제거하기</RemoveErrorButton>
          </>
        )}
      </ErrorContainer>
    </>
  );
};

export default AddMemberForm;

const AddMemberFormContainer = styled.div<{
  $width: string;
  $height: string;
  $paddingUD: string;
  $paddingLR: string;
  $isError: boolean;
}>`
  margin-top: 0.8rem;
  border: 1px solid ${({ theme, $isError }) => ($isError ? theme.colors.red : theme.colors.grey_500)};
  border-radius: 0.8rem;

  padding: ${({ $paddingUD, $paddingLR }) => `${$paddingUD}rem ${$paddingLR}rem`};
  width: ${({ $width }) => `${$width}rem`};
  height: ${({ $height }) => `${$height}rem`};

  overflow-y: auto;

  &:hover {
    cursor: text;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  margin: 0.6rem 0 0.4rem;
  width: 100%;
  height: 2.4rem;
`;

const ErrorMsg = styled.span`
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.red};
`;

const RemoveErrorButton = styled.button`
  ${({ theme }) => theme.fonts.Caption};
  cursor: pointer;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.red};
`;
