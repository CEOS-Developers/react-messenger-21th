import chatRoomList from '@/assets/data/chatroomList.json';
import { ChatRoomDto } from '@/apis/dto';

export const getChatRoomList = () => {
	return chatRoomList.sort(
		(a, b) => new Date(b.latestMessage.createdAt).getTime() - new Date(a.latestMessage.createdAt).getTime(),
	) as ChatRoomDto[];
};
