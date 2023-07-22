'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useParams } from 'next/navigation';
import router from 'next/router';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { EssentialCircleIcon, Loader01Icon } from '@/public/icons';
import CheckArticleDuplication from '@/utils/checkArticleUrlDuplication';
import CheckPageDuplication from '@/utils/checkPageUrlDuplication';

import { articleDataState, pageDataState } from '../../states/atom';

import PublishInputForm from './PublishInputForm';

interface UrlCustomProps {
  pageType: string;
  isDuplicate: boolean | null;
  setIsDuplicate: Dispatch<SetStateAction<boolean | null>>;
}

const UrlCustom = (props: UrlCustomProps) => {
  const { pageType, isDuplicate, setIsDuplicate } = props;
  const { team } = useParams();

  const [{ articleUrl }, setArticleData] = useRecoilState(articleDataState);
  const [{ pageUrl }, setPageData] = useRecoilState(pageDataState);

  const [isAddressFocus, setIsAddressFocus] = useState(false);

  const checkDuplication = (value: string) => {
    if (pageType === 'page') {
      CheckPageDuplication(team, value, setIsDuplicate);
    } else if (pageType === 'article') {
      CheckArticleDuplication(team, value, setIsDuplicate);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setArticleData((prev) => ({ ...prev, articleUrl: value }));
    checkDuplication(value);
  };

  const handleOnPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPageData((prev) => ({ ...prev, pageUrl: value }));
    checkDuplication(value);
  };

  switch (pageType) {
    case `article`:
      return (
        <UrlContainer>
          <UrlTitleContainer>
            <UrlTitle>URL</UrlTitle>
            <EssentialPointerIcon />
          </UrlTitleContainer>

          <PublishInputForm isFocus={isAddressFocus} isDuplicate={isDuplicate}>
            <div>/@{team}/content/</div>
            <TextInput
              onFocus={() => setIsAddressFocus(true)}
              onBlur={() => setIsAddressFocus(false)}
              value={articleUrl}
              onChange={handleOnChange}
            />
            {isDuplicate === null && articleUrl !== '' && <Loader01Icon />}
          </PublishInputForm>

          {isDuplicate && <Message>이미 사용 중인 URL입니다. 다른 URL를 입력해주세요.</Message>}
        </UrlContainer>
      );
    case `page`:
      return (
        <UrlContainer>
          <UrlTitleContainer>
            <UrlTitle>URL</UrlTitle>
            <EssentialPointerIcon />
          </UrlTitleContainer>

          <PublishInputForm isFocus={isAddressFocus} isDuplicate={isDuplicate}>
            <div>/@{team}/content/</div>
            <TextInput
              onFocus={() => setIsAddressFocus(true)}
              onBlur={() => setIsAddressFocus(false)}
              value={pageUrl}
              onChange={handleOnPageChange}
            />
            {isDuplicate === null && pageUrl !== '' && <Loader01Icon />}
          </PublishInputForm>
          {isDuplicate && <Message>이미 사용 중인 URL입니다. 다른 URL를 입력해주세요.</Message>}
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
const Message = styled.div`
  ${({ theme }) => theme.fonts.Caption};
  margin-top: 0.6rem;

  color: ${({ theme }) => theme.colors.red};
`;
