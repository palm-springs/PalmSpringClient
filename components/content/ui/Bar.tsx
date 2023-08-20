'use client';

import React from 'react';
import styled from 'styled-components';

const Bar = () => {
  return <BarContainer></BarContainer>;
};

export default Bar;

const BarContainer = styled.div`
  margin-bottom: 6rem;
  background-color: ${({ theme }) => theme.colors.grey_400};
  width: 100%;
  height: 1px;
`;
