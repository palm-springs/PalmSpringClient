'use client';
import { useState } from 'react';

import CreateBasicInfoLanding from './basicInfo/CreateBasicInfoLanding';
import CreateOptionInfoLanding from './optionInfo/CreateOptionInfoLanding';
import CreateMemberLanding from './CreateMemberLanding';
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
