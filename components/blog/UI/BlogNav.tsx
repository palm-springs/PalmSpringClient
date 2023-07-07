'use client';

import React from 'react';
import styled from 'styled-components';

import PageBtn from '@/components/blog/PageBtn';

import SubscribeBtn from '../SubscribeBtn';

const BlogNav = () => {
  return (
    <BlogNavContainer>
      <PageBtn>채용</PageBtn>
      <PageBtn>인스타그램</PageBtn>
      <SubscribeBtn />
    </BlogNavContainer>
  );
};

export default BlogNav;

const BlogNavContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;
