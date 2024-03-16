import { MetadataRoute } from 'next';

import { getBlogArticleList, getBlogCategoryList, getBlogHeaderInfo } from '@/api/blogHome';
import { getMemberList } from '@/api/dashboard';

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 925 }, { id: 234 }];
}

export default async function sitemap({ id, team }: { id: number; team: string }): Promise<MetadataRoute.Sitemap> {
  const { data: articles } = await getBlogArticleList('official', null);
  const { data: pages } = await getBlogHeaderInfo('official');
  const { data: categorys } = await getBlogCategoryList('official');
  //   const { data: members } = await getMemberList('official');

  const articleUrlList = articles.map(({ articleUrl }) => ({
    url: `https://${team}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}/${articleUrl}`,
    lastModified: new Date(),
  }));

  const pageUrlList = pages.navList.map(({ isPage, navUrl }) => {
    if (!isPage) return;
    return { url: `https://${team}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}/${navUrl}`, lastModified: new Date() };
  });

  const categoryUrlList = categorys.map(({ categoryUrl }) => ({
    url: `https://${team}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}/category/${categoryUrl}`,
    lastModified: new Date(),
  }));

  //   const memberUrlList = members.map(({ nickname }) => ({
  //     url: `https://${team}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}/author/${nickname}`,
  //     lastModified: new Date(),
  //   }));

  return [
    {
      url: `https://${team}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...articleUrlList,
    ...pageUrlList,
    ...categoryUrlList,
    // ...memberUrlList,
  ];
}
