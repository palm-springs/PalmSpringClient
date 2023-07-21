// 선택 카테고리 별 페이지
import React from 'react';

import { getArticleList } from '@/api/article';
import { getBlogMainImg } from '@/api/blog';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

const CategoryPage = async ({ params }: { params: { category: string; team: string } }) => {
  const categoryName = decodeURI(params.category);

  const { data } = await getArticleList(params.team, '');

  console.log(data);

  const articleListData = data.filter(({ articleCategory }) => articleCategory.categoryName === categoryName);

  // const FilteredCategoryList = await getCategoryList(params.team);

  // if (!FilteredCategoryList) return <div> 로더 </div>;

  // console.log(FilteredCategoryList, '1');
  // const categoryId =
  //   FilteredCategoryList.data && FilteredCategoryList.data.find(({ name }) => name === categoryName)?.id;
  // const categoryIdString = String(categoryId);
  // console.log(categoryIdString, '2');
  const {
    data: { thumbnail, description },
  } = await getBlogMainImg(params.team);
  // console.log('3');
  // const { data: articleListData } = await getArticleList(params.team, categoryIdString);
  // console.log('4');
  return <ArticleContainer articleListData={articleListData} thumbnail={thumbnail} description={description} />;
};

export default CategoryPage;

// const CategoryPage = async ({ params }: { params: { category: string; team: string } }) => {
//   const {
//     data: { thumbnail, description },
//   } = await getBlogMainImg(params.team);
//   const { data: categoryArticleList } = await getArticleList(params.team, params.category);
//   const { data: contentInfoData } = await getContent(
//     params.team,
//     categoryArticleList[0].id && categoryArticleList[0].id,
//   );
//   const IndivContentId = categoryArticleList[0].id;
//   return (
//     <ArticleContainer
//       articleListData={categoryArticleList}
//       thumbnail={thumbnail}
//       description={description}
//       contentInfoData={contentInfoData}
//       IndivContentId={IndivContentId}
//     />
//   );
// };

// export default CategoryPage;
