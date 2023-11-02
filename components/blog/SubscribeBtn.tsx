'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

import { postSubscriber } from '@/api/blogHome';

const SubscribeBtn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubscribe = () => {
    setModalIsOpen(true);
    // postSubscriber(email);
  };

  const handleModalClose = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      {modalIsOpen ? (
        <ModalBackground onClick={handleModalClose}>
          <EmailModal>
            <ModalTitleWrapper>
              <ModalTitle>블로그 이름 아티클 구독하기</ModalTitle>
              <ModalCloseBtn>X</ModalCloseBtn>
            </ModalTitleWrapper>
            <ModalEmailTitle>이메일</ModalEmailTitle>
            <ModalEmailInput></ModalEmailInput>
            <ModalBtnWrapper>
              <ModalSubmitBtn>구독</ModalSubmitBtn>
            </ModalBtnWrapper>
          </EmailModal>
        </ModalBackground>
      ) : (
        <></>
      )}

      <SubscribeBtnContainer onClick={handleSubscribe}>팀 소식 받아보기</SubscribeBtnContainer>
    </>
  );
};

export default SubscribeBtn;

const ModalBackground = styled.div`
  z-index: 1;
  background-color: rgba(64, 71, 79, 0.5);
  width: 100vw;
  height: 100vh;
`;

const EmailModal = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  right: 50%;
  flex-direction: column;
  z-index: 2;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.grey_0};
  padding: 2rem 2.8rem;
`;

const ModalTitleWrapper = styled.div`
  display: flex;
  gap: 8.8rem;
`;

const ModalCloseBtn = styled.div``;

const ModalTitle = styled.span`
  ${({ theme }) => theme.fonts.Heading3_Semibold};

  color: ${({ theme }) => theme.colors.grey_900};
`;

const ModalEmailTitle = styled.span`
  ${({ theme }) => theme.fonts.Body2_Semibold};

  margin-top: 1.2rem;
  color: ${({ theme }) => theme.colors.grey_900};
`;

const ModalEmailInput = styled.input`
  margin-top: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_700};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 40rem;
`;

const ModalBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.4rem;
`;

const ModalSubmitBtn = styled.button`
  ${({ theme }) => theme.fonts.Button_large};

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_900};
  padding: 1rem 2.6rem;
  width: 8.4rem;
  height: 4.2rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;

const SubscribeBtnContainer = styled.button`
  ${({ theme }) => theme.fonts.Button_medium};

  display: flex;
  align-items: center;

  border: none;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_900};

  padding: 1rem 2rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_800};
  }
`;
