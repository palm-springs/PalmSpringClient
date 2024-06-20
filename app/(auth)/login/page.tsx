import { Suspense } from 'react';

import LoginLanding from '@/components/auth/login/LoginLanding';

const page = () => {
  console.log('here');
  return (
    <Suspense>
      <LoginLanding />
    </Suspense>
  );
};

export default page;
