export interface ArticleProps {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  memberName: string;
  job: string;
  createdAt: string;
  categoryArticleResponseDto: {
    categoryId: number;
    categoryName: string;
  };
}

export interface CreateArticleProps {
  title: string;
  content: string;
  images: string[];
  thumbnail: string;
  categoryId: number;
  description: string;
  articleUrl: string;
}
