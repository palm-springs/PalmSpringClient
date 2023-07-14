export const useGetLiteralCategoryList = (data: Response<CategoryListProps>) => data.data.map(({ name }) => name);
