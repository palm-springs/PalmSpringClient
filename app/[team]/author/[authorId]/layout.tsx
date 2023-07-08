'use client';

import React from 'react';

//블로그 컴포넌트의 header import 해올 예정

const AuthorPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default AuthorPageLayout;
