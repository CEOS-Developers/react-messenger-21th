import { useEffect, useState } from 'react';

import { getAllMessages } from '@/apis/getAllMessages';
import { createMessagesByUsers } from '@/utils/createMessagesByUsers';
import { createOtherUserContent } from '@/utils/createOtherUserContent';
import TopBar from '@/components/TopBar';

import type { messagesByUserDto } from '@/utils/dto';
import type { MessageDto, UserDto } from './dto';

import MessageInput from './components/MessageInput';
import MessageContainer from './components/MessageContainer';

export default function ChatRoom() {
	const chatRoomId = 1;

	const [currentUserId, setCurrentUserId] = useState(3);
	const [messages, setMessages] = useState<MessageDto[]>([]);
	const [joinedUsers, setJoinedUsers] = useState<UserDto[]>([]);

	const [messagesByUsers, setMessagesByUsers] = useState<messagesByUserDto[]>([]);

	// 상대방 필터링
	const joinedUserIds = joinedUsers.map((user) => user.id);
	const currentUser = joinedUsers.find((user) => user.id === currentUserId)!;
	const otherUsers = joinedUsers.filter((user) => user.id !== currentUserId);
	const otherUserContent = createOtherUserContent(otherUsers || null);

	useEffect(() => {
		const response = getAllMessages(chatRoomId);

		setJoinedUsers(response.joinedUsers);
		setMessages(response.messages);
	}, []);

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
		<div className="relative flex-grow flex flex-col bg-black-200">
			<TopBar content={otherUserContent} onClickContent={handleTopBarContentClick} />
			<MessageContainer messagesByUsers={messagesByUsers} currentUserId={currentUserId} />
			<MessageInput onSubmit={handleMessageSubmit} />
		</div>
	);
}
