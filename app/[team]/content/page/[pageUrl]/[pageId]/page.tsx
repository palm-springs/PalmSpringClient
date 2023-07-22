'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import PageTemplate from '@/components/content/ui/PageTemplate';
import { useGetPageDetail } from '@/hooks/blog';
const ContentPage = () => {
  const { team, pageUrl } = useParams();

  const res = useGetPageDetail(team, pageUrl);

  if (!res) return <LoadingLottie width={10} height={10} fit />;
  return <PageTemplate data={res.data} />;
};

export default ContentPage;
