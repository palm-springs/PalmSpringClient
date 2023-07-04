import React from 'react';

import LoginLanding from '@/components/auth/LoginLanding';
import RequestAccessToken from '@/components/auth/RequestAccessToken';

const page = () => {
  return (
    <LoginLanding
      clientId={process.env.GOOGLE_CLIENT_ID as string}
      clientSecret={process.env.GOOGLE_CLIENT_SECRET as string}
    />
  );
};

export default page;
