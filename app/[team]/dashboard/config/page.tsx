'use client';

import { styled } from 'styled-components';
import ImageDownIcon from '@/public/icons/image_down.svg';

const Config = () => {
  return (
    <StyledConfigWrapper>
      <StyledConfigTitle>블로그 설정</StyledConfigTitle>
      <StyledConfigDetailWrapper>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <StyledConfigDetailLabel>블로그 주소</StyledConfigDetailLabel>
          <StyledBlogUrl>https://palmspring.io/@sopt</StyledBlogUrl>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <StyledConfigDetailLabel>블로그 이름</StyledConfigDetailLabel>
          <StyledBlogNameInput placeholder="Palmspring 기술 블로그" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <StyledConfigDetailLabel>
            블로그 로고 이미지<StyledLogoImgCaption>000*000 JPEG (이미지 규격 가이드)</StyledLogoImgCaption>
          </StyledConfigDetailLabel>
          <StyledLogoImgInputLabel type="logo">
            <input type="file" id="logo_input" />
            <ImageDownIcon />
            <span>파일 업로드</span>
          </StyledLogoImgInputLabel>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <StyledConfigDetailLabel>
            블로그 대문 이미지<StyledLogoImgCaption>000*000 JPEG (이미지 규격 가이드)</StyledLogoImgCaption>
          </StyledConfigDetailLabel>
          <StyledLogoImgInputLabel type="main">
            <input type="file" id="logo_input" />
            <ImageDownIcon />
            <span>파일 업로드</span>
          </StyledLogoImgInputLabel>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <StyledConfigDetailLabel>
            블로그 설명<StyledLogoImgCaption>블로그의 메인 홈에 나타나는 블로그의 설명입니다.</StyledLogoImgCaption>
          </StyledConfigDetailLabel>
          <StyledBlogDescription placeholder="블로그 설명을 입력하세요" />
        </div>
      </StyledConfigDetailWrapper>
    </StyledConfigWrapper>
  );
};

export default Config;

const StyledConfigWrapper = styled.section`
  margin-left: 4.5rem;
  margin-right: 4.5rem;
  margin-top: 3.75rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 501px;
`;

const StyledConfigTitle = styled.span`
  ${({ theme }) => theme.TypeSystem.Heading1};
`;

const StyledConfigDetailWrapper = styled.section`
  display: flex;
  padding: 1rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--dashboard-inputfield-gap, 2rem);
  margin-top: 1.5rem;
`;

const StyledConfigDetailLabel = styled.span`
  ${({ theme }) => theme.TypeSystem.Body2_semibold};
  color: ${({ theme }) => theme.GreyStyle.Grey950};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const StyledBlogUrl = styled.span`
  color: ${({ theme }) => theme.GreyStyle.Grey700};
  ${({ theme }) => theme.TypeSystem.Body2_regular};
`;

const StyledBlogNameInput = styled.input`
  display: inline-flex;
  padding: 0.625rem 0.75rem;
  align-items: flex-start;
  gap: 0.625rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--color-grey-400, #dee2e6);
  background: #fff;
  &::placeholder {
    ${({ theme }) => theme.TypeSystem.Body2_regular};
    color: ${({ theme }) => theme.GreyStyle.Grey950};
  }
`;

const StyledLogoImgCaption = styled.span`
  color: ${({ theme }) => theme.GreyStyle.Grey700};
  ${({ theme }) => theme.TypeSystem.Caption};
  padding-left: 0.5rem;
`;

const StyledLogoImgInputLabel = styled.label`
  width: 31.25rem;
  height: ${({ type }) => (type === 'logo' ? '4.5625rem' : '8.75rem')};
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: var(--color-grey-200, #f1f3f5);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    display: none;
    &::file-selector-button {
      display: none;
    }
  }
  span {
    margin-left: 0.38rem;
    ${({ theme }) => theme.TypeSystem.Body2_semibold};
    color: ${({ theme }) => theme.GreyStyle.Grey700};
  }
`;

const StyledBlogDescription = styled.textarea`
  display: flex;
  width: 31.25rem;
  padding: 0.625rem 0.75rem 3.125rem 0.75rem;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.GreyStyle.Grey400};
`;
