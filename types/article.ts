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
  images: string[];
  thumbnail: string;
  categoryId: number;
  description: string;
  articleUrl: string;
}
