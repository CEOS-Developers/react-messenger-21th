export type Profile = {
  id?: number;
  name: string;
  birthday: string;
  type?: 'friend' | 'business' | 'me';
  img: string | null;
};

export type ChatMessages = {
  messageId: number;
  senderId: number;
  text: string;
  timestamp: string;
};

export type Chats = {
  date: string;
  chatMessages: ChatMessages[];
};

export type ChatRoom = {
  chatroomId: number;
  title: string;
  userId: number[];
  type: 'friend' | 'business' | 'me';
  img: string | null;
  unread?: number;
  chats: Chats[] | [];
};

export type ChatroomList = ChatRoom[];
