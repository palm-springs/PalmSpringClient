import React from 'react';

import ArticleTemplate from '@/components/content/ui/ArticleTemplate';
import { ContentProps } from '@/types/content';

interface BlogMetaProps {
  product: ContentProps;
}

const BlogMeta = (props: BlogMetaProps) => {
  const { product } = props;

  return <ArticleTemplate data={product} />;
};

export default BlogMeta;
