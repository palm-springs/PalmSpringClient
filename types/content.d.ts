interface ContentProps {
  thumbnail?: string;
  title: string;
  description: string;
  teamMember: {
    id: number;
    thumbnail?: string;
    name: string;
    job: string;
    createdAt: string;
  };
  content: string;
  images: string;
}
