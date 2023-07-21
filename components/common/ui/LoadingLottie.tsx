import Lottie from 'lottie-react';
import styled from 'styled-components';

import LoaderLottie from '@/public/lottie/loaderLottie.json';

interface LoadingProps {
  width: number;
  height: number;
  fit?: boolean;
}
/**
 *
 * @param width number (rem 단위)
 * @param height number (rem 단위)
 * @param fit boolean (로더를 화면에 꽉 차지 않게 적용)
 * @returns
 */
const LoadingLottie = (props: LoadingProps) => {
  const { width, height, fit } = props;
  return (
    <LoadingLottieContainer $width={width} $height={height} $fit={fit}>
      <Lottie animationData={LoaderLottie} className="lottie" />
    </LoadingLottieContainer>
  );
};

export default LoadingLottie;

const LoadingLottieContainer = styled.div<{ $width: number; $height: number; $fit?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $fit }) => $fit && '100vw'};
  height: ${({ $fit }) => $fit && '100vh'};

  & > .lottie {
    width: ${({ $width }) => `${$width}rem`};
    height: ${({ $height }) => `${$height}rem`};
  }
`;
