import React from 'react';
import { styled } from 'styled-components';

interface UploadHeaderContainerProps {
  title: string;
  buttonInnerText: string;
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

/**
 *
 * @param title 페이지 타이틀
 * @param buttonInnerText 버튼 안에 들어갈 텍스트
 * @param onButtonClick 버튼 눌렀을 때 작동할 함수
 * @returns
 */
const UploadHeaderContainer = (props: UploadHeaderContainerProps) => {
  const { title, buttonInnerText, onButtonClick, children } = props;

  return (
    <UploadHeaderUI>
      <HeaderContentWrapper>
        <span>{title}</span>
        <button onClick={onButtonClick}>{buttonInnerText}</button>
      </HeaderContentWrapper>
      {children}
    </UploadHeaderUI>
  );
};

export default UploadHeaderContainer;

const UploadHeaderUI = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 6rem 2.8rem 0 4rem;
  width: 100%;
`;

const HeaderContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.2rem;
  width: 100%;

  & > span {
    ${({ theme }) => theme.fonts.Heading1};
    color: ${({ theme }) => theme.colors.grey_950};
  }
  & > button {
    display: inline-flex;
    flex-shrink: 0;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.colors.green};
    padding: 1rem 2.6rem;
    height: 4.2rem;
    color: ${({ theme }) => theme.colors.grey_0};
    &:hover {
      background: ${({ theme }) => theme.colors.green_hover};
    }
  }
`;
