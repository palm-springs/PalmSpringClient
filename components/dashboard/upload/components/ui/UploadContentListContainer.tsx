import React from 'react';
import { styled } from 'styled-components';

const UploadContentListContainer = ({ children }: { children: React.ReactNode }) => {
  return <UploadContentListUI>{children}</UploadContentListUI>;
};

export default UploadContentListContainer;

const UploadContentListUI = styled.article`
  padding: 0 2.4rem 0 4rem;
`;
