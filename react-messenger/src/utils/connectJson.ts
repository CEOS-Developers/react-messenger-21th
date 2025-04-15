import usersData from '@/data/users.json';
import { Message } from '@/type/message';

export const connectJson = (msg: Message) => {
  if (msg.type === 'user') {
    const allUsers = [...usersData.newFriends, ...usersData.friends];
    const user = allUsers.find((u) => u.id === msg.id);

    if (user) {
      return {
        name: user.name,
        profileImg: user.profileImg,
        ...msg,
      };
    }
  }

  if (msg.type === 'group') {
    const group = usersData.groups.find((g) => g.id === msg.id);

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
