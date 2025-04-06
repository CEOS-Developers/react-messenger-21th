import { ChatPreview } from '@/schemas/chatPreview';

export const sortChatRoomByTime = (chatRooms: ChatPreview[]) => {
  return [...chatRooms].sort((a, b) => {
    const dateA = new Date(a.lastMessage.sentAt);
    const dateB = new Date(b.lastMessage.sentAt);
    return dateB.getTime() - dateA.getTime();
  });
};
