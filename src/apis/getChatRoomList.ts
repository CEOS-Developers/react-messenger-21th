import chatRoomList from '@/assets/data/chatroomList.json';
import { MessageDto, UserDto } from '@/pages/ChatRoom/dto';

export interface ChatRoomDto {
	chatRoomId: number;
	chatRoomName: string | null;
	joinedUsers: UserDto[];
	latestMessage: MessageDto;
}

type ChatRoomResponse = ChatRoomDto[];

export const getChatRoomList = () => {
	return chatRoomList as ChatRoomResponse;
};
