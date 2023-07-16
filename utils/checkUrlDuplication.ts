import { Dispatch, SetStateAction } from 'react';
import { debounce } from 'lodash-es';

import { getCheckBlogUrlDuplication } from '@/api/blog';

const CheckDuplication = debounce(async (addressValue: string, setState: Dispatch<SetStateAction<boolean | null>>) => {
  setState(null);
  if (addressValue === '') {
    return;
  } else {
    const data = await getCheckBlogUrlDuplication(addressValue);
    setState(data);
  }
}, 500);

export default CheckDuplication;
