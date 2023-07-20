import Lottie from 'lottie-react';
import styled from 'styled-components';

import LoaderLottie from '@/public/lottie/loaderLottie.json';

interface LoadingProps {
  width: number;
  height: number;
}
/**
 *
 * @param width number (rem 단위)
 * @param height number (rem 단위)
 * @returns
 */
const LoadingLottie = (props: LoadingProps) => {
  const { width, height } = props;
  return (
    <LoadingLottieContainer $width={width} $height={height}>
      <Lottie animationData={LoaderLottie} className="lottie" />
    </LoadingLottieContainer>
  );
};

export default LoadingLottie;

const LoadingLottieContainer = styled.div<{ $width: number; $height: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  & > .lottie {
    width: ${({ $width }) => `${$width}rem`};
    height: ${({ $height }) => `${$height}rem`};
  }
`;
