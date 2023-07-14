import { Dispatch, SetStateAction } from 'react';

interface ProgressStateProps {
  progressState: number;
  setProgressState: Dispatch<SetStateAction<number>>;
}
