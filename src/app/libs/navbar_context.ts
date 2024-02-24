import { create } from "zustand";

type NavbarContext = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

export const useNavbarContext = create<NavbarContext>()((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
