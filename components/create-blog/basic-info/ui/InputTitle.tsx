'use client';

import styled from 'styled-components';

const InputTitle = ({ children }: { children: React.ReactNode }) => {
  return <Title>{children}</Title>;
};

export default InputTitle;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_950};

  & > span {
    ${({ theme }) => theme.fonts.Caption};

    margin-left: 0.8rem;
    color: ${({ theme }) => theme.colors.grey_700};
  }
`;
