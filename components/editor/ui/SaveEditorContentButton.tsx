'use client';

import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import ModalPortal from '@/components/common/ModalPortal';
import DashboardDeleteModal from '@/components/common/ui/DashboardDeleteModal';
import { useGetUpdateArticleContent } from '@/hooks/editor';
import { UpdateArticleProps } from '@/types/article';
import { UpdatePageProps } from '@/types/page';

import { articleDataState, pageDataState } from '../states/atom';

interface editorProps {
  handleOnClickDraft: () => void;
  handleOnClickPublish: () => void;
  isEdit?: boolean;
  currentState?: string;
  articleData?: UpdateArticleProps;
  pageData?: UpdatePageProps;
  pageType?: string;
  atTop: boolean;
  setAtTop: React.Dispatch<React.SetStateAction<boolean>>;
}

const SaveEditorContentButton = (props: editorProps) => {
  const { team, articleId } = useParams();
  const [isModal, setIsModal] = useState(false); // 모달 보이고 안보이고
  const [saved, setSaved] = useState(false); // 임시저장된 여부
  const { handleOnClickDraft, handleOnClickPublish, isEdit, pageType, atTop, setAtTop } = props;
  const router = useRouter();

  const articleData = useRecoilValue(articleDataState);

  const { title: articleTitle } = articleData;

  const pageData = useRecoilValue(pageDataState);

  const { title: pageTitle } = pageData;

  const notify = () =>
    toast('글이 임시저장 되었습니다.', {
      id: 'draft saved',
      style: {
        padding: '1.6rem 2rem',
        borderRadius: '3.2rem',
        background: '#343A40',
        color: '#fff',
        fontSize: '1.4rem',
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: '400',
        letterSpacing: '-0.028rem',
      },
    });

  const handleDraftSaveButton = () => {
    handleOnClickDraft();
    notify();
    setSaved(true); // 임시저장 버튼 누르면 저장 상태값 저장하기
  };

  const modalOpenHandler = () => {
    if (!saved) {
      setIsModal(!isModal);
      document.body.style.overflow = 'hidden';
    } else {
      router.back();
    }
  };

  const modalCloseHandler = () => {
    setIsModal(false);
    document.body.style.overflow = 'visible';
  };

  const modalRealCloseHandler = () => {
    router.back();
  };

  useEffect(() => {
    setAtTop(false);
  }, []);

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
      <ExitButton type="button" onClick={modalOpenHandler} atTop={atTop}>
        나가기
      </ExitButton>
      <SaveButtonContainer>
        {isEdit ? (
          <NoneTemporary type="button" />
        ) : (
          <TemporarySaveButton type="button" onClick={handleDraftSaveButton} atTop={atTop}>
            임시저장
          </TemporarySaveButton>
        )}
        {pageType === 'article' ? (
          <SaveButton type="button" onClick={handleOnClickPublish} disabled={articleTitle === ''}>
            {isEdit ? '수정하기' : '발행하기'}
          </SaveButton>
        ) : (
          <SaveButton type="button" onClick={handleOnClickPublish} disabled={pageTitle === ''}>
            {isEdit ? '수정하기' : '발행하기'}
          </SaveButton>
        )}
      </SaveButtonContainer>
      {isModal && (
        <ModalPortal>
          <DashboardDeleteModal
            text={'저장하지 않고 나가시겠어요?'}
            subText={'저장하지 않고 페이지를 벗어나는 경우,'}
            lineBreaking={'지금까지 작성한 내용이 모두 사라집니다.'}
            leftButtonText={'돌아가기'}
            rightButtonText={'나가기'}
            leftHandler={modalCloseHandler}
            rightHandler={modalRealCloseHandler}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default SaveEditorContentButton;

const SaveButtonContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0.6rem;
  right: 2rem;
  z-index: 1000;
`;

const ExitButton = styled.button<{ atTop: boolean }>`
  position: fixed;
  top: 0.6rem;
  left: 2rem;
  z-index: 1000;
  margin-left: 2rem;
  border: ${({ atTop }) => (atTop ? '1px' : '0px')} solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.grey_0};
  width: 8.2rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_900};
  font-family: ${({ theme }) => theme.fonts.Body3_Regular};
  &:hover {
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.colors.grey_200};
    width: 8.2rem;
    height: 3.6rem;
  }
`;

const NoneTemporary = styled.button`
  margin-left: 48.5rem;
  padding: 1rem 2rem;
  width: 9.6rem;
  height: 3.6rem;
`;

const TemporarySaveButton = styled.button<{ atTop: boolean }>`
  display: inline-flex;
  flex-shrink: 0;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border: ${({ atTop }) => (atTop ? '1px' : '0px')} solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.grey_0};
  padding: 1rem 2rem;
  width: 9.6rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_900};
  font-family: ${({ theme }) => theme.fonts.Button_medium};

  &:hover {
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.colors.grey_200};
    width: 9.6rem;
    height: 3.6rem;
  }
`;

const SaveButton = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;

  margin-left: 0.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_900};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 1rem 2rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
  font-family: ${({ theme }) => theme.fonts.Button_medium};
  &:hover {
    background-color: ${({ theme, disabled }) => (disabled ? `none` : theme.colors.grey_800)};
  }
`;
