import React, { Suspense } from 'react';

import AuthRequired from '@/components/auth/AuthRequired';
import InviteAcceptLanding from '@/components/invite/InviteLanding';

const page = () => {
  return (
    <Suspense>
      <AuthRequired>
        <InviteAcceptLanding />
      </AuthRequired>
    </Suspense>
  );
};

export default page;
