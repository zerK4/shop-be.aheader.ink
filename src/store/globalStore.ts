import { CoreConfigData, SidebarSection } from '@/types/default';
import { create } from 'zustand';

export interface GlobalStore {
  loading: boolean;
  sidebarLeftActive: boolean;
  projectsDropDownActive: boolean;
  currentPage: CoreConfigData['data'];
  timePeriodOpen: boolean;
  selectedTimePeriod: string;
  subSidebarLeftActive: boolean;
  currentNavLinkData: SidebarSection;
  createCategoryActive: boolean;
  apiResponse?: {
    message?: string;
    data?: any;
    status?: boolean;
  };
}

export const globalStore = create<GlobalStore>((set) => ({
  loading: false,
  sidebarLeftActive: false,
  projectsDropDownActive: false,
  currentPage: {},
  timePeriodOpen: false,
  selectedTimePeriod: 'Day',
  subSidebarLeftActive: false,
  currentNavLinkData: {},
  createCategoryActive: false,
  apiResponse: {},
}));

export default globalStore;
