'use client';

import React from 'react';
import styled from 'styled-components';

import HeaderLogo from '../blog/HeaderLogo';
import BlogNav from '../blog/ui/BlogNav';

const BlogHeader = () => {
  const BLOG_HEADER_EXAMPLE = {
    logo: '',
    blogName: 'Palms Blog',
    navList: [
      {
        name: '피그마',
        navUrl:
          'https://www.figma.com/file/tZS8hE1DRyojfWWjY8XbrW/%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88-%EC%9E%91%EC%97%85%EA%B3%B5%EA%B0%84?type=design&node-id=1011-2021&mode=design&t=fd4v3Mc0hHiSMB5K-0',
      },
      {
        name: '문화',
        navUrl: 'culture',
      },
      {
        name: '채용',
        navUrl: 'recruit',
      },
    ],
  };

  return (
    <BlogHeaderContainer>
      <HeaderLogo logo={BLOG_HEADER_EXAMPLE.logo} blogName={BLOG_HEADER_EXAMPLE.blogName} />
      <BlogNav navList={BLOG_HEADER_EXAMPLE.navList} />
    </BlogHeaderContainer>
  );
};

export default BlogHeader;

const BlogHeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;

  backdrop-filter: blur(18px);
  z-index: 10;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_300};
  background-color: rgba(255, 255, 255, 0.75);

  padding: 1.2rem 19.2rem;
  width: 100%;
  height: 6rem;
`;
