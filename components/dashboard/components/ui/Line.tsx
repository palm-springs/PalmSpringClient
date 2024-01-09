'use client';

import React from 'react';
import { styled } from 'styled-components';

interface LineProps {
  sideBar?: boolean;
}
const Line = (props: LineProps) => {
  return props.sideBar ? <SideBarLineUI /> : <LineUI />;
};

export default Line;

const LineUI = styled.div`
  margin: 0 0 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_300};
  width: 100%;
  height: 0.1rem;
`;

const SideBarLineUI = styled.hr`
  margin: 0 0 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  width: calc(100% - 3.2rem);
`;
