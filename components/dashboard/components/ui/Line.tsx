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
  border: 1px solid ${({ theme, $isSideBar }) => ($isSideBar ? theme.colors.grey_300 : theme.colors.grey_400)};
  width: 100%;
`;
