'use client';

import React from 'react';
import styled from 'styled-components';

import { CancelInviteProps } from '@/types/cancelInvite';

const CancelInviteModal = ({
  text,
  subText,
  leftButtonText,
  rightButtonText,
  leftHandler,
  rightHandler,
}: CancelInviteProps) => {
  return (
    <ModalContainer>
      <ModalWrapper>
        <MainText>{text}</MainText>
        <SubText>{subText}</SubText>
        <ButtonContainer>
          <LeftBottomButton onClick={leftHandler}>{leftButtonText}</LeftBottomButton>
          <RightBottomButton onClick={rightHandler}>{rightButtonText}</RightBottomButton>
        </ButtonContainer>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default CancelInviteModal;

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;

  z-index: 5;

  background-color: rgba(64, 71, 79, 0.5);

  width: 100vw;
  height: 100vh;

  overflow: hidden;
`;

const ModalWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  border-radius: 2rem;

  box-shadow: 0px 15px 22px 0px rgba(64, 71, 79, 0.15), 0px 4px 4px 0px rgba(67, 78, 90, 0.12);

  background-color: ${({ theme }) => theme.colors.grey_0};

  padding: 2rem 2.4rem;
  width: 36rem;
  height: auto;
`;

const MainText = styled.h3`
  ${({ theme }) => theme.fonts.Heading3_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};
`;

const SubText = styled.p`
  ${({ theme }) => theme.fonts.Body2_Regular};
  margin-top: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const ButtonContainer = styled.div`
  margin-top: 3.2rem;
`;

const RightBottomButton = styled.button`
  ${({ theme }) => theme.fonts.Button_large};

  margin-left: 1.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.red};

  padding: 1rem 2.6rem;
  height: 4.2rem;

  color: ${({ theme }) => theme.colors.grey_0};
`;

const LeftBottomButton = styled.button`
  ${({ theme }) => theme.fonts.Button_large};
  border: 1px solid ${({ theme }) => theme.colors.grey_500};

  border-radius: 0.8rem;

  padding: 1rem 2.6rem;
  height: 4.2rem;

  color: ${({ theme }) => theme.colors.grey_700};
`;
