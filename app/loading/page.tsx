'use client';
import LoadingLanding from '@/components/loading/LoadingLanding';

const LoadingPage = () => {
  return (
    <LoadingLanding
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
      clientSecret={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string}
    />
  );
};

export default LoadingPage;
