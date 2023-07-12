'use client';
import styled from 'styled-components';

import { CheckBoxIcon } from '@/public/icons';

interface ProgressDotProps {
  progress: number;
}

const ProgressDot = (props: ProgressDotProps) => {
  const { progress } = props;
  return (
    <ProgressDotContainer>
      {progress === 1 ? (
        <CheckDot>
          <CheckBoxIcon />
        </CheckDot>
      ) : (
        <Dot className="green" />
      )}
      {progress === 1 ? (
        <Dot className="grey" />
      ) : progress === 2 ? (
        <CheckDot>
          <CheckBoxIcon />
        </CheckDot>
      ) : (
        <Dot className="green" />
      )}
      {progress === 3 ? (
        <CheckDot>
          <CheckBoxIcon />
        </CheckDot>
      ) : (
        <Dot className="grey" />
      )}
    </ProgressDotContainer>
  );
};

export default ProgressDot;

const ProgressDotContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;
  align-items: center;
`;

const Dot = styled.div`
  border-radius: 1.5rem;

  background-color: ${({ theme }) => theme.colors.green};
  width: 2.2rem;
  height: 2.2rem;

  &.grey {
    background-color: ${({ theme }) => theme.colors.grey_200};
  }
`;

const CheckDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.green};
  width: 3rem;
  height: 3rem;
`;
