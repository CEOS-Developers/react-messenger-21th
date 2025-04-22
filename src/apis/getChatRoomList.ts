import chatRoomList from '@/assets/data/chatroomList.json';
import { ChatRoomDto } from '@/apis/dto';

export const getChatRoomList = () => {
	return chatRoomList as ChatRoomDto[];
};
