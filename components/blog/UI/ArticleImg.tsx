'use client';

import React from 'react';
import Image from 'next/image';

import { ArticleExampleImg } from '@/public/images';

const ArticleImg = () => {
  return (
    <>
      <Image src={ArticleExampleImg} alt="article image" />
    </>
  );
};

export default ArticleImg;
