import { ChatRoomMessage } from '@/schemas/chatRoomMessage';

export const sortMessageByDate = (messages: ChatRoomMessage[]) => {
  return [...messages].sort((a, b) => {
    const dateA = new Date(a.sentAt);
    const dateB = new Date(b.sentAt);
    return dateA.getTime() - dateB.getTime();
  });
};
