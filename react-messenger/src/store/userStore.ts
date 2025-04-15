import { create } from 'zustand';
import { getCurrentUser } from '@/utils/getCurrentUser';

type User = {
  name: string;
  id: number;
  profileImg: string;
};

type UserStore = {
  currentUser: User;
  targetUser: User;
  setTargetUser: (user: User) => void;
  switchUser: () => void;
};

export const useUserStore = create<UserStore>((set, get) => {
  const profile = getCurrentUser();

  return {
    currentUser: {
      id: profile.id,
      name: profile.name,
      profileImg: profile.profileImg,
    },
    targetUser: {
      name: '',
      id: 0,
      profileImg: '',
    },
    setTargetUser: (user) => set({ targetUser: user }),
    switchUser: () => {
      const { currentUser, targetUser } = get();
      set({
        currentUser: targetUser,
        targetUser: currentUser,
      });
    },
  };
});
