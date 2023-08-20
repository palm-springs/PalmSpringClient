'use client';

import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useParams, usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';

import ModalPortal from '@/components/common/ModalPortal';
import DashboardDeleteModal from '@/components/common/ui/DashboardDeleteModal';
import { UpdateArticleProps } from '@/types/article';

interface editorProps {
  handleOnClickArticleDraft: () => void;
  handleOnClickArticlePublish: () => void;
  handleOnClickPageDraft: () => void;
  handleOnClickPagePublish: () => void;
  handleUpdateArticleContent?: () => void;
  currentState?: string;
}

const SaveEditorContentButton = (props: editorProps) => {
  const [isModal, setIsModal] = useState(false);
  const {
    handleOnClickArticleDraft,
    handleOnClickArticlePublish,
    handleOnClickPageDraft,
    handleOnClickPagePublish,
    handleUpdateArticleContent,
    currentState,
  } = props;
  const { team } = useParams();
  const router = useRouter();

  const notify = () =>
    toast.success('글이 임시저장 되었습니다.', {
      id: 'draft saved',
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

  const handleDraftSaveButton = () => {
    handleOnClickArticleDraft();
    notify();
  };

  const handlePageDraftSaveButton = () => {
    handleOnClickPageDraft();
    notify();
  };
  const modalOpenHandler = () => {
    setIsModal(!isModal);
    document.body.style.overflow = 'hidden';
    router.push(`/${team}/dashboard/upload`);
  };

  const modalCloseHandler = () => {
    setIsModal(false);
    document.body.style.overflow = 'visible';
  };

  switch (usePathname()) {
    case `/${team}/editor/article`:
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
          <ButtonContainer>
            <BottomWrapper>
              <ExitButton type="button" onClick={modalOpenHandler}>
                나가기
              </ExitButton>
              <TemporarySaveButton type="button" onClick={handleDraftSaveButton}>
                임시저장
              </TemporarySaveButton>
              {currentState === 'edit' ? (
                <SaveButton type="button" onClick={handleUpdateArticleContent}>
                  수정하기
                </SaveButton>
              ) : (
                <SaveButton type="button" onClick={handleOnClickArticlePublish}>
                  발행하기
                </SaveButton>
              )}
            </BottomWrapper>
          </ButtonContainer>
          {isModal && (
            <ModalPortal>
              <DashboardDeleteModal
                text={'저장하지 않고 나가시겠어요?'}
                subText={'저장하지 않고 페이지를 벗어나는 경우,'}
                lineBreaking={'지금까지 작성한 내용이 모두 사라집니다.'}
                leftButtonText={'돌아가기'}
                rightButtonText={'나가기'}
                leftHandler={modalCloseHandler}
              />
            </ModalPortal>
          )}
        </>
      );
    case `/${team}/editor/page`:
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
          <ButtonContainer>
            <BottomWrapper>
              <ExitButton type="button" onClick={modalOpenHandler}>
                나가기
              </ExitButton>
              <TemporarySaveButton type="button" onClick={handlePageDraftSaveButton}>
                임시저장
              </TemporarySaveButton>
              <SaveButton type="button" onClick={handleOnClickPagePublish}>
                발행하기
              </SaveButton>
            </BottomWrapper>
          </ButtonContainer>
          {isModal && (
            <ModalPortal>
              <DashboardDeleteModal
                text={'저장하지 않고 나가시겠어요?'}
                subText={'저장하지 않고 페이지를 벗어나는 경우,'}
                lineBreaking={'지금까지 작성한 내용이 모두 사라집니다.'}
                leftButtonText={'돌아가기'}
                rightButtonText={'나가기'}
                leftHandler={modalCloseHandler}
              />
            </ModalPortal>
          )}
        </>
      );
    default:
      break;
  }
};

export default SaveEditorContentButton;

const BottomWrapper = styled.div`
  margin-left: 35.9rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  border-top: 1px solid #eee;
  background: ${({ theme }) => theme.colors.grey_0};
  width: 100vw;
  height: 6.4rem;
`;

const ExitButton = styled.button`
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

const TemporarySaveButton = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-left: 48.5rem;
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
  margin-left: 0.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_900};
  padding: 1rem 2rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
  font-family: ${({ theme }) => theme.fonts.Button_medium};
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_800};
    width: 9.6rem;
    height: 3.6rem;
  }
`;
