import { create } from 'zustand';

export interface GlobalStore {
  loading: boolean;
  userPopup: boolean;
  activeNavLink: string;
  sidebarActive: boolean;
  userNoEmail: boolean;
  apiResponse: {
    message?: string;
    status?: string;
    data?: any;
  };
}

export const globalStore = create<GlobalStore>((set) => ({
  loading: false,
  userPopup: false,
  activeNavLink: 'Dashboard',
  sidebarActive: true,
  userNoEmail: false,
  apiResponse: {
    message: '',
    status: '',
    data: undefined,
  },
}));

export default globalStore;
