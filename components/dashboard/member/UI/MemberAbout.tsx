'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { MemberExample } from '@/public/images';

import MemberInfo from './MemberInfo';

interface MemberAboutProps {
  // profileSrc: string;
  name: string;
  status: string;
  position: string;
  email: string;
}

const MemberAbout = (props: MemberAboutProps) => {
  const { name, status, position, email } = props;

  return (
    <MemberAboutContainer>
      <Image src={MemberExample} alt="member profile photo" />
      <MemberInfo name={name} status={status} position={position} email={email} />
    </MemberAboutContainer>
  );
};

export default MemberAbout;

const MemberAboutContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  margin: 0 0.8rem 0 4.4rem;
`;
