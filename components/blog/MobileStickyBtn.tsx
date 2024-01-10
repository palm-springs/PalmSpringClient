import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { DOMAIN_NAME } from '@/constants/palmspringInfo';
import { MobileBtnLogo } from '@/public/icons';

const MobileStickyBtn = () => {
  return (
    <BtnContainer href={`https://${DOMAIN_NAME}/`}>
      <BtnWrapper>
        <MobileBtnLogo />
        Built with Palmspring
      </BtnWrapper>
    </BtnContainer>
  );
};
export default MobileStickyBtn;

const BtnWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  line-height: 2.17rem;
  letter-spacing: -0.028rem;

  color: ${({ theme }) => theme.colors.grey_900};
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 600;
  font-style: normal;
`;

const BtnContainer = styled(Link)`
  position: fixed;
  right: 2.4rem;
  bottom: 2.4rem;

  border-radius: 1rem;
  box-shadow: 0px 8px 10px 0px rgba(90, 103, 117, 0.14), 0px 1px 5px 0px rgba(90, 103, 117, 0.1);
  background: rgba(255, 255, 255, 0.8);

  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-backdrop-filter: blur(10px);
`;
