import { Suspense } from 'react';

import PasswordLanding from '@/components/auth/login/password/PasswordLanding';

const page = () => {
  return (
    <Suspense>
      <PasswordLanding />
    </Suspense>
  );
};

export default page;
