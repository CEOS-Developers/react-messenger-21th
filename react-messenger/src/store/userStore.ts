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
  groupMembers: User[];
  isSwitched: boolean;
  setTargetUser: (user: User) => void;
  setGroupMembers: (members: User[]) => void;
  toggleView: () => void;
  resetView: () => void;
};

export const useUserStore = create<UserStore>((set, get) => {
  const profile = getCurrentUser();

  return {
    currentUser: profile,
    targetUser: { id: 0, name: '', profileImg: '' },
    groupMembers: [],
    isSwitched: false,

    setTargetUser: (user) => set({ targetUser: user }),
    setGroupMembers: (members) => set({ groupMembers: members }),

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
