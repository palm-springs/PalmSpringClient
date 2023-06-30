'use client';
// routing : "/"
import styled from 'styled-components';

export default function Home() {
  return <Title>메인입니다</Title>;
}

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.pink_300};
  font-size: 10rem;
`;
