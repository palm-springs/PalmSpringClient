import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { putBlogConfig } from '@/apis/blog';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { imageErrorCase } from '@/constants/image';
import { useGetBlogInfo } from '@/hooks/blog';
import usePerMissionPolicy from '@/hooks/usePermissionPolicy';
import { getImageMultipartData } from '@/utils/getImageMultipartData';
import { imageSizeErrorNotify } from '@/utils/imageSizeErrorNotify';
import { createToast } from '@/utils/lib/toast';

import { blogMetaDataState } from '../state/blogMetaData';

import BlogInfoDeleteButton from './BlogDeleteButton';
import BlogDescribeText from './BlogDescribeText';
import BlogLogoImage from './BlogLogoImage';
import BlogMainImage from './BlogMainImge';
import BlogMetaDataDescription from './BlogMetaDataDescription';
import BlogMetaDataImage from './BlogMetaDataImage';
import MetaDataPreview from './BlogMetaDataPreview';
import BlogMetaDataTitle from './BlogMetaDataTitle';
import BlogName from './BlogName';
import BlogSubHeading from './BlogSubHeading';
import BlogUrl from './BlogUrl';

interface BlogConfigProps {
  blogName: string;
  blogLogoImage: string | null;
  blogMainImage: string | null;
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

  const successNotify = createToast({
    type: 'NORMAL',
    message: '블로그 정보를 수정했습니다!',
    id: 'error on blog config modified',
  });
  const errorNotify = createToast({
    type: 'ERROR',
    message: '블로그 정보 수정에 실패했습니다!',
    id: 'error on modifying blog config',
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
    setBlogMetaConfig((prev) => ({
      ...prev,
      metaThumbnail: res.data.metaThumbnail,
      metaName: res.data.metaName,
      metaDescription: res.data.metaDescription,
    }));
  }, [res]);

  if (!res || !res.data) return <LoadingLottie width={10} height={10} />;

  const { name, logo, description, thumbnail, metaThumbnail, metaName, metaDescription } = res.data;
  const isChanged =
    name !== blogConfig.blogName ||
    logo !== blogConfig.blogLogoImage ||
    description !== blogConfig.blogDescribeText ||
    thumbnail !== blogConfig.blogMainImage ||
    metaThumbnail !== blogMetaConfig.metaThumbnail ||
    metaName !== blogMetaConfig.metaName ||
    metaDescription !== blogMetaConfig.metaDescription;

  const postBlogConfig = async () => {
    try {
      // axios를 이용한 post 요청. 헤더를 multipart/form-data 로 한다.
      await putBlogConfig(team, {
        name: blogConfig.blogName,
        description: blogConfig.blogDescribeText,
        logo: blogConfig.blogLogoImage,
        thumbnail: blogConfig.blogMainImage,
        metaThumbnail: blogMetaConfig.metaThumbnail,
        metaName: blogMetaConfig.metaName,
        metaDescription: blogMetaConfig.metaDescription,
      });
      successNotify();
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
        <BlogMetaDataImage readonly={!modifyBlogInfo} />
        <BlogMetaDataTitle readonly={!modifyBlogInfo} />
        <BlogMetaDataDescription readonly={!modifyBlogInfo} />
        <MetaDataPreview blogUrl={res.data.url} />
        {deleteBlog && <BlogInfoDeleteButton />}
        {modifyBlogInfo && (
          <BlogSaveButton type="button" disabled={blogConfig.blogName === '' || !isChanged} onClick={postBlogConfig}>
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
  overflow-x: hidden;
  /* overflow-y: scroll; */
  /* &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    border-radius: 10px;
    background-clip: padding-box;
    background-color: #2f3542;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
    background-color: grey;
  } */
`;

const BlogSaveButton = styled.button<{ disabled: boolean }>`
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
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.background_green : theme.colors.green)};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 1rem 2rem;
  width: 9.6rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};

  &:not(:disabled):hover {
    transition: 0.3s ease-out;
    background-color: ${({ theme }) => theme.colors.green_hover};
  }
`;
