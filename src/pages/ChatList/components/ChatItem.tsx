import { UserDto } from '@/apis/dto';
import { createOtherUserContent } from '@/utils/createOtherUserContent';
import { formatCreatedAt } from '@/utils/formatCreatedAt';
import ChatRoomImg from './ChatRoomImg';
import { useNavigate } from 'react-router-dom';

export default function ChatItem({
	chatRoomId,
	chatRoomName,
	joinedUsers,
	content,
	createdAt,
}: {
	chatRoomId: number;
	chatRoomName: string | null;
	joinedUsers: UserDto[];
	content: string;
	createdAt: string;
}) {
	const title = chatRoomName || createOtherUserContent(joinedUsers);
	const nav = useNavigate();

	return (
		<button
			disabled={chatRoomId !== 1}
			onClick={() => nav(`/chatroom/${chatRoomId}`)}
			className="grow py-[0.875rem] px-5 grid grid-cols-[42px_1fr_auto] gap-2.5
			active:bg-black-100 transition-colors"
		>
			<ChatRoomImg joinedUsers={joinedUsers} />
			<div className="flex flex-col justify-between gap-2 overflow-hidden">
				<div className="text-left body2-semibold">{title}</div>
				<div className="text-left text-black-400 body2-regular truncate">{content}</div>
			</div>
			<div className="w-fit py-[0.0625rem] text-nowrap text-black-400 caption1-regular">
				{formatCreatedAt(createdAt)}
			</div>
		</button>
	);
}
