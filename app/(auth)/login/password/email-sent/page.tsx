import { Suspense } from 'react';

import PasswordEmailSentLanding from '@/components/auth/login/password/email-sent/PasswordEmailSentLanding';

const page = () => {
  return (
    <Suspense>
      <PasswordEmailSentLanding />
    </Suspense>
  );
};

export default page;
