'use client';

import React from 'react';
import { styled } from 'styled-components';

const Line = () => <LineUI />;

export default Line;

const LineUI = styled.div`
  margin-bottom: 0.8rem;
  background: ${({ theme }) => theme.colors.grey_300};
  width: 100%;
  height: 1px;
`;
