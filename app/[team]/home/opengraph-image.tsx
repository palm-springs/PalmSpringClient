import { ImageResponse } from 'next/server';

import { getMetaBlogInfo } from '@/api/blog';

export const runtime = 'edge';

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { team: string } }) {
  const post = await getMetaBlogInfo(params.team);

  return new ImageResponse(
    (
      <div
        style={{
          background: `${post.data.metaThumbnail}`,
          width: '100%',
          height: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        {post.data.metaName}
      </div>
    ),
    {
      ...size,
    },
  );
}
