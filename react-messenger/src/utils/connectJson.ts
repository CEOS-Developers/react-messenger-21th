import usersData from '@/data/users.json';
import { Message } from '@/type/message';

type ConnectedChatMeta = Message & {
  name: string;
  profileImg: string;
  memberCount?: number;
};

const UNKNOWN_USER = {
  name: '알 수 없음',
  profileImg: '',
};

const allUsers = [usersData.myProfile, ...usersData.newFriends, ...usersData.friends];

export const connectJson = (msg: Message): ConnectedChatMeta => {
  if (msg.chatType === 'user') {
    const user = allUsers.find((u) => u.id === msg.targetUserId);
    return user ? { ...msg, name: user.name, profileImg: user.profileImg } : { ...msg, ...UNKNOWN_USER };
  }

  if (msg.chatType === 'group') {
    const group = usersData.groups.find((g) => g.id === msg.targetUserId);
    return group
      ? {
          ...msg,
          name: group.groupName,
          profileImg: group.profileImg,
          memberCount: group.members?.length ?? 0,
        }
      : { ...msg, ...UNKNOWN_USER };
  }

  return { ...msg, ...UNKNOWN_USER };
};
