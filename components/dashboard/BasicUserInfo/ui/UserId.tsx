'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import { useGetUserBasicInfo } from '@/hooks/dashboard';
import { Loader01Icon } from '@/public/icons';

import IdInputForm from './IdInputForm';

interface UserIdCheckProps {
  isDuplicate: boolean | null;
  setIsDuplicate: Dispatch<SetStateAction<boolean | null>>;
}

const UserId = (props: UserIdCheckProps) => {
  const { isDuplicate, setIsDuplicate } = props; //구조 분해 할당
  const { team } = useParams();

  const [userId, setUserId] = useState('');
  const [isUserIdFocus, setIsUserIdFocus] = useState(false);
  const basicUserData = useGetUserBasicInfo(team);
  if (!basicUserData) return;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setUserId(value);
  };
  return (
    <UserIdContainer>
      <UserIdTitle>ID</UserIdTitle>
      <InputWidthContainer>
        <IdInputForm isFocus={isUserIdFocus} isDuplicate={isDuplicate}>
          <div>@/{team}/author/</div>
          <TextInput
            onFocus={() => setIsUserIdFocus(true)}
            onBlur={() => setIsUserIdFocus(false)}
            value={userId}
            onChange={handleOnChange}
            placeholder={basicUserData.data.registerId}
          />

          {isDuplicate === null && userId !== '' && <Loader01Icon />}
        </IdInputForm>
      </InputWidthContainer>
      {isDuplicate && <Message>이미 사용 중인 ID입니다. 다른 ID를 입력해주세요.</Message>}
    </UserIdContainer>
  );
};

export default UserId;

const Message = styled.div`
  ${({ theme }) => theme.fonts.Caption};
  margin-top: 0.6rem;

  color: ${({ theme }) => theme.colors.red};
`;

const InputWidthContainer = styled.div`
  width: 64.5rem;
`;

const UserIdContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.2rem;
`;

const UserIdTitle = styled.span`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin: 1rem 15rem 0.8rem 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_950};
`;

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
    border: 0px solid ${({ theme }) => theme.colors.grey_700};
  }
`;
