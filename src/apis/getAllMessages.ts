import allMessages from '@/assets/data/messages.json';
import { MessageDto, UserDto } from '@/pages/ChatRoom/dto';

interface AllMessagesResponse {
	chatRoomId: number;
	joinedUsers: UserDto[];
	messages: MessageDto[];
}

export const getAllMessages = (chatRoomId: number) => {
	return allMessages.find((chatRoom) => chatRoom.chatRoomId === chatRoomId)! as AllMessagesResponse;
};
