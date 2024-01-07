'use client';

import React from 'react';
import { styled } from 'styled-components';

interface LineProps {
  sideBar?: boolean;
}
const Line = (props: LineProps) => <LineUI $isSideBar={props.sideBar} />;

export default Line;

const LineUI = styled.hr<{ $isSideBar: boolean | undefined }>`
  margin: 0 0 0.8rem;
  border: 0.5px solid ${({ theme }) => theme.colors.grey_300};
  width: ${({ $isSideBar }) => ($isSideBar ? 'calc(100% - 3.2rem)' : '100%')};
`;
