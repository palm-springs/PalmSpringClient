'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

import TextInputForm from '@/components/create-blog/info/ui/TextInputForm';
import { Loader01Icon } from '@/public/icons';

import PublishInputForm from './PublishInputForm';

const UrlCustom = () => {
  const [url, setUrl] = useState('');
  const [isAddressFocus, setIsAddressFocus] = useState(false);
  const [isAddressDuplicate, setIsAddressDuplicate] = useState<boolean | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setUrl(value);

    // url 중복 쳌 :  CheckDuplication(value, setIsAddressDuplicate);
  };
  return (
    <UrlContainer>
      <UrlTitle>URL</UrlTitle>
      <PublishInputForm
        isFocus={isAddressFocus}
        isAddressDuplicate={isAddressDuplicate === null ? undefined : isAddressDuplicate}>
        <div>/@sopt/content/</div>
        <TextInput
          onFocus={() => setIsAddressFocus(true)}
          onBlur={() => setIsAddressFocus(false)}
          value={url}
          onChange={handleOnChange}
        />
        {isAddressDuplicate === null && url !== '' && <Loader01Icon />}
      </PublishInputForm>
      {/* <TextInputForm type={''} children={undefined} isFocus={false} /> */}
      {/* <UrlCustomTextarea defaultValue="/@sopt/content/"></UrlCustomTextarea> */}
    </UrlContainer>
  );
};

export default UrlCustom;

const UrlCustomTextarea = styled.textarea`
  display: inline-flex;
  align-items: flex-start;
  margin-top: 0.8rem;
  padding: 1rem 1.2rem;
  width: 54rem;
  height: 4.6rem;
  resize: none;
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_600};
  /* 기능넣을때 수정할 예정입니당. */
  &:focus {
    color: ${({ theme }) => theme.colors.grey_900};
  }
`;

const UrlContainer = styled.div`
  margin-top: 2.4rem;
`;

const UrlTitle = styled.p`
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Body2_Semibold};
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
  }
`;
