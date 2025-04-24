// utils/connectJson.ts
import usersData from '@/data/users.json';
import { Message } from '@/type/message';

type ConnectedChatMeta = Message & {
  name: string;
  profileImg: string;
  memberCount?: number;
};

export const connectJson = (msg: Message): ConnectedChatMeta => {
  if (msg.chatType === 'user') {
    const allUsers = [...usersData.newFriends, ...usersData.friends];
    const user = allUsers.find((u) => u.id === msg.targetUserId);

    if (user) {
      return {
        name: user.name,
        profileImg: user.profileImg,
        ...msg,
      };
    }
  }

  if (msg.chatType === 'group') {
    const group = usersData.groups.find((g) => g.id === msg.targetUserId);

    if (group) {
      return {
        name: group.groupName,
        profileImg: group.profileImg,
        memberCount: group.memberCount,
        ...msg,
      };
    }
  }

  return {
    name: '알 수 없음',
    profileImg: '',
    ...msg,
  };
};
