import { create } from 'zustand';

export type Page = 'friend' | 'chat' | 'openChat' | 'shop' | 'more';

interface HeaderOption {
  isSearchBarOpen: {
    [key: string]: boolean;
  };
  setIsSearchBarOpen: (page: Page, isOpen: boolean) => void;
}

export const useHeaderOption = create<HeaderOption>((set) => ({
  isSearchBarOpen: {
    friend: false,
    chat: false,
    openChat: false,
    shop: false,
    more: false,
  },
  setIsSearchBarOpen: (page, isOpen) =>
    set((state) => ({
      isSearchBarOpen: {
        ...state.isSearchBarOpen,
        [page]: isOpen,
      },
    })),
}));
