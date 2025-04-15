export type Message = {
  id: number;
  type: 'user' | 'group';
  messages: MessageItem[];
  unreadCount?: number;
};

export type MessageItem = {
  id: string;
  type: 'text' | 'image';
  content: string;
  time: string;
  sender?: number;
};
