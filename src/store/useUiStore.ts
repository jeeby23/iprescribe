import { create } from 'zustand';

interface UiState {
  isMenuOpen: boolean;
  isSidebarOpen: boolean; 
  toggleMenu: (open?: boolean) => void;
  toggleSidebar: (open?: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  isMenuOpen: false,
  isSidebarOpen: false,
  toggleMenu: (open) => set((state) => ({ isMenuOpen: open ?? !state.isMenuOpen })),
  toggleSidebar: (open) => set((state) => ({ isSidebarOpen: open ?? !state.isSidebarOpen })),
}));