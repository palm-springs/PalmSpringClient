'use client';

import React from 'react';
import styled from 'styled-components';

const AuthorDescription = () => {
  return (
    <AuthorDescriptionContainer>
      안녕하십니까. 저는 팜스프링의 프로덕 디자이너 김성은입니다. 팜스프링을 디자인했습니다. 쩔죠?
    </AuthorDescriptionContainer>
  );
};

export default AuthorDescription;

const AuthorDescriptionContainer = styled.div`
  ${({ theme }) => theme.fonts.Body1_Regular};
  margin-top: 1.6rem;
  width: 60rem;
  text-align: center;
  word-break: keep-all;
  color: ${({ theme }) => theme.colors.grey_700};
`;
