import { Dispatch, SetStateAction } from 'react';

export interface ProgressStateProps {
  progressState: number;
  setProgressState: Dispatch<SetStateAction<number>>;
}
