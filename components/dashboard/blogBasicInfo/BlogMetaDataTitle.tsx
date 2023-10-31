'use client';

import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { blogMetaDataState } from '../state/blogMetaData';

// interface BlogMetaDataTitle {
//   metaName: string | null;
//   setMetaName: (v: string) => void;
//   readonly: boolean;
// }

const BlogMetaDataTitle = () => {
  // const { metaName, setMetaName, readonly } = props;
  const [{ title }, setBlogMetaData] = useRecoilState(blogMetaDataState);

  const handleOnMetaTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setBlogMetaData((prev) => ({ ...prev, title: value }));
  };

  return (
    <BlogMetaDataTitleContainer>
      <MetaDataTitle>메타데이터 제목</MetaDataTitle>
      <MetaDataTitleTextarea value={title} placeholder="Palmspring 기술 블로그" onChange={handleOnMetaTitleChange} />
    </BlogMetaDataTitleContainer>
  );
};

export default BlogMetaDataTitle;

const MetaDataTitleTextarea = styled.textarea`
  ${({ theme }) => theme.fonts.Body2_Regular};
  gap: 1rem;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 64.5rem;
  height: 4.6rem;
  resize: none;
  color: ${({ theme }) => theme.colors.grey_900};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;

const MetaDataTitle = styled.span`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin: 1rem 6.56rem 0.8rem 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogMetaDataTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.2rem;
`;
