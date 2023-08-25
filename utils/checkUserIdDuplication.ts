import { Dispatch, SetStateAction } from 'react';
import { debounce } from 'lodash-es';

import { getCheckUserIdDuplication } from '@/api/user';

const CheckUserIdDuplication = debounce(
  async (blogUrl: string, userIdValue: string, setState: Dispatch<SetStateAction<boolean | null>>) => {
    setState(null);
    if (userIdValue === '') {
      return;
    } else {
      const { data } = await getCheckUserIdDuplication(blogUrl, userIdValue);
      setState(data);
    }
  },
  500,
);

export default CheckUserIdDuplication;
