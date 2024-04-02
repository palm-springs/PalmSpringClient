'use-client';

import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { EssentialCircleIcon } from '@/public/icons';
import { UpdateArticleProps } from '@/types/article';

import { articleDataState } from '../../states/atom';

interface CategorySelectProps {
  updatedArticleData?: UpdateArticleProps;
}

const OneLiner = (props: CategorySelectProps) => {
  const { updatedArticleData } = props;
  const [{ description }, setArticleData] = useRecoilState(articleDataState);

  useEffect(() => {
    if (updatedArticleData) {
      setArticleData((prev) => ({ ...prev, description: String(updatedArticleData.description) }));
    } else {
      setArticleData((prev) => ({ ...prev, description: '' }));
    }
  }, []);

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
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem 5rem;
  width: 54rem;
  resize: none;
  &::placeholder {
    ${({ theme }) => theme.colors.grey_600};
    ${({ theme }) => theme.fonts.Body2_Regular};
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;
const OneLinerContainer = styled.div`
  margin: 2.4rem 0;
`;

const OneLineTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;
