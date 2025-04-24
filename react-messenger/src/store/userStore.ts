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
  isSwitched: boolean; // ✅ 현재 시점을 전환했는지 여부
  setTargetUser: (user: User) => void;
  toggleView: () => void; // ✅ 시점만 바꿔줌
  resetView: () => void; // ✅ 원래 사용자로 복귀
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
