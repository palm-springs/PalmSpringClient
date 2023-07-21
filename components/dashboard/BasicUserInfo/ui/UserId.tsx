'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import TextInputForm from '@/components/invite/ui/TextInputForm';
import { useGetUserBasicInfo } from '@/hooks/dashboard';
import { Loader01Icon } from '@/public/icons';

import IdInputForm from './IdInputForm';

const UserId = () => {
  const [url, setUrl] = useState('');
  const [isAddressDuplicate, setIsAddressDuplicate] = useState<boolean | null>(null);
  const [isAddressFocus, setIsAddressFocus] = useState(false);
  const { team } = useParams();
  const basicUserData = useGetUserBasicInfo(team);
  if (!basicUserData) return;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setUrl(value);

    // url 중복 쳌 :  CheckDuplication(value, setIsAddressDuplicate);
  };
  return (
    <UserIdContainer>
      <UserIdTitle>ID</UserIdTitle>
      <InputWidthContainer>
        <IdInputForm
          isFocus={isAddressFocus}
          isAddressDuplicate={isAddressDuplicate === null ? undefined : isAddressDuplicate}>
          <div>@/sopt/author/{basicUserData.data.registerId}</div>
          <TextInput
            onFocus={() => setIsAddressFocus(true)}
            onBlur={() => setIsAddressFocus(false)}
            value={url}
            onChange={handleOnChange}></TextInput>

          {isAddressDuplicate === null && url !== '' && <Loader01Icon />}
        </IdInputForm>
      </InputWidthContainer>
      {/* 중복제거 주석 */}
      {/* <TextInputForm type={''} children={undefined} isFocus={false} /> */}
      {/* <UrlCustomTextarea defaultValue="/@sopt/content/"></UrlCustomTextarea> */}
    </UserIdContainer>
  );
};

export default UserId;

const InputWidthContainer = styled.div`
  width: 64.5rem;
`;

const UserIdContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.2rem;
`;

const UserIdTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin: 1rem 15rem 0.8rem 0;
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
    border: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;
