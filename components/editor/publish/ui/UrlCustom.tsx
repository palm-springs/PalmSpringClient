'use client';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import router from 'next/router';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { EssentialCircleIcon, Loader01Icon } from '@/public/icons';
import { UpdateArticleProps } from '@/types/article';
import { UpdatePageProps } from '@/types/page';
import CheckContentUrlDuplication from '@/utils/checkContentUrlDuplication';

import { articleDataState, pageDataState } from '../../states/atom';

import PublishInputForm from './PublishInputForm';

interface UrlCustomProps {
  pageType: string;
  isDuplicate: boolean | null;
  setIsDuplicate: Dispatch<SetStateAction<boolean | null>>;
  isAddressRulePassed: boolean | null;
  setIsAddressRulePassed: Dispatch<SetStateAction<boolean>>;
  pageData?: UpdatePageProps;
  updatedArticleData?: UpdateArticleProps;
}

const UrlCustom = (props: UrlCustomProps) => {
  const {
    pageType,
    isDuplicate,
    setIsDuplicate,
    isAddressRulePassed,
    setIsAddressRulePassed,
    pageData,
    updatedArticleData,
  } = props;
  const { team } = useParams();

  const [{ articleUrl }, setArticleData] = useRecoilState(articleDataState);
  const [{ pageUrl }, setPageData] = useRecoilState(pageDataState);

  const [isAddressFocus, setIsAddressFocus] = useState(false);

  // 중복 검사
  const checkDuplication = (value: string) => {
    if (pageType === 'page') {
      if (value === pageData?.pageUrl) {
        setIsDuplicate(false);
      } else {
        CheckContentUrlDuplication(String(team), value, setIsDuplicate);
      }
    } else if (pageType === 'article') {
      if (value === updatedArticleData?.articleUrl) {
        setIsDuplicate(false);
      } else {
        CheckContentUrlDuplication(String(team), value, setIsDuplicate);
      }
    }
  };

  // url rule check
  const checkAddressRulePassed = (value: string) => {
    const checkAddressRule = /^[a-z0-9-]*$/.test(value);
    if (checkAddressRule) {
      setIsAddressRulePassed(true);
      return true;
    } else {
      setIsAddressRulePassed(false);
      return false;
    }
  };

  // 최초 렌더링) 기존 url이 있을시 rule check
  useEffect(() => {
    if (pageType === 'article') {
      if (updatedArticleData) {
        setArticleData((prev) => ({ ...prev, articleUrl: updatedArticleData.articleUrl }));
        checkAddressRulePassed(updatedArticleData.articleUrl);
      } else {
        setArticleData((prev) => ({ ...prev, articleUrl: '' }));
      }
    } else if (pageType === 'page') {
      if (pageData) {
        setPageData((prev) => ({ ...prev, pageUrl: pageData.pageUrl }));
        checkAddressRulePassed(pageData.pageUrl);
      } else {
        setPageData((prev) => ({ ...prev, pageUrl: '' }));
      }
    }
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (pageType === 'article') {
      setArticleData((prev) => ({ ...prev, articleUrl: value }));
    } else if (pageType === 'page') {
      setPageData((prev) => ({ ...prev, pageUrl: value }));
    }

    // rule & duplication check
    const isRulePassed = checkAddressRulePassed(value);
    if (isRulePassed) checkDuplication(value);
  };

  if (pageType !== 'article' && pageType !== 'page') router.push('/not-found');

  return (
    <UrlContainer>
      <UrlTitleContainer>
        <UrlTitle>URL</UrlTitle>
        <EssentialPointerIcon />
      </UrlTitleContainer>

      <PublishInputForm isFocus={isAddressFocus} isDuplicate={isDuplicate}>
        {team}.{process.env.NEXT_PUBLIC_DOMAIN_NAME}/
        <TextInput
          onFocus={() => setIsAddressFocus(true)}
          onBlur={() => setIsAddressFocus(false)}
          value={pageType === 'article' ? articleUrl : pageUrl}
          onChange={handleOnChange}
        />
        {isDuplicate === null && (pageType === 'article' ? articleUrl !== '' : pageUrl !== '') && <Loader01Icon />}
      </PublishInputForm>
      {!isAddressRulePassed && <Message>{'영문 소문자(a-z), 숫자(0-9), "-" 만 사용 가능해요.'}</Message>}
      {isDuplicate && <Message>이미 사용 중인 URL입니다. 다른 URL를 입력해주세요.</Message>}
    </UrlContainer>
  );
};

export default UrlCustom;

const EssentialPointerIcon = styled(EssentialCircleIcon)`
  margin: 0.5rem 0 0 0.8rem;
`;

const UrlTitleContainer = styled.div`
  display: flex;
`;

const UrlContainer = styled.div``;

const UrlTitle = styled.p`
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;

const TextInput = styled.input`
  ${({ theme }) => theme.fonts.Body2_Regular};
  border: none;

  padding: 0;
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
