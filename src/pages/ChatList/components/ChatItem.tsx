import DefaultProfile from '@/components/DefaultProfile';
import { UserDto } from '@/pages/ChatRoom/dto';
import { formatCreatedAt } from '@/utils/formatCreatedAt';
import { getProfileColor } from '@/utils/getProfileColor';

export default function ChatItem({
	fromUser,
	content,
	createdAt,
}: {
	fromUser: UserDto;
	content: string;
	createdAt: string;
}) {
	const bgColor = getProfileColor('background', fromUser.color);
	const pathColor = getProfileColor('path', fromUser.color);

	return (
		<button className="grow py-[0.875rem] px-5 grid grid-cols-[36px_1fr_auto] gap-2.5">
			<DefaultProfile bgColor={bgColor} pathColor={pathColor} hasBorder={false} />
			<div className="flex flex-col justify-between gap-2 overflow-hidden">
				<div className="text-left body2-semibold">{fromUser.name}</div>
				<div className="text-left text-black-400 body2-regular truncate">{content}</div>
			</div>
			<div className="w-fit py-[0.0625rem] text-nowrap text-black-400 caption1-regular">
				{formatCreatedAt(createdAt)}
			</div>
		</button>
	);
}
