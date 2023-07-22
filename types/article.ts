export interface SingleArticleData {
  id: number;
  thumbnail?: string;
  title: string;
  description: string;
  content: string;
  job: string;
  name: string;
  createdAt: string;
  images: string;
}

export interface ArticleData {
  id: number;
  thumbnail?: string;
  title: string;
  articleUrl: string;
  description: string;
  memberName: string;
  job: string;
  createdAt: string;
  articleCategory: {
    categoryId: number;
    categoryName: string;
  };
}

export interface CreateArticleProps {
  title: string;
  content: string;
  images: string[] | null;
  thumbnail: string | null;
  categoryId: number;
  description: string;
  articleUrl: string;
}
