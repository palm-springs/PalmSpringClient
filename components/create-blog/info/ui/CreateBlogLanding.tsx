'use client';
import { useState } from 'react';

import CreateBasicInfoLanding from './basicInfo/CreateBasicInfoLanding';
import CreateMemberLanding from './member/CreateMemberLanding';
import CreateOptionInfoLanding from './optionInfo/CreateOptionInfoLanding';
import ProgressDot from './ProgressDot';

const CreateBlogLanding = () => {
  const [progressState, setProgressState] = useState(1);
  return (
    <>
      <ProgressDot progress={progressState} />
      <CreateBasicInfoLanding progressState={progressState} setProgressState={setProgressState} />
      <CreateOptionInfoLanding progressState={progressState} setProgressState={setProgressState} />
      <CreateMemberLanding progressState={progressState} setProgressState={setProgressState} />
    </>
  );
};

export default CreateBlogLanding;
