export interface HeaderProps {
  logo: string | null;
  blogName: string;
  navList: NavItem[];
}

export interface NavItem {
  id: number;
  name: string;
  navUrl: string;
  isPage: boolean;
}
