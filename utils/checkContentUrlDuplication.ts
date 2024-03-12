import { Dispatch, SetStateAction } from 'react';
import { debounce } from 'lodash-es';

import { getCheckContentUrlDuplication } from '@/api/article';

const CheckContentUrlDuplication = debounce(
  async (blogUrl: string, addressValue: string, setState: Dispatch<SetStateAction<boolean | null>>) => {
    setState(null);
    if (addressValue === '') {
      return;
    } else {
      const { data } = await getCheckContentUrlDuplication(blogUrl, addressValue);
      setState(data);
    }
  },
  500,
);

export default CheckContentUrlDuplication;
