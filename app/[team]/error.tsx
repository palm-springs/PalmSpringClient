'use client'; // Error components must be Client Components

import { useEffect } from 'react';

import NotFound from '@/app/not-found';

export default function Error({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log('12221212');
  }, [error]);

  return <NotFound />;
}
