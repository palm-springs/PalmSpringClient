'use client';
import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { IcClose32Icon } from '@/public/icons';

interface DashboardCreateModalProps {
  mainText: string;
  subText?: string;
  buttonText: string;
  disabled: boolean;
  onModalCloseBtnClick: Dispatch<SetStateAction<string>>;
  buttonHandler?: () => void;
  children: React.ReactNode;
}

const DashboardCreateModal = ({
  mainText,
  subText,
  buttonText,
  disabled,
  onModalCloseBtnClick,
  buttonHandler,
  children,
}: DashboardCreateModalProps) => {
  return (
    <ModalContainer>
      <ModalWrapper>
        <MainHeaderContainer>
          <MainText>{mainText}</MainText>
          <ModalCloseBtn onClick={onModalCloseBtnClick} />
        </MainHeaderContainer>
        {subText && <SubText>{subText}</SubText>}
        {children}
        <RightBottomButton disabled={disabled} onClick={buttonHandler} $isInvitation={buttonText === '초대하기'}>
          {buttonText}
        </RightBottomButton>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default DashboardCreateModal;

const RightBottomButton = styled.button<{ disabled: boolean; $isInvitation: boolean }>`
  align-self: flex-end;
  margin-top: ${({ $isInvitation }) => ($isInvitation ? '0' : '2.4rem')};
  ${({ theme }) => theme.fonts.Button_large};
  margin-left: 1.6rem;
  border-radius: 0.8rem;
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.background_green : theme.colors.green)};
  width: 11.5rem;
  height: 4.2rem;
  color: ${({ theme }) => theme.colors.grey_0};
  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.green_hover};
  }
`;

const MainHeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const ModalCloseBtn = styled(IcClose32Icon)`
  cursor: pointer;
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

const ModalWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 2rem;
  box-shadow: 0px 15px 22px 0px rgba(64, 71, 79, 0.15), 0px 4px 4px 0px rgba(67, 78, 90, 0.12);
  background-color: ${({ theme }) => theme.colors.grey_0};
  padding: 2rem 2.8rem;
  width: 45.6rem;
  height: auto;
`;

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

  input {
    &:focus {
      outline: none;
    }
  }
`;
