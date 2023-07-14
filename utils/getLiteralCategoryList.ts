export const getLiteralCategoryList = (data: Response<CategoryListProps>) => data.data.map(({ name }) => name);
