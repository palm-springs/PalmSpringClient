import React from 'react';
import { styled } from 'styled-components';

interface FooterPopOverMenuContainerProps {
  innerText: string;
}

const FooterPopOverMenuContainer = (props: FooterPopOverMenuContainerProps) => {
  const { innerText } = props;

  return <FooterPopOverMenuUI id="popovermenu">{innerText}</FooterPopOverMenuUI>;
};

export default FooterPopOverMenuContainer;

const FooterPopOverMenuUI = styled.article`
  ${({ theme }) => theme.fonts.Body3_Regular};
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: space-between;
  transform: translate(26.2rem, -10rem);
  z-index: 1000;
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.8rem;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.grey_0};
  padding: 1.6rem 2.4rem;
`;
