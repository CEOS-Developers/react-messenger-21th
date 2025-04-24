export type Message = {
  chatId: number;
  chatType: 'user' | 'group';
  messages: MessageItem[];
  unreadCount: number;
};

export type MessageItem = {
  messageId: number;
  messageType: 'text' | 'image';
  content: string;
  createdAt: string;
  senderId: number;
};
