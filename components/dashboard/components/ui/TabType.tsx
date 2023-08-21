import React from 'react';
import { styled } from 'styled-components';

interface TabTypeProps {
  tabType: string;
}

const TabType = (props: TabTypeProps) => {
  const { tabType } = props;

  return (
    <TabTypeContainer>
      <TabTypeUI>
        <span>{tabType}</span>
      </TabTypeUI>
    </TabTypeContainer>
  );
};

export default TabType;

const TabTypeContainer = styled.div`
  margin-right: 2rem;
  width: 8.1rem;
`;

const TabTypeUI = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 2rem;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    ${({ theme }) => theme.fonts.Body3_Regular};
    display: inline-flex;
    gap: 1rem;
    align-items: center;
    padding: 0.4rem 0.8rem;
    max-width: 6.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
