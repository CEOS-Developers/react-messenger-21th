import { useEffect, useState } from 'react';

import { createOtherUserContent } from '@/utils/createOtherUserContent';
import TopBar from '@/components/TopBar';

import RcvdMessage from './components/RcvdMessage';
import SentMessage from './components/SentMessage';
import MessageInput from './components/MessageInput';

import { createMessagesByUsers } from '@/utils/createMessagesByUsers';
import { getAllMessages } from '@/apis/getAllMessages';
import { MessageDto, UserDto } from './dto';
import { messagesByUserDto } from '@/utils/dto';

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
			<div className="flex flex-col h-[38.5rem] overflow-y-scroll px-5" style={{ scrollbarWidth: 'none' }}>
				{messagesByUsers.map((messagesByUser) =>
					messagesByUser.fromUser.id === currentUserId ? (
						<SentMessage key={messagesByUser.messages[0].id} messages={messagesByUser.messages} />
					) : (
						<RcvdMessage key={messagesByUser.messages[0].id} {...messagesByUser} />
					),
				)}
			</div>
			<MessageInput onSubmit={handleMessageSubmit} />
		</div>
	);
}
