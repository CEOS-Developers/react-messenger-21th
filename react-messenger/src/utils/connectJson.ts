import usersData from '@/data/users.json';
import { Message } from '@/type/message';

export const connectJson = (msg: Message) => {
  if (msg.chatType === 'user') {
    const allUsers = [...usersData.newFriends, ...usersData.friends];
    const user = allUsers.find((u) => u.id === msg.chatId);

    if (user) {
      return {
        name: user.name,
        profileImg: user.profileImg,
        ...msg,
      };
    }
  }

  if (msg.chatType === 'group') {
    const group = usersData.groups.find((g) => g.id === msg.chatId);

    if (group) {
      return {
        name: group.groupName,
        profileImg: group.profileImg,
        memberCount: group.memberCount,
        ...msg,
      };
    }
  }

  return msg;
};
