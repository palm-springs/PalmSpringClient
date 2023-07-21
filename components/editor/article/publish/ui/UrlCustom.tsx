'use client';
import React, { useState } from 'react';
import router from 'next/router';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import TextInputForm from '@/components/create-blog/info/ui/TextInputForm';
import { EssentialCircleIcon, Loader01Icon } from '@/public/icons';

import { articleDataState, pageDataState } from '../../states/atom';

import PublishInputForm from './PublishInputForm';

interface UrlCustomProps {
  pageType: string;
}

const UrlCustom = (props: UrlCustomProps) => {
  const { pageType } = props;
  const [{ articleUrl }, setArticleData] = useRecoilState(articleDataState);
  const [{ pageUrl }, setPageData] = useRecoilState(pageDataState);

  const [isAddressFocus, setIsAddressFocus] = useState(false);
  const [isAddressDuplicate, setIsAddressDuplicate] = useState<boolean | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setArticleData((prev) => ({ ...prev, articleUrl: value }));

    // url 중복 쳌 :  CheckDuplication(value, setIsAddressDuplicate);
  };

  const handleOnPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPageData((prev) => ({ ...prev, articleUrl: value }));

    // url 중복 쳌 :  CheckDuplication(value, setIsAddressDuplicate);
  };

  switch (pageType) {
    case `article`:
      return (
        <UrlContainer>
          <UrlTitleContainer>
            <UrlTitle>URL</UrlTitle>
            <EssentialPointerIcon />
          </UrlTitleContainer>

          <PublishInputForm
            isFocus={isAddressFocus}
            isAddressDuplicate={isAddressDuplicate === null ? undefined : isAddressDuplicate}>
            <div>/@sopt/content/</div>
            <TextInput
              onFocus={() => setIsAddressFocus(true)}
              onBlur={() => setIsAddressFocus(false)}
              value={articleUrl}
              onChange={handleOnChange}
            />
            {isAddressDuplicate === null && articleUrl !== '' && <Loader01Icon />}
          </PublishInputForm>
          {/* <TextInputForm type={''} children={undefined} isFocus={false} /> */}
          {/* <UrlCustomTextarea defaultValue="/@sopt/content/"></UrlCustomTextarea> */}
        </UrlContainer>
      );
    case `page`:
      return (
        <UrlContainer>
          <UrlTitleContainer>
            <UrlTitle>URL</UrlTitle>
            <EssentialPointerIcon />
          </UrlTitleContainer>

          <PublishInputForm
            isFocus={isAddressFocus}
            isAddressDuplicate={isAddressDuplicate === null ? undefined : isAddressDuplicate}>
            <div>/@sopt/content/</div>
            <TextInput
              onFocus={() => setIsAddressFocus(true)}
              onBlur={() => setIsAddressFocus(false)}
              value={articleUrl}
              onChange={handleOnPageChange}
            />
            {isAddressDuplicate === null && articleUrl !== '' && <Loader01Icon />}
          </PublishInputForm>
          {/* <TextInputForm type={''} children={undefined} isFocus={false} /> */}
          {/* <UrlCustomTextarea defaultValue="/@sopt/content/"></UrlCustomTextarea> */}
        </UrlContainer>
      );
    default:
      router.push('/not-found');
  }
};

export default UrlCustom;

const EssentialPointerIcon = styled(EssentialCircleIcon)`
  margin: 0.5rem 0 0 0.8rem;
`;

const UrlTitleContainer = styled.div`
  display: flex;
`;

// const UrlCustomTextarea = styled.textarea`
//   display: inline-flex;
//   align-items: flex-start;
//   margin-top: 0.8rem;
//   padding: 1rem 1.2rem;
//   width: 54rem;
//   height: 4.6rem;
//   resize: none;
//   ${({ theme }) => theme.fonts.Body2_Regular};
//   color: ${({ theme }) => theme.colors.grey_600};
//   /* 기능넣을때 수정할 예정입니당. */
//   &:focus {
//     color: ${({ theme }) => theme.colors.grey_900};
//   }
// `;

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
    border: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;
