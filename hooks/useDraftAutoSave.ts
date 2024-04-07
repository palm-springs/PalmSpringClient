'use client';

//에디터 작성이 멈추면 몇 초뒤 자동으로 임시저장 할 수 있는 코드

import { useEffect, useState } from 'react';

export const useDraftAutoSave = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
