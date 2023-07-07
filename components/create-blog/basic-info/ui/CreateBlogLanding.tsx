'use client';
import React from 'react';
import styled from 'styled-components';

import InfoInputForm from './InfoInputForm';

const CreateBlogInfoLanding = () => {
  return (
    <CreateBlogInfoContainer>
      <InfoContainer>
        <Title>블로그 생성하기</Title>
        <InfoInputForm />
      </InfoContainer>
    </CreateBlogInfoContainer>
  );
};

export default CreateBlogInfoLanding;

const CreateBlogInfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div`
  margin: 18.4rem 0 14.4rem;

  width: 54rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Heading1};
  margin-bottom: 3.2rem;
`;
