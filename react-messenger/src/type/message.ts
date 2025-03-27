export type SingleMessage = {
  type: 'text' | 'image';
  content: string;
  time: string;
};

export type Message = {
  id: number;
  type: 'user' | 'group';
  messages: SingleMessage[];
  unreadCount?: number;
};
