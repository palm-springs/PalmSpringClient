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
  articleUrl: string;
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
  categoryId: number | null;
  description: string;
  articleUrl: string;
}

export interface UpdateArticleProps {
  title: string;
  content: string;
  images: string[] | null;
  thumbnail: string | null;
  categoryId: number | null;
  description?: string;
  articleUrl: string;
}

export interface UpdateArticleContentProps {
  id: number;
  title: string;
  content: string;
  categoryId: number | null;
  images: string[] | null;
  description?: string;
  thumbnail: string | null;
  articleUrl: string;
}

export interface UpdateTempArticleDraftProps {
  id: number;
  title: string;
  content: string;
  images: string[] | null;
  thumbnail: string | null;
  categoryId: number | null;
  description: string | null;
  articleUrl: string;
  isPublish: boolean;
}
