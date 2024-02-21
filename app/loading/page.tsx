'use client';
import { Suspense } from 'react';

import LoadingLanding from '@/components/loading/LoadingLanding';

const LoadingPage = () => {
  return (
    <Suspense>
      <LoadingLanding
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
        clientSecret={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string}
      />
    </Suspense>
  );
};

export default LoadingPage;
