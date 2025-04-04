import { create } from 'zustand';
import { UserProfile } from '@/schemas/userProfile';

interface FriendListStore {
  friendList: UserProfile[];
  setFriendList: (friendList: UserProfile[]) => void;
}

export const useFriendListStore = create<FriendListStore>((set) => ({
  friendList: [],
  setFriendList: (friendList) => set({ friendList }),
}));
