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
      <DotContainer>
        <CheckBox $width={progress === 1 ? '3' : '2.2'} $height={progress === 1 ? '3' : '2.2'}>
          <CheckDot className={progress === 1 ? 'shown' : progress === 2 ? 'fadeout' : 'hidden'}>
            <CheckBoxIcon />
          </CheckDot>
          <Dot className={'green'} />
        </CheckBox>
        <CheckBox $width={progress === 2 ? '3' : '2.2'} $height={progress === 2 ? '3' : '2.2'}>
          <CheckDot className={progress === 2 ? 'fadein' : progress === 3 ? 'fadeout' : 'hidden'}>
            <CheckBoxIcon />
          </CheckDot>
          <Dot className={progress === 1 ? 'grey' : 'green'} />
        </CheckBox>
        <CheckBox $width={progress === 3 ? '3' : '2.2'} $height={progress === 3 ? '3' : '2.2'}>
          <CheckDot className={progress === 3 ? 'fadein' : 'hidden'}>
            <CheckBoxIcon />
          </CheckDot>
          <Dot className={progress === 3 ? 'green' : 'grey'} />
        </CheckBox>
      </DotContainer>
    </ProgressDotContainer>
  );
};

export default ProgressDot;

const ProgressDotContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  width: 54rem;
  height: 100vh;
`;

const DotContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;
  align-items: center;
`;

const CheckBox = styled.div<{ $width: string; $height: string }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  width: ${({ $width }) => `${$width}rem`};
  height: ${({ $height }) => `${$height}rem`};
`;

const Dot = styled.div`
  border-radius: 1.5rem;

  background-color: ${({ theme }) => theme.colors.background_green};
  width: 2.2rem;
  height: 2.2rem;

  &.grey {
    background-color: ${({ theme }) => theme.colors.grey_200};
  }
`;

const CheckDot = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;

  opacity: 0;

  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.green};
  width: 3rem;
  height: 3rem;

  &.shown {
    opacity: 1;
  }

  &.fadein {
    transition: 1s;
    opacity: 1;
  }

  &.fadeout {
    transition: 1s;
    opacity: 0;
  }
`;
