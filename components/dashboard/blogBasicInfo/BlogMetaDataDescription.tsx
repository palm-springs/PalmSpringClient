'use client';

import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { blogMetaDataState } from '../state/blogMetaData';

const BlogMetaDataDescription = () => {
  const [{ metaDescription }, setBlogMetaData] = useRecoilState(blogMetaDataState);

  const handleOnMetaDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setBlogMetaData((prev) => ({ ...prev, metaDescription: value }));
    console.log(value);
  };

  return (
    <BlogMetaDataDescriptionContainer>
      <MetaDataDescriptionTitle>메타데이터 설명</MetaDataDescriptionTitle>
      <MetaDataDescriptionTextarea
        value={metaDescription}
        placeholder="메타데이터 설명을 입력하세요"
        onChange={handleOnMetaDescriptionChange}
      />
    </BlogMetaDataDescriptionContainer>
  );
};

export default BlogMetaDataDescription;

const MetaDataDescriptionTextarea = styled.textarea`
  ${({ theme }) => theme.fonts.Body2_Regular};
  gap: 1rem;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 64.5rem;
  height: 8.6rem;
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

const MetaDataDescriptionTitle = styled.span`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin: 0.5rem 6.56rem 0.8rem 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogMetaDataDescriptionContainer = styled.div`
  display: flex;
  margin-top: 3.2rem;
`;
