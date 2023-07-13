'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import ModalPortal from '@/components/common/ModalPotal';
import DeleteMemberModal from '@/components/common/UI/DeleteMemberModal';

const PopOver = () => {
  // const NAME = popOverName;
  const [showModal, setShowModal] = useState(false);

  const modalOpenHandle = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };
  const modalCloseHandle = () => {
    setShowModal(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <PopOverContainer>
      <LinkText href={`/blogNameHere/author/authorNameHere`}>팀원이 쓴 글로 이동하기</LinkText>
      <ModalText type="button" onClick={() => modalOpenHandle()}>
        팀에서 제외하기
      </ModalText>
      {showModal && (
        <ModalPortal>
          <DeleteMemberModal
            text={'ooo님을 팀에서'}
            lineBreaking={'제외하시겠어요?'}
            subText={'팀원을 제외할 시, 복구할 수 없습니다'}
            leftButtonText={'유지하기'}
            rightButtonText={'제외하기'}
            leftHandler={modalCloseHandle}
          />
        </ModalPortal>
      )}
    </PopOverContainer>
  );
};

export default PopOver;

const PopOverContainer = styled.div`
  display: flex;
  position: absolute;
  top: 5.2rem;
  right: 0;

  flex-direction: column;
  gap: 2rem;
  z-index: 5;

  border: 1px solid ${({ theme }) => theme.colors.grey_500};
  border-radius: 0.8rem;

  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.grey_0};
  padding: 2rem 2.4rem;
  width: fit-content;
`;

const LinkText = styled(Link)`
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_900};

  &.red {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const ModalText = styled.button`
  ${({ theme }) => theme.fonts.Body3_Regular};

  color: ${({ theme }) => theme.colors.red};
`;
