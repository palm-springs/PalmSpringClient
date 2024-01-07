'use client';
import { redirect } from 'next/navigation';

import client from '@/api';
import { getRefreshToken } from '@/api/auth';
import { getUserInfoAfterLogin } from '@/api/dashboard';
import LandingAuth from '@/components/auth/LandingAuth';
import LandingPage from '@/components/landing/LandingPage';

const Home = () => {
  return (
    <LandingAuth>
      <LandingPage />
    </LandingAuth>
  );
};

export default Home;
