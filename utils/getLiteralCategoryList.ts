import { Response } from '@/types/common';
import { CategoryListProps } from '@/types/dashboard';

export const getLiteralCategoryList = (data: Response<CategoryListProps>) => data.map(({ name }) => name);
