'use client';
import { redirect } from 'next/navigation';

import client from '@/api';
import { getRefreshToken } from '@/api/auth';
import { getUserInfoAfterLogin } from '@/api/dashboard';
import LandingPage from '@/components/landing/LandingPage';

const Home = () => {
  return <LandingPage />;
};

export default Home;
