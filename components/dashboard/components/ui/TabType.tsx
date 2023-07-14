import React from 'react';
import { styled } from 'styled-components';

interface TabTypeProps {
  tabType: string;
}

const TabType = (props: TabTypeProps) => {
  const { tabType } = props;

  return <TabTypeUI>{tabType}</TabTypeUI>;
};

export default TabType;

const TabTypeUI = styled.span`
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  margin-right: 2vw;
  ${({ theme }) => theme.fonts.Body3_Regular};
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 2rem;
  padding: 0.4rem 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
