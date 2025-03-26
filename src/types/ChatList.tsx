import { Message } from './Message';

type ChatRoom = {
  userIds: string[];
  title: string;
  messages: Message[];
  isPinned: boolean;
  lastReadMessageId: string | null;
};

type ChatList = Record<string, ChatRoom>;

export type { ChatRoom, ChatList };
