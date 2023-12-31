import { atom } from 'recoil';

import { BlogMetaData } from '@/types/blogMetaData';

export const blogMetaDataState = atom<BlogMetaData>({
  key: 'blogMetaDataState',
  default: {
    metaThumbnail: '',
    metaName: '',
    metaDescription: '',
  },
});
