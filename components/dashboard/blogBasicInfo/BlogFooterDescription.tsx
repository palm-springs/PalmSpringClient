'use client';
import React, { useCallback } from 'react';
import styled from 'styled-components';

interface BlogFooterDescriptionProps {
  ownerDescription: string;
  setOwnerDescription: (v: string) => void;
  readonly: boolean;
}

const BlogFooterDescription = (props: BlogFooterDescriptionProps) => {
  const { ownerDescription, setOwnerDescription, readonly } = props;

  const getCurInputTextLineCnt = useCallback((text: string) => {
    const lines = text?.split(/\r|\r\n|\n/);
    const count = lines?.length;
    return count;
  }, []);

  const isScrollable = getCurInputTextLineCnt(ownerDescription) >= 3;

  return (
    <CompanyDescriptionContainer>
      <CompanyDescriptionTitleWrapper>
        <DescriptionTitle>추가 정보 및 설명</DescriptionTitle>
        <DescriptionDetail>
          사업자 정보, 연락처 등 <p>소유자/회사에 대한 정보 및 설명</p>
        </DescriptionDetail>
      </CompanyDescriptionTitleWrapper>
      <CompanyDescriptionTextarea
        $isScrollable={isScrollable}
        value={ownerDescription}
        onChange={(e) => {
          setOwnerDescription(e.target.value), console.log(e.target.value);
        }}
        placeholder="블로그 설명을 입력하세요"
        disabled={readonly}
      />
    </CompanyDescriptionContainer>
  );
};

export default BlogFooterDescription;

const CompanyDescriptionContainer = styled.div`
  display: flex;
  margin: 3.2rem 0 14.9rem;
`;

const CompanyDescriptionTextarea = styled.textarea<{ $isScrollable: boolean }>`
  ${({ theme }) => theme.fonts.Body2_Regular};
  margin-left: 3.6rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem 5rem;
  width: 64.5rem;
  height: 8.6rem;
  overflow-y: ${({ $isScrollable }) => ($isScrollable ? 'auto' : 'hidden')};
  resize: none;
  color: ${({ theme }) => theme.colors.grey_900};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;

const CompanyDescriptionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DescriptionDetail = styled.span`
  ${({ theme }) => theme.fonts.Caption};

  margin-top: 0.4rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_700};
  p {
    margin-top: 0.4rem;
  }
`;

const DescriptionTitle = styled.span`
  white-space: nowrap;
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;
