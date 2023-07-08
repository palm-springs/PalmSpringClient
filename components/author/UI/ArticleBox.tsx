'use client';

import React from 'react';

import ArticleList from './ArticleList';
import ArticleListHeader from './ArticleListHeader';

const ArticleBox = () => {
  return (
    <div>
      <ArticleListHeader />
      <ArticleList />
    </div>
  );
};

export default ArticleBox;
