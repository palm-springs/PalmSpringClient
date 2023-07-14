'use client';

import React from 'react';
import Image from 'next/image';

import { AuthorProfileExampleImg } from '@/public/images';

const AuthorProfile = () => {
  return <Image src={AuthorProfileExampleImg} alt="author profile image example" />;
};

export default AuthorProfile;
