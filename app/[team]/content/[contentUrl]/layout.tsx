//header 와 footer 넣을 예정

'use client';

import React from 'react';

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default ContentLayout;
