'use client';
import React from 'react';
import styled from 'styled-components';

const CategorySelect = () => {
  return (
    <CartegorySelectorContainer>
      <CategoryTitle>카테고리</CategoryTitle>
      <CategoryButtonContainer>
        <CategoryButton type="button">디자인</CategoryButton>
        <CategoryButton type="button" className="development">
          개발
        </CategoryButton>
        <CategoryButton type="button" className="teamCulture">
          팀문화
        </CategoryButton>
      </CategoryButtonContainer>
    </CartegorySelectorContainer>
  );
};

export default CategorySelect;

const CartegorySelectorContainer = styled.div`
  margin-left: 45rem;
`;

const CategoryButtonContainer = styled.div`
  display: flex;
  .development {
    margin-left: 0.8rem;
  }
  .teamCulture {
    margin-left: 0.8rem;
  }
`;

const CategoryButton = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 4rem;
  padding: 0.8rem 2rem;
  &:hover {
    border: 0.1rem solid ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.green};
  }
`;

const CategoryTitle = styled.p`
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;
