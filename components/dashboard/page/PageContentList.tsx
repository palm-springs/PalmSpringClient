'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { pageDataState } from '@/components/editor/states/atom';
import { useGetPageList } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';
import LoadingContainer from '../LoadingContainer';

import IndivPageContent from './IndivPageContent';

const PageContentList = () => {
  const { team: blogUrl } = useParams();

  const data = useGetPageList(blogUrl);

  const setPageDataState = useSetRecoilState(pageDataState);

  const [deleteContentId, setDeleteContentId] = useState<string>('');

  const router = useRouter();

  if (!data)
    return (
      <LoadingContainer>
        <LoadingLottie width={10} height={10} />
      </LoadingContainer>
    );

  return data.data.length === 0 ? (
    <EmptyLanding
      header={true}
      message1="작성된 페이지가 없어요."
      message2="새 페이지를 만들어보세요."
      buttonText="새 페이지 만들기"
      buttonClick={() => {
        router.push(`/${blogUrl}/editor/page`);
        setPageDataState((prev) => ({
          ...prev,
          title: '',
        }));
      }}
    />
  ) : (
    <DashBoardContentListContainer>
      <DashBoardContent id="컨텐츠바" content="제목" draft="상태" createdAt="작성일" />
      {data.data.map(({ id, title, createdAt, isDraft, pageUrl, isLinked }) => {
        return (
          <IndivPageContent
            key={id}
            id={id}
            blogUrl={blogUrl}
            title={title}
            isDraft={isDraft}
            isLinked={isLinked}
            pageUrl={pageUrl}
            createdAt={createdAt}
            deleteContentId={deleteContentId}
            setDeleteContentId={setDeleteContentId}
          />
        );
      })}
    </DashBoardContentListContainer>
  );
};

export default PageContentList;
