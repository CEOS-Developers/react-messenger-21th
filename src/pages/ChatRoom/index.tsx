import { useEffect, useState } from 'react';

import { getAllMessages } from '@/apis/getAllMessages';
import { createMessagesByUsers } from '@/utils/createMessagesByUsers';
import { createOtherUserContent } from '@/utils/createOtherUserContent';
import SubTopBar from '@/components/SubTopBar';

import type { messagesByUserDto } from '@/utils/dto';
import type { MessageDto, UserDto } from './dto';

import MessageInput from './components/MessageInput';
import MessageContainer from './components/MessageContainer';
import { useParams } from 'react-router-dom';

export default function ChatRoom() {
	const { chatRoomId } = useParams();

	const [currentUserId, setCurrentUserId] = useState(3);
	const [messages, setMessages] = useState<MessageDto[]>([]);
	const [joinedUsers, setJoinedUsers] = useState<UserDto[]>([]);

	const [messagesByUsers, setMessagesByUsers] = useState<messagesByUserDto[]>([]);

	// 상대방 필터링
	const joinedUserIds = joinedUsers.map((user) => user.id);
	const currentUser = joinedUsers.find((user) => user.id === currentUserId)!;
	const otherUsers = joinedUsers.filter((user) => user.id !== currentUserId);
	const otherUserContent = createOtherUserContent(otherUsers || null);

	// 초기 데이터 페칭
	useEffect(() => {
		const response = getAllMessages(Number(chatRoomId) ?? -1);

		setJoinedUsers(response.joinedUsers);
		setMessages(response.messages);
	}, []);

	// 메시지가 추가될 때마다 유저별 메시지 필터링
	useEffect(() => {
		setMessagesByUsers(createMessagesByUsers(messages));
	}, [messages]);

	const handleTopBarContentClick = () => {
		const currentIndex = joinedUserIds.indexOf(currentUserId);
		const nextIndex = (currentIndex + 1) % joinedUserIds.length;

		setCurrentUserId(joinedUserIds[nextIndex]);
	};

	const handleMessageSubmit = (message: string) => {
		setMessages([
			...messages,
			{ fromUser: currentUser, content: message, createdAt: new Date().toISOString(), id: crypto.randomUUID() },
		]);
	};

	return (
		<div className="relative grow flex flex-col bg-black-200 rounded-b-4xl">
			<SubTopBar content={otherUserContent} onClickContent={handleTopBarContentClick} />
			<MessageContainer messagesByUsers={messagesByUsers} currentUserId={currentUserId} />
			<MessageInput onSubmit={handleMessageSubmit} />
		</div>
	);
}
