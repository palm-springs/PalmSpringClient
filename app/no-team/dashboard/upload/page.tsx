'use client';
import { Suspense, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import AuthRequired from '@/components/auth/AuthRequired';
import EmptyLanding from '@/components/common/ui/EmptyLanding';
import DashBoardTemplate from '@/components/dashboard/DashBoardTemplate';
import TeamValidation from '@/components/no-team/TeamValidation';
import { welcomeSignup } from '@/utils/auth';
import { checkSessionStorage } from '@/utils/checkSessionStorage';

const Page = () => {
  const sessionStorage = checkSessionStorage();
  const isFirstUser = sessionStorage?.getItem('success-signup');

  useEffect(() => {
    if (isFirstUser === 'true') {
      welcomeSignup();
      setTimeout(() => {
        sessionStorage?.removeItem('success-signup');
      }, 4000);
    }
  }, []);

  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerClassName=""
        containerStyle={{
          bottom: 80,
        }}
      />
      <Suspense>
        <AuthRequired>
          <TeamValidation>
            <DashBoardTemplate noHeader>
              <EmptyLanding
                noIcon
                message1="소속된 블로그가 없어요."
                message2="지금 하나 만들어보세요."
                buttonText="블로그 만들기"
                buttonLink="/create-blog"
                header={false}
              />
            </DashBoardTemplate>
          </TeamValidation>
        </AuthRequired>
      </Suspense>
    </>
  );
};

export default Page;
