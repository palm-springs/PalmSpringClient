'use client';
import { useState } from 'react';

import CreateBasicInfoLanding from './CreateBasicInfoLanding';
import CreateMemberLanding from './CreateMemberLanding';
import CreateOptionInfoLanding from './CreateOptionInfoLanding';
import ProgressDot from './ProgressDot';

const CreateBlogLanding = () => {
  const [progressState, setProgressState] = useState(1);
  return (
    <>
      <ProgressDot progress={progressState} />
      <CreateBasicInfoLanding progressState={progressState} setProgressState={setProgressState} />
      <CreateOptionInfoLanding progressState={progressState} setProgressState={setProgressState} />
      <CreateMemberLanding progressState={progressState} />
    </>
  );
};

export default CreateBlogLanding;
