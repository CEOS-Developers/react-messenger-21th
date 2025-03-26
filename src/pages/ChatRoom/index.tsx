import { useState } from 'react';

import { createOtherUserContent } from '@/utils/createOtherUserContent';
import allMessages from '@/assets/data/messages.json';
import TopBar from '@/components/TopBar';

import RcvdMessage from './components/RcvdMessage';
import SentMessage from './components/SentMessage';
import MessageInput from './components/MessageInput';

import { createMessagesByUsers } from '@/utils/createMessagesByUsers';

export default function ChatRoom() {
	const [currentUserId, setCurrentUserId] = useState(3);
	const currentRoomData = allMessages.find((chatRoom) => chatRoom.chatRoomId === 1)!;
	const messagesByUsers = createMessagesByUsers(currentRoomData.messages);

	// 상대방 필터링
	const joinedUserIds = currentRoomData.joinedUsers.map((user) => user.id);
	const otherUsers = currentRoomData.joinedUsers.filter((user) => user.id !== currentUserId);
	const otherUserContent = createOtherUserContent(otherUsers || null);

	const handleTopBarContentClick = () => {
		const currentIndex = joinedUserIds.indexOf(currentUserId);
		const nextIndex = (currentIndex + 1) % joinedUserIds.length;

		setCurrentUserId(joinedUserIds[nextIndex]);
	};

	return (
		<div className="relative flex-grow flex flex-col bg-black-200">
			<TopBar content={otherUserContent} onClickContent={handleTopBarContentClick} />
			<div className="flex flex-col h-[38.5rem] overflow-y-scroll px-5" style={{ scrollbarWidth: 'none' }}>
				{messagesByUsers.map((messagesByUser) =>
					messagesByUser.fromUser.id === currentUserId ? (
						<SentMessage key={messagesByUser.messages[0].id} />
					) : (
						<RcvdMessage key={messagesByUser.messages[0].id} />
					),
				)}
			</div>
			<MessageInput />
		</div>
	);
}
