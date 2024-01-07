'use client';
import { MouseEventHandler, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { dashBoardHeaderButtonVisibleState } from '@/components/dashboard/state/modalState';
import { EmptyLogoIcon } from '@/public/icons';

interface EmptyLandingProps {
  noIcon?: boolean;
  message1: string;
  message2?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonClick?: MouseEventHandler<HTMLButtonElement>;
  header: boolean;
}

/**
 * @param header boolean 대시보드 헤더가 있으면 true 없으면 false (required)
 * @param noIcon boolean 빈 로고 아이콘이 필요 없으면 noIcon 넣어주기 (optional)
 * @param message1 string 첫번째 줄 메시지 (required)
 * @param message2 string 두번째 줄 메시지 (optional)
 * @param buttonText string 버튼이 있다면 텍스트 (optional)
 * @param buttonLink string 버튼 누르면 이동할 링크 (optional)
 * @returns
 */
const EmptyLanding = (props: EmptyLandingProps) => {
  const { message1, message2, buttonText, noIcon, buttonLink, header, buttonClick } = props;
  const router = useRouter();

  const setHeaderButtonState = useSetRecoilState(dashBoardHeaderButtonVisibleState);

  useEffect(() => {
    setHeaderButtonState(false);
    return () => {
      setHeaderButtonState(true);
    };
  }, []);

  return (
    <EmptyLandingContainer $header={header}>
      {!noIcon && <EmptyLogoIcon />}
      <Message>{message1}</Message>
      {message2 && <Message>{message2}</Message>}
      {buttonText && (buttonLink || buttonClick) && (
        <Button type="button" onClick={buttonLink ? () => router.push(buttonLink) : buttonClick}>
          {buttonText}
        </Button>
      )}
    </EmptyLandingContainer>
  );
};

export default EmptyLanding;

const EmptyLandingContainer = styled.div<{ $header: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ $header }) => ($header ? 'calc(100vh - 13.6rem)' : '100vh')};

  & > svg {
    margin-bottom: 2.9rem;
  }
`;

const Message = styled.p`
  ${({ theme }) => theme.fonts.Heading3_Semibold};
  color: ${({ theme }) => theme.colors.grey_800};
`;

const Button = styled.button`
  ${({ theme }) => theme.fonts.Button_large};
  display: flex;
  align-items: center;

  margin-top: 4.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.green};

  padding: 0 2.6rem;
  height: 4.2rem;
  color: ${({ theme }) => theme.colors.grey_0};

  &:hover {
    transition: 0.3s ease-out;
    background-color: ${({ theme }) => theme.colors.green_hover};
  }
`;
