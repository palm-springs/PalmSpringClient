export interface ContentProps {
  thumbnail: string | null;
  title: string;
  description: string | null;
  teamMember: {
    id: number;
    thumbnail: string | null;
    name: string;
    job: string;
    createdAt: string;
  };
  content: string;
  images: string[] | null;
}
