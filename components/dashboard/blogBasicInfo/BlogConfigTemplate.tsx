import React, { useState } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';

import { putBlogConfig } from '@/api/blog';
import BLOG_BASIC_INFO_DATA from '@/constants/blogBasicInfoData';
import { getImageMultipartData } from '@/utils/getImageMultipartData';

import Line from '../components/ui/Line';

import BlogInfoDeleteButton from './BlogDeleteButton';
import BlogDescribeText from './BlogDescribeText';
import BlogLogoImage from './BlogLogoImage';
import BlogMainImage from './BlogMainImge';
import BlogName from './BlogName';
import BlogUrl from './BlogUrl';

interface BlogConfigProps {
  blogName: string;
  blogLogoImage: File | null;
  blogMainImage: File | null;
  blogDescribeText: string;
}

const BlogConfigTemplate = () => {
  const [blogConfig, setBlogConfig] = useState<BlogConfigProps>({
    blogName: BLOG_BASIC_INFO_DATA.myBlog.blogName,
    blogLogoImage: null,
    blogMainImage: null,
    blogDescribeText: '',
  });

  const postBlogConfig = async () => {
    const logoS3 = blogConfig.blogLogoImage && (await getImageMultipartData(blogConfig.blogLogoImage));

    const imageArray = new FormData();

    // imageArray.append(logoS3);

    const mainS3 = blogConfig.blogMainImage && (await getImageMultipartData(blogConfig.blogMainImage));

    try {
      // axios를 이용한 post 요청. 헤더를 multipart/form-data 로 한다.
      await putBlogConfig('helloworld', {
        name: blogConfig.blogName,
        // description: blogConfig.blogDescribeText,
        // logo: logoS3,
        // thumbnail: mainS3,
      });
      alert('게시글이 등록되었습니다');
    } catch (err) {
      alert(err || '게시글 등록에 실패했습니다');
    }
  };
  return (
    <>
      <Line />
      <BlogBasicInfoContainer>
        <BlogUrl />
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
        />
        <BlogMainImage
          setFile={(v) =>
            setBlogConfig((prev) => ({
              ...prev,
              blogMainImage: v,
            }))
          }
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
    </>
  );
};

export default BlogConfigTemplate;

const BlogBasicInfoContainer = styled.div`
  padding-left: 4rem;
  width: 100%;
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
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
