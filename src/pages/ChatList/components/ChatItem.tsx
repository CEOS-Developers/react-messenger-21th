import { UserDto } from '@/pages/ChatRoom/dto';
import { createOtherUserContent } from '@/utils/createOtherUserContent';
import { formatCreatedAt } from '@/utils/formatCreatedAt';
import ChatRoomImg from './ChatRoomImg';

export default function ChatItem({
	joinedUsers,
	chatRoomName,
	content,
	createdAt,
}: {
	joinedUsers: UserDto[];
	chatRoomName: string | null;
	content: string;
	createdAt: string;
}) {
	const title = chatRoomName || createOtherUserContent(joinedUsers);

	return (
		<button className="grow py-[0.875rem] px-5 grid grid-cols-[42px_1fr_auto] gap-2.5">
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
