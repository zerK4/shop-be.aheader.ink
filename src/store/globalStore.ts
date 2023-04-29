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
  newProductActive: boolean;
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
  newProductActive: false,
}));

export default globalStore;
