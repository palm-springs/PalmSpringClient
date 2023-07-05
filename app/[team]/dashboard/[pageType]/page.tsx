'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
  const { pageType } = useParams();

  return <div>{pageType}</div>;
};

export default Page;
