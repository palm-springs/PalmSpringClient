import React from 'react';

import LoginLanding from '@/components/auth/LoginLanding';
import RequestAccessToken from '@/components/auth/RequestAccessToken';

const page = () => {
  return (
    <RequestAccessToken
      clientId={process.env.GOOGLE_CLIENT_ID as string}
      clientSecret={process.env.GOOGLE_CLIENT_SECRET as string}>
      <LoginLanding />
    </RequestAccessToken>
  );
};

export default page;
