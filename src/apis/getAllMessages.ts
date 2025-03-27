import allMessages from '@/assets/data/messages.json';

export const getAllMessages = (chatRoomId: number) => {
	return allMessages.find((chatRoom) => chatRoom.chatRoomId === chatRoomId)!;
};
