import React from 'react';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { dashBoardHeaderButtonVisibleState } from '../../state/modalState';

interface UploadHeaderContainerProps {
  title: string;
  explanation?: string;
  isRenderHeaderButton?: boolean;
  buttonInnerText?: string;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 *
 * @param title 페이지 타이틀
 * @param buttonInnerText 버튼 안에 들어갈 텍스트
 * @param isRenderHeaderButton 헤더 버튼 렌더링 여부
 * @param onButtonClick 버튼 눌렀을 때 작동할 함수
 * @returns
 */
const HeaderContainer = (props: UploadHeaderContainerProps) => {
  const { title, explanation, buttonInnerText, onButtonClick, isRenderHeaderButton = true } = props;

  const headerButtonState = useRecoilValue(dashBoardHeaderButtonVisibleState);

  return (
    <UploadHeaderUI>
      <HeaderContentWrapper>
        <TitleContainer>
          <span>{title}</span>
          <Explanation>{explanation}</Explanation>
        </TitleContainer>
        {isRenderHeaderButton && buttonInnerText && headerButtonState && (
          <button onClick={onButtonClick}>{buttonInnerText}</button>
        )}
      </HeaderContentWrapper>
    </UploadHeaderUI>
  );
};

export default HeaderContainer;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  & > span {
    margin-right: 1.4rem;
    ${({ theme }) => theme.fonts.Heading1};
    color: ${({ theme }) => theme.colors.grey_950};
  }
`;

const Explanation = styled.p`
  margin-top: 1.4rem;
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_900};
`;

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

  & > button {
    display: inline-flex;
    flex-shrink: 0;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-out;
    border: none;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.colors.green};
    ${({ theme }) => theme.fonts.Body1_Semibold};
    padding: 1rem 2.6rem;
    height: 4.2rem;
    color: ${({ theme }) => theme.colors.grey_0};
    &:hover {
      background: ${({ theme }) => theme.colors.green_hover};
    }
  }
`;
