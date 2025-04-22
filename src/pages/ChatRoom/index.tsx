import { useEffect, useState } from 'react';

import { getAllMessages } from '@/apis/getAllMessages';
import { createOtherUserContent } from '@/utils/createOtherUserContent';
import SubTopBar from '@/components/SubTopBar';

import type { UserDto } from '../../apis/dto';

import MessageInput from './components/MessageInput';
import MessageContainer from './components/MessageContainer';
import { useParams } from 'react-router-dom';
import { useMessagesStore } from '@/store/useMessagesStore';
import { useChatRoomLisStore } from '@/store/useChatRoomListStore';

export default function ChatRoom() {
	const { chatRoomId } = useParams();
	const { setChatRoomList } = useChatRoomLisStore();
	const { getMessagesByUsers, initMessages, sendMessage } = useMessagesStore();
	const messagesByUsers = getMessagesByUsers();

	const [currentUserId, setCurrentUserId] = useState(3);
	const [joinedUsers, setJoinedUsers] = useState<UserDto[]>([]);

	// 상대방 필터링
	const joinedUserIds = joinedUsers.map((user) => user.id);
	const currentUser = joinedUsers.find((user) => user.id === currentUserId)!;
	const otherUserContent = createOtherUserContent(joinedUsers);

	// 초기 데이터 페칭
	useEffect(() => {
		const response = getAllMessages(Number(chatRoomId) ?? -1);

		setJoinedUsers(response.joinedUsers);
		if (messagesByUsers.length === 0) initMessages(response.messages);
	}, []);

	const handleTopBarContentClick = () => {
		const currentIndex = joinedUserIds.indexOf(currentUserId);
		const nextIndex = (currentIndex + 1) % joinedUserIds.length;

		setCurrentUserId(joinedUserIds[nextIndex]);
	};

	const handleMessageSubmit = (message: string) => {
		const newMessage = {
			id: crypto.randomUUID(),
			content: message,
			createdAt: new Date().toISOString(),
			fromUser: currentUser,
		};

		sendMessage(newMessage);
		setChatRoomList(Number(chatRoomId), newMessage);
	};

	return (
		<div className="relative grow flex flex-col bg-black-200 rounded-b-4xl">
			<SubTopBar content={otherUserContent} onClickContent={handleTopBarContentClick} />
			<MessageContainer messagesByUsers={messagesByUsers} currentUserId={currentUserId} />
			<MessageInput onSubmit={handleMessageSubmit} />
		</div>
	);
}
