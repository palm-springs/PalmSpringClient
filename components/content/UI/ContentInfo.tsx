'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { MemberExampleImg } from '@/public/images';

interface ContentInfoProps {
  title: string;
  description: string;
  writer: string;
  date: string;
}

const ContentInfo = (props: ContentInfoProps) => {
  const { title, description, writer, date } = props;
  return (
    <>
      <TitleBox>{title}</TitleBox>
      <DescriptionBox>{description}</DescriptionBox>
      <WriterInfo>
        <Image src={MemberExampleImg} alt="writer profile pic" />
        <WriterDetailBox>
          <WriterDetail>{writer}</WriterDetail>
          <WriterDetail className="date">{date}</WriterDetail>
        </WriterDetailBox>
      </WriterInfo>
    </>
  );
};

export default ContentInfo;

const TitleBox = styled.article`
  ${({ theme }) => theme.fonts.Title};
  display: flex;
  justify-content: flex-start;
  margin: 3.2rem 0 1.2rem 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const DescriptionBox = styled.article`
  ${({ theme }) => theme.fonts.Body1_Regular};
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2.8rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const WriterInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const WriterDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: flex-start;
`;

const WriterDetail = styled.div`
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_950};
  &.date {
    ${({ theme }) => theme.fonts.Body3_Regular};
    color: ${({ theme }) => theme.colors.grey_700};
  }
`;
