import { Suspense } from 'react';

import AuthRequired from '@/components/auth/AuthRequired';
import EmptyLanding from '@/components/common/ui/EmptyLanding';
import DashBoardTemplate from '@/components/dashboard/DashBoardTemplate';
import TeamValidation from '@/components/no-team/TeamValidation';

const page = () => {
  return (
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
  );
};

export default page;
