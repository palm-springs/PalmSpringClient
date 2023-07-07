import React from 'react';
import { styled } from 'styled-components';

const PopOverMenu = () => {
  return (
    <PopOverMenuUI id="popovermenu">
      <div>새창에서 보기</div>
      <div>수정하기</div>
      <div>삭제하기</div>
    </PopOverMenuUI>
  );
};

export default PopOverMenu;

const PopOverMenuUI = styled.article`
  display: flex;
  position: absolute;
  top: 4.2rem;
  right: 0;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 100;
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.8rem;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.grey_0};
  padding: 2rem 2.2rem;
  width: 12.4rem;
  height: 13.1rem;
  :nth-child(3) {
    color: #ff5454;
  }
  div {
    ${({ theme }) => theme.fonts.Body3_Regular};
    border: none;
    background: none;
  }
`;
