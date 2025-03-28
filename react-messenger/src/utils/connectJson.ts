import usersData from '@/data/users.json';
import { Message } from '@/type/message';

export const connectJson = (msg: Message) => {
  for (const section of usersData) {
    if (msg.type === 'user' && section.users) {
      const user = section.users.find((u) => u.id === msg.id);
      if (user) {
        return {
          name: user.name,
          profileImg: user.profileImg,
          ...msg,
        };
      }
    }

    if (msg.type === 'group' && section.groups) {
      const group = section.groups.find((g) => g.id === msg.id);
      if (group) {
        return {
          name: group.groupName,
          memberCount: group.memberCount,
          profileImg: group.profileImg,
          ...msg,
        };
      }
    }
  }

  return msg;
};
