import { Dispatch, SetStateAction } from 'react';
import { debounce } from 'lodash-es';

import { getCheckPageUrlDuplication } from '@/api/page';

const CheckPageDuplication = debounce(
  async (blogUrl: string, addressValue: string, setState: Dispatch<SetStateAction<boolean | null>>) => {
    setState(null);
    if (addressValue === '') {
      return;
    } else {
      const { data } = await getCheckPageUrlDuplication(blogUrl, addressValue);
      setState(data);
    }
  },
  500,
);

export default CheckPageDuplication;
