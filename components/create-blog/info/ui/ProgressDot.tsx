'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { isJSDocReturnTag } from 'typescript';

import { CheckBoxIcon } from '@/public/icons';

interface ProgressDotProps {
  progress: number;
}

const ProgressDot = (props: ProgressDotProps) => {
  const { progress } = props;

  const [currentStep, setCurrentStep] = useState('first');

  const [firstCheckBoxAnimation, setFirstCheckBoxAnimation] = useState('shown');
  const [secondCheckBoxAnimation, setSecondCheckBoxAnimation] = useState('');
  const [thirdCheckBoxAnimation, setThirdCheckBoxAnimation] = useState('');

  useEffect(() => {
    switch (progress) {
      case -1:
        setFirstCheckBoxAnimation('fadeIn');
        setSecondCheckBoxAnimation('fadeOut');
        setCurrentStep('first');
        return;
      case 2:
        setFirstCheckBoxAnimation('fadeOut');
        setSecondCheckBoxAnimation('fadeIn');
        setCurrentStep('second');
        return;
      case 3:
        setSecondCheckBoxAnimation('fadeOut');
        setThirdCheckBoxAnimation('fadeIn');
        setCurrentStep('third');
        return;
      case -2:
        setSecondCheckBoxAnimation('fadeIn');
        setThirdCheckBoxAnimation('fadeOut');
        setCurrentStep('second');
        return;
    }
  });

  return (
    <ProgressDotContainer>
      <DotContainer>
        <CheckBox $width={currentStep === 'first' ? '3' : '2.2'} $height={currentStep === 'first' ? '3' : '2.2'}>
          <CheckDot className={firstCheckBoxAnimation}>
            <CheckBoxIcon />
          </CheckDot>
          <Dot className={'green'} $isShown={currentStep === 'first'} />
        </CheckBox>

        <CheckBox $width={currentStep === 'second' ? '3' : '2.2'} $height={currentStep === 'second' ? '3' : '2.2'}>
          <CheckDot className={secondCheckBoxAnimation}>
            <CheckBoxIcon />
          </CheckDot>
          <Dot className={currentStep === 'first' ? 'grey' : 'green'} $isShown={currentStep === 'second'} />
        </CheckBox>

        <CheckBox $width={currentStep === 'third' ? '3' : '2.2'} $height={currentStep === 'third' ? '3' : '2.2'}>
          <CheckDot className={thirdCheckBoxAnimation}>
            <CheckBoxIcon />
          </CheckDot>
          <Dot className={currentStep === 'third' ? 'green' : 'grey'} $isShown={currentStep === 'third'} />
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

const Dot = styled.div<{ $isShown: boolean }>`
  transition: opacity 0.6s;
  opacity: ${({ $isShown }) => ($isShown ? 0 : 1)};
  border-radius: 1.5rem;

  background-color: ${({ theme }) => theme.colors.background_green};

  width: ${({ $isShown }) => ($isShown ? '3rem' : '2.2rem')};
  height: ${({ $isShown }) => ($isShown ? '3rem' : '2.2rem')};

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

  &.fadeIn {
    transition: 0.6s;
    opacity: 1;
  }

  &.fadeOut {
    transition: 0.6s;
    opacity: 0;
  }
`;
