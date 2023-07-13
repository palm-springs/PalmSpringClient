import React from 'react';
import { styled } from 'styled-components';

import { IcPlusIcon } from '@/public/icons';

const MakeNewBlogContainer = () => {
  return (
    <MakeNewBlogUI>
      <PlusIcon />
      <span>새로운 블로그 생성하기</span>
    </MakeNewBlogUI>
  );
};

export default MakeNewBlogContainer;

const MakeNewBlogUI = styled.article`
  display: flex;
  gap: 1rem;
  align-items: center;
  transition-duration: 0.3s ease-out;
  cursor: pointer;
  padding: 1.2rem 1.6rem 1.2rem 1.2rem;
  width: 100%;
  &:hover {
    background: ${({ theme }) => theme.colors.grey_100};
  }
  span {
    ${({ theme }) => theme.fonts.Body3_Regular};
    color: ${({ theme }) => theme.colors.grey_900};
  }
`;

const PlusIcon = styled(IcPlusIcon)`
  width: 1.6rem;
  height: 1.6rem;
`;
