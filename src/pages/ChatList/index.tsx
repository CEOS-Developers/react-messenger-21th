import MainTopBar from '@/components/MainTopBar';
import NavBar from '@/components/NavBar';
import ChatItem from './components/ChatItem';
import { useEffect, useState } from 'react';
import { ChatRoomDto, getChatRoomList } from '@/apis/getChatRoomList';

export default function ChatList() {
	const [chatRoomList, setChatRoomList] = useState<ChatRoomDto[]>();

	// 초기 데이터 페칭
	useEffect(() => {
		const response = getChatRoomList();

		setChatRoomList(response);
	}, []);

	return (
		<div>
			<MainTopBar content="채팅" />
			<div className="flex flex-col">
				{chatRoomList?.map((chatRoom) => (
					<ChatItem
						key={chatRoom.chatRoomId}
						chatRoomName={chatRoom.chatRoomName}
						joinedUsers={chatRoom.joinedUsers}
						content={chatRoom.latestMessage.content}
						createdAt={chatRoom.latestMessage.createdAt}
					/>
				))}
			</div>
			<NavBar />
		</div>
	);
}
