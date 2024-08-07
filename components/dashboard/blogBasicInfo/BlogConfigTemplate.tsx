import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { putBlogConfig } from '@/api/blog';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
// import { imageErrorCase } from '@/constants/image';
import { useGetBlogFooterInfo, useGetBlogInfo, useGetBlogTemplateInfo } from '@/hooks/blog';
import { useUpdateBlogConfig } from '@/hooks/dashboard';
import usePerMissionPolicy from '@/hooks/usePermissionPolicy';
// import { getImageMultipartData } from '@/utils/getImageMultipartData';
// import { imageSizeErrorNotify } from '@/utils/imageSizeErrorNotify';
import { createToast } from '@/utils/lib/toast';

import { blogMetaDataState } from '../state/blogMetaData';

import BlogInfoDeleteButton from './BlogDeleteButton';
import BlogDescribeText from './BlogDescribeText';
import BlogFooterCompany from './BlogFooterCompany';
import BlogFooterDescription from './BlogFooterDescription';
import BlogLogoImage from './BlogLogoImage';
import BlogMainImage from './BlogMainImge';
import BlogMetaDataDescription from './BlogMetaDataDescription';
import BlogMetaDataImage from './BlogMetaDataImage';
import MetaDataPreview from './BlogMetaDataPreview';
import BlogMetaDataTitle from './BlogMetaDataTitle';
import BlogName from './BlogName';
import BlogSubHeading from './BlogSubHeading';
import BlogTemplateDesign from './BlogTemplateDesign';
import BlogUrl from './BlogUrl';

interface BlogConfigProps {
  blogName: string;
  blogLogoImage: string | null;
  blogMainImage: string | null;
  blogDescribeText: string;
  ownerName: string;
  ownerDescription: string;
  templateName: string;
}

const BlogConfigTemplate = () => {
  const { team } = useParams();

  const res = useGetBlogInfo(team as string);
  const footerRes = useGetBlogFooterInfo(team as string);
  const templateRes = useGetBlogTemplateInfo(team as string);

  const { modifyBlogInfo, deleteBlog } = usePerMissionPolicy();

  const [blogConfig, setBlogConfig] = useState<BlogConfigProps>({
    blogName: '블로그 이름을 불러오는 중입니다...',
    blogLogoImage: null,
    blogMainImage: null,
    blogDescribeText: '블로그 설명을 불러오는 중입니다...',

    ownerName: '소유자/회사 이름을 불러오는 중입니다...',
    ownerDescription: '추가 정보 및 설명을 불러오는 중입니다...',

    templateName: '템플릿 내용을 불러오는 중입니다...',
  });
  const [blogMetaConfig, setBlogMetaConfig] = useRecoilState(blogMetaDataState);

  useEffect(() => {
    if (!res || !res.data || !footerRes || !footerRes.data || !templateRes || !templateRes.data) return;
    setBlogConfig((prev) => ({
      ...prev,
      blogName: res.data.name,
      blogLogoImage: res.data.logo,
      blogDescribeText: res.data.description,
      blogMainImage: res.data.thumbnail,

      ownerName: footerRes.data.ownerName,
      ownerDescription: footerRes.data.ownerInfo,

      templateName: templateRes.data.templateName,
    }));
    setBlogMetaConfig((prev) => ({
      ...prev,
      metaThumbnail: res.data.metaThumbnail,
      metaName: res.data.metaName,
      metaDescription: res.data.metaDescription,
    }));
  }, [res, footerRes, templateRes]);

  const { mutate: updateBlogConfig } = useUpdateBlogConfig(team as string, {
    name: blogConfig.blogName,
    description: blogConfig.blogDescribeText,
    logo: blogConfig.blogLogoImage,
    thumbnail: blogConfig.blogMainImage,

    footerInfo: {
      owner: blogConfig.ownerName,
      info: blogConfig.ownerDescription,
    },
    templateName: blogConfig.templateName,

    metaThumbnail: blogMetaConfig.metaThumbnail,
    metaName: blogMetaConfig.metaName,
    metaDescription: blogMetaConfig.metaDescription,
  });

  if (!res || !res.data || !footerRes || !footerRes.data || !templateRes || !templateRes.data) {
    return <LoadingLottie width={10} height={10} />;
  }

  const { name, logo, description, thumbnail, metaThumbnail, metaName, metaDescription } = res.data;
  const { ownerName, ownerInfo } = footerRes.data;
  const { templateName } = templateRes.data;

  const isChanged =
    name !== blogConfig.blogName ||
    logo !== blogConfig.blogLogoImage ||
    description !== blogConfig.blogDescribeText ||
    thumbnail !== blogConfig.blogMainImage ||
    ownerName !== blogConfig.ownerName ||
    ownerInfo !== blogConfig.ownerDescription ||
    metaThumbnail !== blogMetaConfig.metaThumbnail ||
    metaName !== blogMetaConfig.metaName ||
    metaDescription !== blogMetaConfig.metaDescription ||
    templateName !== blogConfig.templateName;

  const postBlogConfig = () => {
    updateBlogConfig();
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
        <div>
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
        </div>
        <div>
          <BlogSubHeading
            mainHeaderText={'메타데이터 설정'}
            subHeaderText={'카카오톡, 페이스북 등으로 블로그의 링크를 공유할 때 뜨는 제목, 설명, 이미지 정보입니다'}
          />
          <BlogMetaDataImage readonly={!modifyBlogInfo} />
          <BlogMetaDataTitle readonly={!modifyBlogInfo} />
          <BlogMetaDataDescription readonly={!modifyBlogInfo} />
          <MetaDataPreview blogUrl={res.data.url} />
        </div>
        <div>
          <BlogSubHeading mainHeaderText={'Footer 설정'} subHeaderText={'블로그 하단의 Footer에서 보이는 정보입니다'} />
          <BlogFooterCompany
            readonly={!modifyBlogInfo}
            ownerName={blogConfig.ownerName}
            setOwnerName={(v) =>
              setBlogConfig((prev) => ({
                ...prev,
                ownerName: v,
              }))
            }
          />
          <BlogFooterDescription
            readonly={!modifyBlogInfo}
            ownerDescription={blogConfig.ownerDescription}
            setOwnerDescription={(v) =>
              setBlogConfig((prev) => ({
                ...prev,
                ownerDescription: v,
              }))
            }
          />
        </div>
        {process.env.NODE_ENV == 'development' && (
          <div>
            <BlogSubHeading
              mainHeaderText={'레이아웃 템플릿 설정'}
              subHeaderText={'블로그 디자인 레이아웃 템플릿을 설정할 수 있습니다.'}
            />
            <BlogTemplateDesign
              readonly={!modifyBlogInfo}
              templateName={blogConfig.templateName}
              setTemplateName={(v) =>
                setBlogConfig((prev) => ({
                  ...prev,
                  templateName: v,
                }))
              }
            />
          </div>
        )}
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
  display: flex;
  flex-direction: column;
  gap: 12rem;
  padding: 0 4rem 20rem 4rem;
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
