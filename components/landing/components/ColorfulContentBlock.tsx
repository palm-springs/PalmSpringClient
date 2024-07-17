import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import framerMotionProps from '../props/framerMotionProps';

interface ColorfulContentBlockProps {
  backgroundcolor: string;
  chipBackgroundcolor: string;
  chipColor: string;
  chipText: string;
  titleColor: string;
  titleText: string;
  descriptionColor: string;
  descriptionText?: string;
  isComingsoon: boolean;
  children?: ReactNode;
}

const ColorfulContentBlock = (prop: ColorfulContentBlockProps) => {
  return (
    <ColorfulContentSuperContainer backgroundcolor={prop.backgroundcolor}>
      <ColorfulContentContainer {...framerMotionProps}>
        <ColorfulContentChipContainer>
          {prop.isComingsoon && (
            <ColorfulContentChip backgroundcolor={prop.chipBackgroundcolor} color={'#fff'}>
              Coming Soon!
            </ColorfulContentChip>
          )}
          <ColorfulContentChip
            backgroundcolor={
              prop.isComingsoon ? addTransparencyToRgba(prop.chipBackgroundcolor, 0.3) : prop.chipBackgroundcolor
            }
            color={prop.chipColor}>
            {prop.chipText}
          </ColorfulContentChip>
        </ColorfulContentChipContainer>
        <ColorfulContentTitle color={prop.titleColor}>{prop.titleText}</ColorfulContentTitle>
        {prop.descriptionText && (
          <ColorfulContentDescription color={prop.descriptionColor}>{prop.descriptionText}</ColorfulContentDescription>
        )}
        {prop.children && (
          <ColorfulContentChildrenContainer color={prop.descriptionColor}>
            {prop.children}
          </ColorfulContentChildrenContainer>
        )}
      </ColorfulContentContainer>
    </ColorfulContentSuperContainer>
  );
};

export default ColorfulContentBlock;

function addTransparencyToRgba(rgbaString: string, alpha: number) {
  // 정규식을 사용하여 rgba 값에서 r, g, b 값을 추출
  const rgbaRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)\)$/;
  const match = rgbaString.match(rgbaRegex);

  if (match) {
    // 정규식 매치 결과에서 r, g, b 값 추출
    const r = match[1];
    const g = match[2];
    const b = match[3];

    // 새로운 rgba 문자열 반환
    return `rgba(${r},${g},${b},${alpha})`;
  } else {
    throw new Error('Invalid rgba string');
  }
}

const flexDefaultSetting = `
    display: flex;
    align-items: center;
`;
const ColorfulContentSuperContainer = styled.div<{ backgroundcolor: string }>`
  background: ${(props) => props.backgroundcolor && props.backgroundcolor};
  padding: 100px 0 140px 0;
  width: 100%;
  * {
    white-space: pre-wrap;
  }
  @media (max-width: 767px) {
    padding: 80px 0 100px 0;
  }
`;
const ColorfulContentContainer = styled(motion.div)`
  ${flexDefaultSetting}
  flex-direction: column;
  width: 100%;
`;
const ColorfulContentChip = styled.div<{ backgroundcolor: string; color: string }>`
  display: flex;
  border-radius: 1000px;
  background: ${(props) => props.backgroundcolor && props.backgroundcolor};
  padding: 16px 32px;
  letter-spacing: -0.1px;
  color: ${(props) => props.color && props.color};
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 767px) {
    padding: 12px 24px;
    font-size: 16px;
  }
`;
const ColorfulContentTitle = styled.h2<{ color: string }>`
  margin-top: 32px;
  line-height: 1.4;
  letter-spacing: -0.8px;
  color: ${(props) => props.color && props.color};
  font-size: 44px;
  font-weight: 600;
  @media (max-width: 767px) {
    margin-top: 24px;
    letter-spacing: -0.6px;
    font-size: 36px;
  }
`;
const ColorfulContentDescription = styled.div<{ color: string }>`
  margin-top: 20px;
  line-height: 1.5;
  letter-spacing: -0.2px;
  color: ${(props) => props.color && props.color};
  font-size: 28px;
  @media (max-width: 767px) {
    letter-spacing: -0.1px;
    font-size: 18px;
  }
`;
const ColorfulContentChipContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const ColorfulContentChildrenContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  padding: 0 20px;
  width: 100vw;
  color: ${(props) => props.color && props.color};
  @media (max-width: 767px) {
    width: 100%;
  }
`;
