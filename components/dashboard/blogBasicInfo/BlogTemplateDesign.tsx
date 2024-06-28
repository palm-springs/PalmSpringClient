'use client';

import React from 'react';
import styled from 'styled-components';

interface BlogTemplateDesignProps {
  templateName: string;
  setTemplateName: (v: string) => void;
  readonly: boolean;
}

interface AvailableTemplateDesign {
  templateName: string;
  templateDisplayName: string;
}

const availableTemplateDesignsList: AvailableTemplateDesign[] = [
  // 여기서 템플릿 목록을 관리합니다. DB에 반영되는 값은 templateName임
  {
    templateName: 'palms',
    templateDisplayName: 'palms 템플릿',
  },
  {
    templateName: 'pro-blue',
    templateDisplayName: 'Pro 템플릿 (Blue)',
  },
];

const BlogTemplateDesign = (props: BlogTemplateDesignProps) => {
  const { templateName, setTemplateName, readonly } = props;
  return (
    <TemplateDesignContainer>
      {availableTemplateDesignsList.map((e, i) => {
        return (
          <TemplateDesignItemWrapper
            key={i}
            className={templateName === e.templateName ? 'selected' : ''}
            onClick={() => !readonly && setTemplateName(e.templateName)}>
            <TemplateDesignPreview>
              <div>
                이미지가 들어갈 예정
                <br />
                background image로...
              </div>
            </TemplateDesignPreview>
            <TemplateDesignDesc>{e.templateDisplayName}</TemplateDesignDesc>
          </TemplateDesignItemWrapper>
        );
      })}
    </TemplateDesignContainer>
  );
};

export default BlogTemplateDesign;

const TemplateDesignContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3.2rem;
  width: 100%;
`;
const TemplateDesignItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &.selected {
    & > div {
      border: 2px solid #000;
    }
    & > span {
      font-weight: 600;
    }
  }
`;
const TemplateDesignPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.grey_200};
  width: 24rem;
  height: 15rem;
  color: #888;
  font-size: 1.6rem;
`;
const TemplateDesignDesc = styled.span`
  color: ${({ theme }) => theme.colors.grey_900};
  font-size: 1.6rem;
`;
