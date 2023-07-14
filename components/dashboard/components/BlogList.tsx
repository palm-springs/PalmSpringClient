import React from 'react';

import BlogListContainer from './ui/BlogListContainer';
import IndivBlog from './ui/IndivBlog';
import MakeNewBlogContainer from './ui/MakeNewBlogContainer';

const BlogList = () => {
  return (
    <BlogListContainer>
      <IndivBlog isCurrentBlog={true} innerText="팜스프링 팀블로그" />
      <IndivBlog isCurrentBlog={false} innerText="Sopt 32기" />
      <MakeNewBlogContainer />
    </BlogListContainer>
  );
};

export default BlogList;
