import { Suspense } from 'react';

import LoginLanding from '@/components/auth/LoginLanding';

const page = () => {
  return (
    <Suspense>
      <LoginLanding
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
        clientSecret={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string}
      />
    </Suspense>
  );
};

export default page;
