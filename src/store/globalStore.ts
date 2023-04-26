import { create } from 'zustand';

export interface GlobalStore {
  loading: boolean;
}

export const globalStore = create<GlobalStore>((set) => ({
  loading: false,
}));

export default globalStore;
