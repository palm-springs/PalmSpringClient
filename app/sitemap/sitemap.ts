import { MetadataRoute } from 'next';

import {
  // getBlogArticleList,
  getBlogCategoryList,
  getBlogHeaderInfo,
  // getBlogListInfo,
  getMemberListInfo,
} from '@/api/blogHome';

export const dynamic = 'force-dynamic';

const getBlogListInfo = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/view/blog/site`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const getBlogArticleList = async (blogUrl: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/view/article/${blogUrl}/list`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export async function generateSitemaps() {
  const { data: blogListInfo } = await getBlogListInfo();
  return blogListInfo.map(({ id }) => ({
    id,
  }));
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  // params id랑 블로그 매칭
  const { data: blogListInfo } = await getBlogListInfo();
  const team = blogListInfo.find(({ id: teamId }) => teamId === id)?.blogUrl;

  // 블로그별 정보 get
  const { data: articles } = await getBlogArticleList(String(team));
  // const { data: pages } = await getBlogHeaderInfo(String(team));
  // const { data: categorys } = await getBlogCategoryList(String(team));
  // const { data: members } = await getMemberListInfo(String(team));

  // 각 url 동적 생성
  const articleUrlList = articles.map(({ articleUrl }) => ({
    url: `https://${team}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}/${articleUrl}`,
    lastModified: new Date(),
  }));

  // const pageUrlList: { url: string; lastModified: Date }[] = [];
  // pages.navList.forEach(({ isPage, navUrl }) => {
  //   if (isPage)
  //     pageUrlList.push({
  //       url: `https://${team}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}/${navUrl}`,
  //       lastModified: new Date(),
  //     });
  // });

  // const categoryUrlList = categorys.map(({ categoryUrl }) => ({
  //   url: `https://${team}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}/category/${categoryUrl}`,
  //   lastModified: new Date(),
  // }));

  // const memberUrlList = members.map((nickname) => ({
  //   url: `https://${team}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}/author/${nickname}`,
  //   lastModified: new Date(),
  // }));

  // 사이트맵 url return
  return [
    {
      url: `https://${team}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}`,
      lastModified: new Date(),
      priority: 1,
    },
    ...articleUrlList,
    // ...pageUrlList,
    // ...categoryUrlList,
    // ...memberUrlList,
  ];
}
