'use client';
import styled from 'styled-components';

const InputTitle = ({ children }: { children: React.ReactNode }) => {
  return <Title>{children}</Title>;
};

export default InputTitle;

const Title = styled.label`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;
