import { Dispatch, SetStateAction } from 'react';
import { debounce } from 'lodash-es';

import { getCheckArticleUrlDuplication } from '@/api/article';

const CheckArticleDuplication = debounce(
  async (blogUrl: string, addressValue: string, setState: Dispatch<SetStateAction<boolean | null>>) => {
    setState(null);
    if (addressValue === '') {
      return;
    } else {
      const { data } = await getCheckArticleUrlDuplication(blogUrl, addressValue);
      console.log(data);
      setState(data);
    }
  },
  500,
);

export default CheckArticleDuplication;
