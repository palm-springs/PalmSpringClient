'use client';

import React from 'react';
import styled from 'styled-components';

interface BlogFooterCompanyProps {
  companyName: string;
  setCompanyName: (v: string) => void;
  readonly: boolean;
}

const BlogFooterCompany = (props: BlogFooterCompanyProps) => {
  const { companyName, setCompanyName, readonly } = props;
  return (
    <FooterCompanyContainer>
      <CompanyNameTitle>소유자/회사 이름</CompanyNameTitle>
      <CompanyNameInput
        placeholder="소유자/회사 이름을 입력하세요"
        value={companyName}
        onChange={(e) => {
          setCompanyName(e.target.value);
        }}
        disabled={readonly}
      />
    </FooterCompanyContainer>
  );
};

export default BlogFooterCompany;

const FooterCompanyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.2rem;
  width: 100%;
`;

const CompanyNameTitle = styled.div`
  margin-right: 8.1rem;
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin-bottom: 0.5rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const CompanyNameInput = styled.input`
  ${({ theme }) => theme.fonts.Body2_Regular};
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 64.5rem;
  height: 4.6rem;
  color: ${({ theme }) => theme.colors.grey_950};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;
