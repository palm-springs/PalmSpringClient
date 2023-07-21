export interface HeaderProps {
  logo: string | null;
  blogName: string;
  navList: NavItem[];
}

export interface NavItem {
  name: string;
  navUrl: string;
  isPage: boolean;
}
