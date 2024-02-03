import { Dispatch, SetStateAction } from 'react';
import { debounce } from 'lodash-es';

import { getCheckBlogUrlDuplication } from '@/api/blog';
import { RESERVED_URL_LIST } from '@/constants/reservedUrl';

const CheckDuplication = debounce(
  async (
    addressValue: string,
    setInvalidUrlState: Dispatch<SetStateAction<boolean | null>>,
    setIsDuplicateState: Dispatch<SetStateAction<boolean | null>>,
  ) => {
    if (addressValue === '') {
      return;
    }
    // 예약 url 확인
    const isReserved = checkReservedUrl(addressValue, setInvalidUrlState);
    if (isReserved) {
      return;
    } else {
      // 중복 확인
      await checkDuplication(addressValue, setIsDuplicateState);
    }
  },
  500,
);

const checkReservedUrl = (addressValue: string, setState: Dispatch<SetStateAction<boolean | null>>) => {
  const isReservedUrl = RESERVED_URL_LIST.includes(addressValue);
  setState(null);
  if (isReservedUrl) {
    setState(true);
  } else {
    setState(false);
  }
  return isReservedUrl;
};

const checkDuplication = async (addressValue: string, setState: Dispatch<SetStateAction<boolean | null>>) => {
  setState(null);
  const { data } = await getCheckBlogUrlDuplication(addressValue);
  setState(data);
};

export default CheckDuplication;
