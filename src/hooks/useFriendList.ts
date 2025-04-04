import axios from 'axios';
import { useEffect } from 'react';
import { v5 as uuidv5 } from 'uuid';

import { UserProfileWithoutId } from '@/schemas/userProfile';
import { useFriendListStore } from '@/stores/useFriendListStore';

export const useFriendList = () => {
  const { setFriendList } = useFriendListStore();

  useEffect(() => {
    const fetchFriendList = async () => {
      try {
        const response = await axios.get('/mock/friendList.json');

        const friendListWithUUID = response.data.map(
          (friend: UserProfileWithoutId) => ({
            ...friend,
            userId: `user-${uuidv5(friend.username, uuidv5.DNS)}`,
          })
        );
        setFriendList(friendListWithUUID);
      } catch (error) {
        console.error('친구 리스트를 불러오기 실패:', error);
      }
    };

    fetchFriendList();
  }, [setFriendList]);
};
