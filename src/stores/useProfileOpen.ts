import { create } from 'zustand';
import { UserProfile } from '@/schemas/userProfile';

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
    snsUrl: '',
    birthday: '',
  },
  openProfile: (userProfile) => set({ isProfileOpen: true, userProfile }),
  closeProfile: () =>
    set({
      isProfileOpen: false,
      userProfile: {
        userId: null,
        username: '',
        profileImage: '',
        snsUrl: '',
        birthday: '',
      },
    }),
}));
