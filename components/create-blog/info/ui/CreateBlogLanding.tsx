'use client';
import { useState } from 'react';
import styled from 'styled-components';

import CreateBasicInfoLanding from './CreateBasicInfoLanding';
import CreateMemberLanding from './CreateMemberLanding';
import CreateOptionInfoLanding from './CreateOptionInfoLanding';

const CreateBlogLanding = () => {
  const [progressState, setProgressState] = useState(1);
  return (
    <>
      <CreateBasicInfoLanding progressState={progressState} setProgressState={setProgressState} />
      <CreateOptionInfoLanding progressState={progressState} setProgressState={setProgressState} />
      <CreateMemberLanding progressState={progressState} />
    </>
  );
};

export default CreateBlogLanding;
