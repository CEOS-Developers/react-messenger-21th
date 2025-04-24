export type Message = {
  chatId: number;
  targetUserId: number;
  chatType: 'user' | 'group';
  messages: MessageItem[];
  unreadCount: number;
};

export type MessageItem = {
  messageId: number | string;
  messageType: 'text' | 'image';
  content: string;
  createdAt: string;
  senderId: number;
};
