import { Response } from '@/types/common';
import { CategoryListProps } from '@/types/dashboard';

// export const getLiteralCategoryList = (data: Response<CategoryListProps[]>) => data.data.map(({ name }) => name);
export const getLiteralCategoryList = (data: Response<CategoryListProps[]>) => {
  if (data && data.data) {
    return data.data.map(({ name }) => name);
  } else {
    return [];
  }
};
