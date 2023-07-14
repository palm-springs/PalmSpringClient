'use client';
import styled from 'styled-components';

const InputTitle = ({ children }: { children: React.ReactNode }) => {
  return <Title>{children}</Title>;
};

export default InputTitle;

const Title = styled.label`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  display: flex;
  align-items: center;

  margin-bottom: 0.8rem;
  height: 1.9rem;

  color: ${({ theme }) => theme.colors.grey_950};

  & > div {
    margin-left: 0.8rem;
    border-radius: 0.6rem;

    background-color: ${({ theme }) => theme.colors.green};
    width: 0.6rem;
    height: 0.6rem;
    &.name {
      margin-bottom: 0.7rem;
    }
    &.id {
      margin-bottom: 0.5rem;
    }
  }
`;
