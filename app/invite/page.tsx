import React from 'react';

import AuthRequired from '@/components/auth/AuthRequired';
import InviteAcceptLanding from '@/components/invite/InviteLanding';

const page = () => {
  return (
    <AuthRequired>
      <InviteAcceptLanding />
    </AuthRequired>
  );
};

export default page;
