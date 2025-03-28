import { create } from 'zustand';
import ProfileImg from '@/assets/svgs/home/ProfileImg.svg?url';

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

export const useUserStore = create<UserStore>((set, get) => ({
  currentUser: {
    name: '전지연',
    id: 99,
    profileImg: ProfileImg,
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
}));
