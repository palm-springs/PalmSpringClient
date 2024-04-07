import React, { Suspense } from 'react';

import PasswordResetLanding from '@/components/auth/login/password/reset/PasswordResetLanding';

const page = () => {
  return (
    <Suspense>
      <PasswordResetLanding />
    </Suspense>
  );
};

export default page;
