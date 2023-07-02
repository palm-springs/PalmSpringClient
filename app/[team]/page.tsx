'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

function Page() {
  const router = useRouter();

  return <div onClick={() => router.push('/@teamName/author/hg')}>page</div>;
}

export default Page;
