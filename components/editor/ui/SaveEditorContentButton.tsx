'use client';

import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import ModalPortal from '@/components/common/ModalPortal';
import DashboardDeleteModal from '@/components/common/ui/DashboardDeleteModal';

import { articleDataState, isSaved, pageDataState } from '../states/atom';

interface editorProps {
  handleOnClickDraft: () => void;
  handleOnClickPublish: () => void;
  isEdit?: boolean;
  currentState?: string;
  isDraftSave: boolean;
  pageType?: string;
  atTop: boolean;
  setAtTop: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDraftSave: React.Dispatch<React.SetStateAction<boolean>>;
  onPaste?: () => void;
}

const SaveEditorContentButton = (props: editorProps) => {
  const [isModal, setIsModal] = useState(false); // 모달 보이고 안보이고
  const [saved, setSaved] = useRecoilState(isSaved); // 임시저장된 여부
  const { handleOnClickDraft, handleOnClickPublish, isEdit, pageType, atTop, setAtTop, isDraftSave, setIsDraftSave } =
    props;
  const router = useRouter();

  const [articleData, setArticleData] = useRecoilState(articleDataState); // 아티클 초기 타이틀 -> 복사 -> 새로운 title 갈아끼기
  const [pageData, setPageData] = useRecoilState(pageDataState);

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

  useEffect(() => {
    setAtTop(false);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    // 새로고침 막기(조건 부여 가능)
    if (!saved) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [saved]);

  const handleDraftSaveButton = () => {
    handleOnClickDraft();
    notify();
    setSaved(true);
    setIsDraftSave(true);
  };

  const modalOpenHandler = () => {
    if (!saved) {
      if (!isDraftSave) {
        setIsModal(!isModal);
        document.body.style.overflow = 'hidden';
      } else {
        router.back();
      }
    } else {
      router.back();
    }
  };

  const modalCloseHandler = () => {
    setIsModal(false);
    document.body.style.overflow = 'visible';
  };

  const modalRealCloseHandler = () => {
    document.body.style.overflow = 'visible';
    router.back();
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
      <ExitButton type="button" onClick={modalOpenHandler} atTop={atTop}>
        나가기
      </ExitButton>
      <SaveButtonContainer atTop={atTop}>
        {isEdit ? (
          <NoneTemporary type="button" />
        ) : (
          <>
            {isDraftSave && <DraftAlertText>임시저장됨 ✓ </DraftAlertText>}
            <TemporarySaveButton
              type="button"
              onClick={handleDraftSaveButton}
              atTop={atTop}
              disabled={
                pageType === 'article'
                  ? articleData.title === '' && articleData.content === ''
                  : pageData.title === '' && pageData.content === ''
              }>
              임시저장
            </TemporarySaveButton>
          </>
        )}
        {pageType === 'article' ? (
          <SaveButton type="button" onClick={handleOnClickPublish} disabled={articleData.title === ''}>
            {isEdit ? '수정하기' : '발행하기'}
          </SaveButton>
        ) : (
          <SaveButton type="button" onClick={handleOnClickPublish} disabled={pageData.title === ''}>
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

const DraftAlertText = styled.span`
  margin: 1.19rem 2rem 0 0;
  color: ${({ theme }) => theme.colors.grey_1000};
  font-family: ${({ theme }) => theme.fonts.Body3_Regular};
`;

const SaveButtonContainer = styled.div<{ atTop: boolean }>`
  display: flex;
  position: fixed;
  top: 0.6rem;
  right: 2rem;
  z-index: 1000;

  @media screen and (max-width: 1360px) {
    top: ${({ atTop }) => (atTop ? '5.8rem' : '0.6rem')};
  }
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
  @media screen and (max-width: 1360px) {
    top: ${({ atTop }) => (atTop ? '5.8rem' : '0.6rem')};
  }
`;

const NoneTemporary = styled.button``;

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
    background-color: ${({ theme, disabled }) => (disabled ? `none` : theme.colors.grey_200)};

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
