'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

import ModalPortal from '@/components/common/ModalPotal';
import DashboardDeleteModal from '@/components/common/UI/DashboardDeleteModal';

const SaveArticleButton = () => {
  const [isModal, setIsModal] = useState(false);

  const modalOpenHandler = () => {
    setIsModal(!isModal);
    document.body.style.overflow = 'hidden';
  };

  const modalCloseHandler = () => {
    setIsModal(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <>
      <ButtonContainer>
        <BottomWrapper>
          <ExitButton type="button" onClick={modalOpenHandler}>
            나가기
          </ExitButton>
          <TemporarySaveButton type="button">임시저장</TemporarySaveButton>
          <SaveButton type="button">발행하기</SaveButton>
        </BottomWrapper>
      </ButtonContainer>
      {isModal && (
        <ModalPortal>
          <DashboardDeleteModal
            text={'저장하지 않고 나가시겠어요?'}
            subText={'저장하지 않고 페이지를 벗어나는 경우,'}
            lineBreaking={'지금까지 작성한 내용이 모두 사라집니다.'}
            leftButtonText={'돌아가기'}
            rightButtonText={'나가기'}
            leftHandler={modalCloseHandler}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default SaveArticleButton;

const BottomWrapper = styled.div`
  margin-left: 35.9rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  border-top: 1px solid #eee;
  background: ${({ theme }) => theme.colors.grey_0};
  width: 100vw;
  height: 6.4rem;
`;

const ExitButton = styled.button`
  color: ${({ theme }) => theme.colors.grey_900};
  font-family: ${({ theme }) => theme.fonts.Body3_Regular};
`;

const TemporarySaveButton = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-left: 48.5rem;
  padding: 1rem 2rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_900};
  font-family: ${({ theme }) => theme.fonts.Button_medium};
`;

const SaveButton = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-left: 0.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_900};
  padding: 1rem 2rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
  font-family: ${({ theme }) => theme.fonts.Button_medium};
`;
