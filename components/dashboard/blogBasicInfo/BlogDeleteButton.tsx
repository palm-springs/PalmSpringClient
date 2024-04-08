'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import ModalPortal from '@/components/common/ModalPortal';
import DashboardDeleteModal from '@/components/common/ui/DashboardDeleteModal';
import { useDeleteBlog } from '@/hooks/blog';

import { dashboardBlogDeleteState } from '../state/modalState';

const BlogInfoDeleteButton = () => {
  const { team: blogUrl } = useParams();

  const [dashboardBlogDeleteModalState, setDashboardBlogDeleteModalState] = useRecoilState(dashboardBlogDeleteState);

  const { mutate } = useDeleteBlog(String(blogUrl));

  const handleBlogDeleteButton = () => {
    mutate();
    setDashboardBlogDeleteModalState(false);
  };

  return (
    <BlogInfoDeleteButtonContainer>
      <BlogDeleteButton onClick={() => setDashboardBlogDeleteModalState(true)}>블로그 삭제</BlogDeleteButton>
      {dashboardBlogDeleteModalState && (
        <ModalPortal>
          <DashboardDeleteModal
            text="블로그를 삭제하시겠어요?"
            subText="블로그를 삭제할 시, 복구할 수 없습니다."
            leftButtonText="유지하기"
            rightButtonText="삭제하기"
            leftHandler={() => setDashboardBlogDeleteModalState(false)}
            rightHandler={handleBlogDeleteButton}
          />
        </ModalPortal>
      )}
    </BlogInfoDeleteButtonContainer>
  );
};

export default BlogInfoDeleteButton;

const BlogInfoDeleteButtonContainer = styled.div`
  margin-bottom: 6.9rem;
`;

const BlogDeleteButton = styled.p`
  ${({ theme }) => theme.fonts.Body2_Regular};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey_700};
  &:hover {
    text-decoration-line: underline;
  }
`;
