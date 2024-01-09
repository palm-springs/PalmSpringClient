export interface PageData {
  title: string;
  content: string;
  images: string[] | null;
  thumbnail: string;
}

export interface CreatePageProps {
  title: string;
  content: string;
  images: string[] | null;
  thumbnail: string | null;
  pageUrl: string;
}

export interface UpdatePageProps {
  title: string;
  content: string;
  images: string[] | null;
  thumbnail: string | null;
  pageUrl: string;
  pageId: number;
}

export interface UpdatePageContentProps {
  id: number;
  thumbnail: string | null;
  title: string;
  content: string;
  images: string[] | null;
  pageUrl: string;
}

export interface UpdateTempPageDraftProps {
  id: number;
  title: string;
  content: string;
  images: string[] | null;
  thumbnail: string | null;
  pageUrl: string;
  isPublish: boolean;
}
