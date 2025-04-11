import { UserDto } from '@/pages/ChatRoom/dto';
import DefaultProfile from './DefaultProfile';
import { getProfileColor } from '@/utils/getProfileColor';

export default function RecentActiveFriend({ name, color, isActive }: UserDto) {
	const bgColor = getProfileColor('background', color);
	const pathColor = getProfileColor('path', color);

	return (
		<button
			className="px-4 py-2.5 flex flex-col gap-2.5 items-center
        border border-black-100 rounded-2xl text-black-500 caption1-regular"
		>
			<DefaultProfile bgColor={bgColor} pathColor={pathColor} hasBorder={false} isActive={isActive} />
			{name}
		</button>
	);
}
