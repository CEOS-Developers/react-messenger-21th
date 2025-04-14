import * as Types from '@/types';

type DateGroupEntry = {
  dateStr: string;
  messages: Types.Message[];
};

type UserGroupEntry = {
  senderId: string;
  messages: Types.Message[];
};

function groupMessagesByDate(messages: Types.Message[]): DateGroupEntry[] {
  const grouped: DateGroupEntry[] = [];

  messages.forEach((msg) => {
    const dateStr = new Date(msg.timestamp).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });

    const curGroup = grouped.find((group) => group.dateStr === dateStr);

    if (curGroup) {
      curGroup.messages.push(msg);
    } else {
      grouped.push({
        dateStr: dateStr,
        messages: [msg],
      });
    }
  });

  return grouped;
}

function groupMessagesByConsecutiveUser(messages: Types.Message[]): UserGroupEntry[] {
  const grouped: UserGroupEntry[] = [];

  messages.forEach((msg) => {
    const lastGroup = grouped.at(-1);

    if (lastGroup && lastGroup.senderId === msg.senderId) {
      lastGroup.messages.push(msg);
    } else {
      grouped.push({
        senderId: msg.senderId,
        messages: [msg],
      });
    }
  });

  return grouped;
}

export { groupMessagesByDate, groupMessagesByConsecutiveUser };
