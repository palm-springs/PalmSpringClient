'use client';
import { Suspense } from 'react';

import LoginLanding from '@/components/auth/login/LoginLanding';

const page = () => {
  return (
    <Suspense>
      <LoginLanding />
    </Suspense>
  );
};

export default page;
