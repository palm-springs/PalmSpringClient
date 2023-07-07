import React from 'react';
import { styled } from 'styled-components';

const UploadTemplateContainer = ({ children }: { children: React.ReactNode }) => {
  return <UploadTemplateUI>{children}</UploadTemplateUI>;
};

export default UploadTemplateContainer;

const UploadTemplateUI = styled.section`
  flex-shrink: 0;
  width: calc(100vw - 28.6rem);
  height: 100vh;
`;
