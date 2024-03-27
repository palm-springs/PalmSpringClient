import { Suspense } from 'react';

import SignupLanding from '@/components/auth/sign-up/SignupLanding';

const page = () => {
  return (
    <Suspense>
      <SignupLanding />
    </Suspense>
  );
};

export default page;
