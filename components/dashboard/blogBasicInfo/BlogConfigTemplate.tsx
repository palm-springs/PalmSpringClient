import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { putBlogConfig } from '@/api/blog';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetBlogInfo } from '@/hooks/blog';
import usePerMissionPolicy from '@/hooks/usePermissionPolicy';
import { getImageMultipartData } from '@/utils/getImageMultipartData';

import { blogMetaDataState } from '../state/blogMetaData';

import BlogInfoDeleteButton from './BlogDeleteButton';
import BlogDescribeText from './BlogDescribeText';
import BlogLogoImage from './BlogLogoImage';
import BlogMainImage from './BlogMainImge';
import BlogMetaDataDesciption from './BlogMetaDataDescription';
import BlogMetaDataDescription from './BlogMetaDataDescription';
import BlogMetaDataImage from './BlogMetaDataImage';
import MetaDataPreview from './BlogMetaDataPreview';
import BlogMetaDataTitle from './BlogMetaDataTitle';
import BlogName from './BlogName';
import BlogSubHeading from './BlogSubHeading';
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

  const { modifyBlogInfo, deleteBlog } = usePerMissionPolicy();

  const [blogConfig, setBlogConfig] = useState<BlogConfigProps>({
    blogName: '블로그 이름을 불러오는 중입니다...',
    blogLogoImage: null,
    blogMainImage: null,
    blogDescribeText: '블로그 설명을 불러오는 중입니다...',
  });
  const [blogMetaConfig, setBlogMetaConfig] = useRecoilState(blogMetaDataState);

  const sucessNotify = () =>
    toast.success('블로그 정보를 수정했습니다!', {
      id: 'blog config modified',
      style: {
        padding: '1.6rem 2rem',
        borderRadius: '3.2rem',
        background: '#343A40',
        color: '#fff',
        fontSize: '1.4rem',
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: '-0.028rem',
      },
    });

  const errorNotify = () =>
    toast.error('블로그 정보를 수정에 실패했습니다!', {
      id: 'error on modifying blog config',
      style: {
        padding: '1.6rem 2rem',
        borderRadius: '3.2rem',
        background: '#343A40',
        color: '#fff',
        fontSize: '1.4rem',
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: '-0.028rem',
      },
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
    setBlogMetaConfig((pre) => ({
      ...pre,
      metaThumbnail: res.data.metaThumbnail,
      metaName: res.data.metaDescription,
      metaDescription: res.data.metaDescription,
    }));
  }, [res]);

  if (!res || !res.data) return <LoadingLottie width={10} height={10} />;

  const postBlogConfig = async () => {
    const logoS3 =
      blogConfig.blogLogoImage &&
      typeof blogConfig.blogLogoImage !== 'string' &&
      ((await getImageMultipartData(blogConfig.blogLogoImage)) as string);

    const logoImage = logoS3 ? logoS3 : blogConfig.blogLogoImage;

    const mainS3 =
      blogConfig.blogMainImage &&
      typeof blogConfig.blogMainImage !== 'string' &&
      ((await getImageMultipartData(blogConfig.blogMainImage)) as string);

    const mainImage = mainS3 ? mainS3 : blogConfig.blogMainImage;
    // 기본적으로 로고 이미지가 null인 경우, string인 경우, File인 경우가 있다.

    try {
      // axios를 이용한 post 요청. 헤더를 multipart/form-data 로 한다.
      await putBlogConfig(team, {
        name: blogConfig.blogName,
        description: blogConfig.blogDescribeText,
        logo: typeof logoImage === 'string' ? logoImage : null,
        thumbnail: typeof mainImage === 'string' ? mainImage : null,
        metaThumbnail: blogMetaConfig.metaThumbnail,
        metaName: blogMetaConfig.metaName,
        metaDescription: blogMetaConfig.metaDescription,
      });
      sucessNotify();
    } catch (err) {
      errorNotify();
    }
  };
  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerClassName=""
        containerStyle={{
          bottom: 50,
        }}
      />
      <BlogBasicInfoContainer>
        <BlogSubHeading mainHeaderText={'기본설정'} />
        <BlogUrl blogUrl={res.data.url} />
        <BlogName
          readonly={!modifyBlogInfo}
          blogName={blogConfig.blogName}
          setBlogName={(v) =>
            setBlogConfig((prev) => ({
              ...prev,
              blogName: v,
            }))
          }
        />
        <BlogLogoImage
          readonly={!modifyBlogInfo}
          setFile={(v) =>
            setBlogConfig((prev) => ({
              ...prev,
              blogLogoImage: v,
            }))
          }
          file={blogConfig.blogLogoImage as string}
        />
        <BlogMainImage
          readonly={!modifyBlogInfo}
          setFile={(v) =>
            setBlogConfig((prev) => ({
              ...prev,
              blogMainImage: v,
            }))
          }
          file={blogConfig.blogMainImage as string}
        />
        <BlogDescribeText
          readonly={!modifyBlogInfo}
          describeText={blogConfig.blogDescribeText}
          setDescribeText={(v) =>
            setBlogConfig((prev) => ({
              ...prev,
              blogDescribeText: v,
            }))
          }
        />
        <BlogSubHeading
          mainHeaderText={'메타데이터 설정'}
          subHeaderText={'카카오톡, 페이스북 등으로 블로그의 링크를 공유할 때 뜨는 제목, 설명, 이미지 정보입니다'}
        />
        <BlogMetaDataImage />
        <BlogMetaDataTitle />
        <BlogMetaDataDescription />
        <MetaDataPreview blogUrl={res.data.url} />
        {deleteBlog && <BlogInfoDeleteButton />}
        {modifyBlogInfo && (
          <BlogSaveButton type="button" disabled={blogConfig.blogName === ''} onClick={postBlogConfig}>
            저장하기
          </BlogSaveButton>
        )}
      </BlogBasicInfoContainer>
    </>
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
