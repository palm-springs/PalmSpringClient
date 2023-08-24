import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'next/navigation';
import { styled } from 'styled-components';

import { putBlogConfig } from '@/api/blog';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetBlogInfo } from '@/hooks/blog';
import { getImageMultipartData } from '@/utils/getImageMultipartData';

import BlogInfoDeleteButton from './BlogDeleteButton';
import BlogDescribeText from './BlogDescribeText';
import BlogLogoImage from './BlogLogoImage';
import BlogMainImage from './BlogMainImge';
import BlogName from './BlogName';
import BlogUrl from './BlogUrl';

interface BlogConfigProps {
  blogName: string;
  blogLogoImage: File | string | null;
  blogMainImage: File | string | null;
  blogDescribeText: string;
}

const BlogConfigTemplate = () => {
  const { team } = useParams();

  const res = useGetBlogInfo(team);

  const [blogConfig, setBlogConfig] = useState<BlogConfigProps>({
    blogName: '블로그 이름을 불러오는 중입니다...',
    blogLogoImage: null,
    blogMainImage: null,
    blogDescribeText: '블로그 설명을 불러오는 중입니다...',
  });

  useEffect(() => {
    if (!res || !res.data) return;
    setBlogConfig((prev) => ({
      ...prev,
      blogName: res.data.name,
      blogLogoImage: res.data.logo,
      blogDescribeText: res.data.description,
      blogMainImage: res.data.thumbnail,
    }));
  }, [res]);

  if (!res || !res.data) return <LoadingLottie width={10} height={10} />;

  const postBlogConfig = async () => {
    const logoS3 =
      blogConfig.blogLogoImage &&
      typeof blogConfig.blogLogoImage !== 'string' &&
      ((await getImageMultipartData(blogConfig.blogLogoImage, team)) as string);

    const logoImage = logoS3 ? logoS3 : blogConfig.blogLogoImage;

    const mainS3 =
      blogConfig.blogMainImage &&
      typeof blogConfig.blogMainImage !== 'string' &&
      ((await getImageMultipartData(blogConfig.blogMainImage, team)) as string);

    const mainImage = mainS3 ? mainS3 : blogConfig.blogMainImage;
    // 기본적으로 로고 이미지가 null인 경우, string인 경우, File인 경우가 있다.

    try {
      // axios를 이용한 post 요청. 헤더를 multipart/form-data 로 한다.
      await putBlogConfig(team, {
        name: blogConfig.blogName,
        description: blogConfig.blogDescribeText,
        logo: typeof logoImage === 'string' ? logoImage : null,
        thumbnail: typeof mainImage === 'string' ? mainImage : null,
      });
      alert('블로그 정보를 수정했습니다!');
    } catch (err) {
      alert('정보 수정에 실패했습니다..');
    }
  };
  return (
    <BlogBasicInfoContainer>
      <BlogUrl blogUrl={res.data.url} />
      <BlogName
        blogName={blogConfig.blogName}
        setBlogName={(v) =>
          setBlogConfig((prev) => ({
            ...prev,
            blogName: v,
          }))
        }
      />
      <BlogLogoImage
        setFile={(v) =>
          setBlogConfig((prev) => ({
            ...prev,
            blogLogoImage: v,
          }))
        }
        file={blogConfig.blogLogoImage as string}
      />
      <BlogMainImage
        setFile={(v) =>
          setBlogConfig((prev) => ({
            ...prev,
            blogMainImage: v,
          }))
        }
        file={blogConfig.blogMainImage as string}
      />
      <BlogDescribeText
        describeText={blogConfig.blogDescribeText}
        setDescribeText={(v) =>
          setBlogConfig((prev) => ({
            ...prev,
            blogDescribeText: v,
          }))
        }
      />
      <BlogInfoDeleteButton />
      <BlogSaveButton type="button" disabled={blogConfig.blogName === ''} onClick={postBlogConfig}>
        저장하기
      </BlogSaveButton>
    </BlogBasicInfoContainer>
  );
};

export default BlogConfigTemplate;

const BlogBasicInfoContainer = styled.div`
  padding-left: 4rem;
  width: 100%;
  overflow-y: scroll;
`;

const BlogSaveButton = styled.button`
  ${({ theme }) => theme.fonts.Button_medium};
  display: flex;
  position: absolute;
  top: 6.8rem;
  left: 0;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-left: 104.1rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 1rem 2rem;
  width: 9.6rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
