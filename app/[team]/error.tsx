'use client'; // Error components must be Client Components

import { useEffect } from 'react';

import NotFound from '@/app/not-found';

export default function Error({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  return <NotFound />;
}
