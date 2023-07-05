'use client';

import React from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
  const { pageType } = useParams();

  return <div>{pageType}</div>;
};

export default Page;
