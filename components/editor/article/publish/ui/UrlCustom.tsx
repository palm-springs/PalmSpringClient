'use client';
import React, { useState } from 'react';
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
}

const UrlCustom = (props: UrlCustomProps) => {
  const { pageType } = props;
  const { team } = useParams();

  const [{ articleUrl }, setArticleData] = useRecoilState(articleDataState);
  const [{ pageUrl }, setPageData] = useRecoilState(pageDataState);

  const [isAddressFocus, setIsAddressFocus] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(false);

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
