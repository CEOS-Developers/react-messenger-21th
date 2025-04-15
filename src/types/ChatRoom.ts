import { Message } from './Message';

type ChatRoom = {
  userIds: string[];
  title: string;
  messages: Message[];
  isPinned: boolean;
  lastReadMessageId: string | null;
};

export type { ChatRoom };
