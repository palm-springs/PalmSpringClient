import React, { Suspense } from 'react';

import AuthRequired from '@/components/auth/AuthRequired';
import LoginSuccessLanding from '@/components/create-blog/success/LoginSuccessLanding';

const LoginSuccessPage = () => {
  return (
    <Suspense>
      <AuthRequired>
        <LoginSuccessLanding />
      </AuthRequired>
    </Suspense>
  );
};

export default LoginSuccessPage;
