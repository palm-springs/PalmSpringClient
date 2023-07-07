'use client';

import React from 'react';
import Image from 'next/image';

import { MemberPhotoImg } from '@/public/images';

const MemberProfile = () => {
  return <Image src={MemberPhotoImg} alt="member profile photo" />;
};

export default MemberProfile;
