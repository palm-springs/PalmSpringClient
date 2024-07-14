import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/*/dashboard/basicuserinfo',
        '/*/dashboard/blogconfignav',
        '/*/dashboard/category',
        '/*/dashboard/member',
        '/*/dashboard/nav',
        '/*/dashboard/navigation',
        '/*/dashboard/page',
        '/*/dashboard/subscriber',
        '/*/dashboard/tempsaved',
        '/*/dashboard/upload',
        '/*/dashboard/statistics',
        '/*/dashboard/statistics/*/',
        '/*/editor/article',
        '/*/editor/page',
      ],
    },
    sitemap: 'https://palms.blog/sitemap.xml',
  };
}
