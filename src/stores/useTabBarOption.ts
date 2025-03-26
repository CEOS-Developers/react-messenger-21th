import { create } from 'zustand';
import { TabBarOptionList } from '@/types/TabBar.types';

interface TabBarOption {
  selectedTab: TabBarOptionList;
  setSelectedTab: (tab: TabBarOptionList) => void;
}

export const useTabBarOption = create<TabBarOption>((set) => ({
  selectedTab: '친구',
  setSelectedTab: (tab) => set({ selectedTab: tab }),
}));
