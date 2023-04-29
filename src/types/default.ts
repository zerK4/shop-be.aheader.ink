import { ReactNode } from "react";

export interface CoreConfigData {
data: {
    id?: string;
    name?: string;
    protocol?: string | null;
    base?: string | null;
    url?: string | null;
    path?: string | null;
    value?: string | null;
    redirect?: string | null;
}
  }
  
  
  export interface SidebarSection {
    name?: string;
    icon?: ReactNode;
    link?: string;
    subSidebar?: boolean;
    subLinks?: SidebarItem[];
  }
  
  export interface SidebarItem {
      name?: string;
      icon?: ReactNode;
      link?: string;
    }