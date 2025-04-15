export type Message = {
  id: number;
  type: 'user' | 'group';
  messages: MessageItem[];
  unreadCount?: number;
};

export type MessageItem = {
  id: string | number;
  type: 'text' | 'image';
  content: string;
  time: string;
  sender?: number;
};
