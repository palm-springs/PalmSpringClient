'use client';
import React from 'react';
import styled from 'styled-components';

import InfoInputForm from './InfoInputForm';

const CreateInfoLanding = () => {
  return (
    <CreateInfoContainer>
      <InfoContainer>
        <Title>블로그 생성하기</Title>
        <InfoInputForm />
      </InfoContainer>
    </CreateInfoContainer>
  );
};

export default CreateInfoLanding;

const CreateInfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div`
  margin: 14.4rem 0;

  width: 54rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Heading1};
  margin-bottom: 3.2rem;
`;
