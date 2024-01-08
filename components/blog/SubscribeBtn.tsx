'use client';

import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { postSubscriber } from '@/api/blogHome';
import { IcClose32Icon } from '@/public/icons';

interface subscribeBtnProps {
  blogName: string;
  team: string;
}

const SubscribeBtn = (subscribeBtnProps: subscribeBtnProps) => {
  const { blogName, team } = subscribeBtnProps;

  const [email, setEmail] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const requestBody = {
    email: email,
    blogUrl: team,
  };

  const handleSubscribe = () => {
    postSubscriber(requestBody);
    setModalIsOpen(false);
  };

  const handleModalCloseBtn = () => {
    setModalIsOpen(false);
  };

  const handleModalClose = (e: React.MouseEvent<HTMLElement>) => {
    document.body.style.overflowY = 'scroll';

    !modalRef.current?.contains(e.target as Node) && setModalIsOpen(false);
  };

  const saveEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <>
      {modalIsOpen ? (
        <ModalBackground onClick={handleModalClose}>
          <EmailModal ref={modalRef}>
            <ModalTitleWrapper>
              <ModalTitle>{blogName} 아티클 구독하기</ModalTitle>
              <ModalCloseBtn onClick={handleModalCloseBtn} />
            </ModalTitleWrapper>
            <ModalEmailTitle>이메일</ModalEmailTitle>
            <ModalEmailInput type="text" value={email} onChange={saveEmail}></ModalEmailInput>
            <ModalBtnWrapper>
              <ModalSubmitBtn onClick={handleSubscribe}>구독</ModalSubmitBtn>
            </ModalBtnWrapper>
          </EmailModal>
        </ModalBackground>
      ) : (
        <></>
      )}

      {/* 구독 기능 -> 다음 릴리즈 */}
      {/* <SubscribeBtnContainer
        type="button"
        onClick={() => {
          document.body.style.overflowY = 'hidden';
          setModalIsOpen(true);
          resetEmail();
        }}>
        팀 소식 받아보기
      </SubscribeBtnContainer> */}
    </>
  );
};

export default SubscribeBtn;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(64, 71, 79, 0.5);
  width: 100vw;
  height: 100vh;
`;

const EmailModal = styled.div`
  display: flex;
  position: fixed;
  top: calc(100vh / 3);
  right: calc(100vw / 3);
  flex-direction: column;
  z-index: 2;

  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.grey_0};

  padding: 2rem 2.8rem;
`;

const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalCloseBtn = styled(IcClose32Icon)`
  cursor: pointer;
`;
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

// const SubscribeBtnContainer = styled.button`
//   ${({ theme }) => theme.fonts.Button_medium};

//   display: flex;
//   align-items: center;

//   border: none;
//   border-radius: 0.8rem;
//   background-color: ${({ theme }) => theme.colors.grey_900};

//   padding: 1rem 2rem;
//   height: 3.6rem;
//   color: ${({ theme }) => theme.colors.grey_0};

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.grey_800};
//   }
// `;
