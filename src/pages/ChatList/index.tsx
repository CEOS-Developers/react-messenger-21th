import MainTopBar from '@/components/MainTopBar';
import NavBar from '@/components/NavBar';
import ChatItem from './components/ChatItem';
import { useEffect, useState } from 'react';
import { ChatRoomDto, getChatRoomList } from '@/apis/getChatRoomList';
import RecentActiveFriend from '@/components/RecentActiveFriend';
import Divider from '@/components/Divider';
import { UserDto } from '../../apis/dto';
import { getRecentActiveFriends } from '@/apis/getRecentActiveFriends';

export default function ChatList() {
	const [chatRoomList, setChatRoomList] = useState<ChatRoomDto[]>([]);
	const [friends, setFriends] = useState<UserDto[]>([]);

	// 초기 데이터 페칭
	useEffect(() => {
		const chatRoomListResponse = getChatRoomList();
		const friendsResponse = getRecentActiveFriends();

		setChatRoomList(chatRoomListResponse);
		setFriends(friendsResponse);
	}, []);

	return (
		<div>
			<MainTopBar content="채팅" />
			<div className="h-[38.5rem] overflow-scroll no-scrollbar">
				<div className="px-5 py-2.5 flex gap-2 overflow-scroll no-scrollbar">
					{friends.map((friend) => (
						<RecentActiveFriend key={friend.id} {...friend} />
					))}
				</div>
				<Divider />
				<div className="flex flex-col pb-2.5">
					{chatRoomList?.map((chatRoom) => (
						<ChatItem
							key={chatRoom.chatRoomId}
							chatRoomId={chatRoom.chatRoomId}
							chatRoomName={chatRoom.chatRoomName}
							joinedUsers={chatRoom.joinedUsers}
							content={chatRoom.latestMessage.content}
							createdAt={chatRoom.latestMessage.createdAt}
						/>
					))}
				</div>
			</div>
			<NavBar />
		</div>
	);
}
