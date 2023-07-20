import React from 'react';
import styled from 'styled-components';

const DeleteButton = () => {
  return (
    <DeleteButtonContainer>
      <LeavingPalms>팜스프링 탈퇴하기</LeavingPalms>
      <LeavingBlog>블로그에서 나가기</LeavingBlog>
    </DeleteButtonContainer>
  );
};

export default DeleteButton;

const DeleteButtonContainer = styled.div`
  display: flex;
  margin-top: 19.9rem;
  padding-bottom: 6.3rem;
`;

const LeavingPalms = styled.p`
  text-decoration-line: underline;
  letter-spacing: -0.0048rem;
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;

const LeavingBlog = styled.p`
  margin-left: 3.3rem;
  text-decoration-line: underline;
  letter-spacing: -0.0048rem;
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;
