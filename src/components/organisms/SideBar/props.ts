import { RouteConfig, RoutesSelection } from '@/routes';

export interface SideBarProps {
  isCollapsed: boolean;
  items: RoutesSelection[];
}

export interface OpenItemProps {
  name: string;
  icon: React.ReactElement;
  toPath: string;
  currentPath: string;
  isSub?: boolean;
}

export interface ClosedItemProps {
  name: string;
  icon: React.ReactElement;
  toPath: string;
  currentPath: string;
}

export interface SectionItemProps {
  isCollapsed: boolean;
  routes: RouteConfig[];
  currentPath: string;
  sectionName?: string;
}

export interface HeaderProps {
  isCollapsed: boolean;
}

export interface SectionProps {
  sectionName?: string;
  isCollapsed: boolean;
}
