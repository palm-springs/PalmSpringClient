'use client';
import { useState } from 'react';

import CreateBasicInfoLanding from './basicInfo/CreateBasicInfoLanding';
import CreateMemberLanding from './member/CreateMemberLanding';
import CreateOptionInfoLanding from './optionInfo/CreateOptionInfoLanding';
import ProgressDot from './ProgressDot';

const CreateBlogLanding = () => {
  return (
    <>
      <ProgressDot />
      <CreateBasicInfoLanding />
      <CreateOptionInfoLanding />
      <CreateMemberLanding />
    </>
  );
};

export default CreateBlogLanding;
