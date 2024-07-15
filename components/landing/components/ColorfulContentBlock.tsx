import { ReactNode } from 'react';
import styled from 'styled-components';

interface ColorfulContentBlockProps {
  backgroundcolor: string;
  chipBackgroundcolor: string;
  chipColor: string;
  chipText: string;
  titleColor: string;
  titleText: string;
  descriptionColor: string;
  descriptionText: string;
  isComingsoon: boolean;
  children?: ReactNode;
}

const flexDefaultSetting = `
    display: flex;
    align-items: center;
`;

const ColorfulContent = styled.div<{ backgroundcolor: string }>`
  ${flexDefaultSetting}
  flex-direction: column;
  background: ${(props) => props.backgroundcolor && props.backgroundcolor};
  padding: 100px 0 140px 0;
  width: 100%;
  * {
    white-space: pre-wrap;
  }
`;
const ColorfulContentChip = styled.div<{ backgroundcolor: string; color: string }>`
  display: flex;
  border-radius: 1000px;
  background: ${(props) => props.backgroundcolor && props.backgroundcolor};
  padding: 16px 32px;
  color: ${(props) => props.color && props.color};
  font-size: 20px;
  font-weight: 600;
`;
const ColorfulContentTitle = styled.h2<{ color: string }>`
  margin-top: 32px;
  line-height: 1.4;
  color: ${(props) => props.color && props.color};
  font-size: 44px;
  font-weight: 600;
`;
const ColorfulContentDescription = styled.div<{ color: string }>`
  margin-top: 20px;
  line-height: 1.4;
  color: ${(props) => props.color && props.color};
  font-size: 28px;
`;
const ColorfulContentChipContainer = styled.div`
  display: flex;
  gap: 14px;
`;
const ColorfulContentChildren = styled.div<{ color: string }>`
  margin-top: 48px;
  color: ${(props) => props.color && props.color};
`;

const ColorfulContentBlock = (prop: ColorfulContentBlockProps) => {
  return (
    <ColorfulContent backgroundcolor={prop.backgroundcolor}>
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
      <ColorfulContentDescription color={prop.descriptionColor}>{prop.descriptionText}</ColorfulContentDescription>
      <ColorfulContentChildren color={prop.descriptionColor}>{prop.children}</ColorfulContentChildren>
    </ColorfulContent>
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
