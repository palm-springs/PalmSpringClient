interface ArticleProps {
  id?: number;
  thumbnail?: string;
  title: string;
  description: string;
  memberName: string;
  job?: string;
  createdAt: string;
  categoryArticleResponseDto: {
    categoryId?: number;
    categoryName: string;
  };
}
