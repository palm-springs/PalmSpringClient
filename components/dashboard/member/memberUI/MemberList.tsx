'use client';

import React from 'react';
import styled from 'styled-components';

import { MemberProps } from '@/types/member';

import Member from './Member';

const MemberList = () => {
  const MEMBER_LIST: MemberProps[] = [
    {
      profilePicUrl: 'MemberExampleImg',
      name: '김서홍윤',
      status: '관리자',
      position: 'Product Manager',
      email: 'baek789@naver.com',
    },
    {
      name: '김서윤',
      status: '',
      position: 'UX Designer',
      email: 'baek789@naver.com',
    },
    {
      name: '김김김',
      status: '',
      position: 'Product Manager',
      email: 'baek789@naver.com',
    },
    {
      name: '이이이',
      status: '',
      position: 'Product Manager',
      email: 'baek789@naver.com',
    },
    {
      name: '김김김',
      status: '수락대기중',
      position: 'Product Manager',
      email: 'baek789@naver.com',
    },
  ];

  const TEST = MEMBER_LIST.map((eachItem) => {
    return (
      <Member
        key={eachItem.email}
        profilePicUrl={eachItem.profilePicUrl}
        name={eachItem.name}
        status={eachItem.status}
        position={eachItem.position}
        email={eachItem.email}
      />
    );
  });

  return <MemberListContainer>{TEST}</MemberListContainer>;
};

export default MemberList;

const MemberListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
