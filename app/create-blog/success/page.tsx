import React from 'react';

import AuthRequired from '@/components/auth/AuthRequired';
import LoginSuccessLanding from '@/components/create-blog/success/LoginSuccessLanding';

const LoginSuccessPage = () => {
  return (
    <AuthRequired>
      <LoginSuccessLanding />
    </AuthRequired>
  );
};

export default LoginSuccessPage;
