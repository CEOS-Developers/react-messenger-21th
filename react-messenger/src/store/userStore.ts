import { create } from 'zustand';
import { getCurrentUser } from '@/utils/getCurrentUser';

export type User = {
  id: number;
  name: string;
  profileImg: string;
};

export type UserStore = {
  currentUser: User;
  targetUser: User;
  isSwitched: boolean;
  setTargetUser: (user: User) => void;
  toggleView: () => void;
  resetView: () => void;
};

export const useUserStore = create<UserStore>((set, get) => {
  const profile = getCurrentUser();

  return {
    currentUser: profile,
    targetUser: { id: 0, name: '', profileImg: '' },
    isSwitched: false,

    setTargetUser: (user) => set({ targetUser: user }),

    toggleView: () => {
      const current = get();
      set({ isSwitched: !current.isSwitched });
    },

    resetView: () => {
      const originalUser = getCurrentUser();
      set({
        currentUser: originalUser,
        isSwitched: false,
      });
    },
  };
});
