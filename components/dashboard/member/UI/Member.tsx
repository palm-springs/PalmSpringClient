'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { CharmMenuMeatballIcon, IcUserIcon } from '@/public/icons';
import { MemberExampleImg } from '@/public/images';
import { MemberProps } from '@/types/member';

import Manager from './Manager';
import Pending from './Pending';
// import Manager from './Manager';
// import Pending from './Pending';

const Member = (props: MemberProps) => {
  const { profilePicUrl, name, status, position, email } = props;
  return (
    <>
      {status === '관리자' ? (
        <MemberContainer>
          <MemberInnerContent>
            <Test>
              <NameBox className="manager">
                {profilePicUrl ? (
                  // <Image src={profilePicUrl} alt="member profile photo" width={36} height={36} />
                  //후에 멤버 프로필 이미지의 url이 생기면 사용할 예정
                  <Image src={MemberExampleImg} alt="member profile photo" width={36} height={36} />
                ) : (
                  <Image src={MemberExampleImg} alt="member profile photo" width={36} height={36} />
                )}
                <Name> {name} </Name>
                <Manager />
              </NameBox>
              <Position> {position} </Position>
              <Email> {email} </Email>
            </Test>
            <MenuBtn>
              <CharmMenuMeatballIcon />
            </MenuBtn>
          </MemberInnerContent>
        </MemberContainer>
      ) : status === '수락대기중' ? (
        <MemberContainer>
          <MemberInnerContent>
            <Test>
              <NameBox>
                <IcUserIcon />
                <Email>{email} </Email>
                <Pending />
              </NameBox>
            </Test>
            <MenuBtn>
              <CharmMenuMeatballIcon />
            </MenuBtn>
          </MemberInnerContent>
        </MemberContainer>
      ) : (
        <MemberContainer>
          <MemberInnerContent>
            <Test>
              <NameBox className="manager">
                {profilePicUrl ? (
                  // <Image src={profilePicUrl} alt="member profile photo" width={36} height={36} />
                  //후에 멤버 프로필 이미지의 url이 생기면 사용할 예정
                  <Image src={MemberExampleImg} alt="member profile photo" width={36} height={36} />
                ) : (
                  <Image src={MemberExampleImg} alt="member profile photo" width={36} height={36} />
                )}
                <Name> {name} </Name>
              </NameBox>
              <Position> {position} </Position>
              <Email> {email} </Email>
            </Test>
            <MenuBtn>
              <CharmMenuMeatballIcon />
            </MenuBtn>
          </MemberInnerContent>
        </MemberContainer>
      )}
    </>
  );
};

export default Member;

const Test = styled.div`
  display: flex;
  align-items: center;
`;

const MemberContainer = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_400};

  width: 100%;
  height: 5.2rem;
`;

const MemberInnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 109rem;
`;

const NameBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  margin-right: 2rem;
  &.manager {
    width: 19rem;
  }
`;

const Name = styled.div`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};
`;

const Position = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  margin-right: 2rem;
  width: 8.4rem;
  height: 1.7rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;

  color: ${({ theme }) => theme.colors.grey_700};
`;

const Email = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;

const MenuBtn = styled.button``;
