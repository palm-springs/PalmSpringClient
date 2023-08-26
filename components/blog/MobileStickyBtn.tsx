import React from 'react';
import styled from 'styled-components';

import { BellIcon } from '@/public/icons';

const MobileStickyBtn = () => {
  return (
    <BtnContainer>
      <BtnWrapper>
        <BellIcon />
        출시 알림 받기
      </BtnWrapper>
    </BtnContainer>
  );
};
export default MobileStickyBtn;

const BtnWrapper = styled.div`
  ${({ theme }) => theme.mobileFonts.Markdown_H3};
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  padding: 1rem 2.3rem;

  color: ${({ theme }) => theme.colors.grey_0};
`;

const BtnContainer = styled.button`
  position: sticky;
  bottom: 6.4rem;
  left: calc((100vw - 18.6rem) / 2);

  border-radius: 2.6rem;
  box-shadow: 0px 5px 12px 0px rgba(90, 103, 117, 0.22), 0px 1px 5px 0px rgba(90, 103, 117, 0.1);
  background: radial-gradient(95.78% 95.78% at 50% 50%, rgba(42, 67, 96, 0.6) 0%, rgba(97, 120, 147, 0.5) 100%);

  height: 5.2rem;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-backdrop-filter: blur(10px);
`;
