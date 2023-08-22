'use-client';

import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { EssentialCircleIcon } from '@/public/icons';
import { UpdateArticleProps } from '@/types/article';

import { articleDataState } from '../../states/atom';

interface CategorySelectProps {
  articleData?: UpdateArticleProps;
}

const OneLiner = (props: CategorySelectProps) => {
  const { articleData } = props;
  const [{ description }, setArticleData] = useRecoilState(articleDataState);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setArticleData((prev) => ({ ...prev, description: value }));
  };

  return (
    <OneLinerContainer>
      <OneLineTitleContainer>
        <OneLineTitle onChange={handleOnChange}>한 줄 소개</OneLineTitle>
        <EssentialPointerIcon />
      </OneLineTitleContainer>

      <OneLinerTextarea
        placeholder="한 줄 소개를 입력해주세요"
        value={description}
        onChange={(e) =>
          setArticleData((prev) => ({
            ...prev,
            description: e.target.value,
          }))
        }></OneLinerTextarea>
    </OneLinerContainer>
  );
};

export default OneLiner;

const EssentialPointerIcon = styled(EssentialCircleIcon)`
  margin: 0.5rem 0 0 0.8rem;
`;

const OneLineTitleContainer = styled.div`
  display: flex;
`;

const OneLinerTextarea = styled.textarea`
  ${({ theme }) => theme.fonts.Body2_Regular};
  display: flex;
  margin-top: 0.8rem;
  outline-color: ${({ theme }) => theme.colors.grey_700};
  border: 1px solid ${({ theme }) => theme.colors.grey_700};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem 5rem;
  width: 54rem;
  resize: none;
  &::placeholder {
    ${({ theme }) => theme.colors.grey_600};
    ${({ theme }) => theme.fonts.Body2_Regular};
  }
`;

const OneLinerContainer = styled.div`
  margin-top: 2.4rem;
`;

const OneLineTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;
