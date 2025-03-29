import { create } from 'zustand';

import { UserProfile } from '@/types/Profile';

interface ProfileOpen {
  isProfileOpen: boolean;
  userProfile: UserProfile;
  openProfile: (userProfile: UserProfile) => void;
  closeProfile: () => void;
}

export const useProfileOpen = create<ProfileOpen>((set) => ({
  isProfileOpen: false,
  userProfile: {
    userId: null,
    username: '',
    profileImage: '',
  },
  openProfile: (userProfile) => set({ isProfileOpen: true, userProfile }),
  closeProfile: () =>
    set({
      isProfileOpen: false,
      userProfile: { userId: null, username: '', profileImage: '' },
    }),
}));
