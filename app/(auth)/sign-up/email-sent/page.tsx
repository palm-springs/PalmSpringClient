'use client';

import { Suspense } from 'react';

import EmailSentLanding from '@/components/auth/sign-up/email-sent/EmailSentLanding';

const page = () => {
  return (
    <Suspense>
      <EmailSentLanding />
    </Suspense>
  );
};

export default page;
