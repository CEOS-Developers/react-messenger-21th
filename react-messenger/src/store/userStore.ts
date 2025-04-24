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
  viewIndex: number;
  chatType: 'user' | 'group';
  setTargetUser: (user: User) => void;
  setGroupMembers: (members: User[]) => void;
  setChatType: (type: 'user' | 'group') => void;
  toggleView: () => void;
  resetView: () => void;
};

export const useUserStore = create<UserStore>((set, get) => {
  const profile = getCurrentUser();

  return {
    currentUser: profile,
    targetUser: { id: 0, name: '', profileImg: '' },
    groupMembers: [],
    viewIndex: 0,
    chatType: 'user', // 기본값 1:1

    setTargetUser: (user) => set({ targetUser: user }),
    setGroupMembers: (members) => set({ groupMembers: members }),
    setChatType: (type) => set({ chatType: type }),

    toggleView: () => {
      const { chatType, groupMembers, viewIndex, currentUser, targetUser } = get();

      if (chatType === 'group') {
        const total = 1 + groupMembers.length;
        const nextIndex = (viewIndex + 1) % total;
        set({ viewIndex: nextIndex });
      } else {
        // 1:1 채팅일 경우 currentUser <-> targetUser 전환
        set({
          currentUser: targetUser,
          targetUser: currentUser,
        });
      }
    },

    resetView: () => {
      const originalUser = getCurrentUser();
      set({
        currentUser: originalUser,
        viewIndex: 0,
        chatType: 'user',
      });
    },
  };
});
