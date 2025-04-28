import DefaultProfile from '@/components/DefaultProfile';
import GroupProfile from '@/components/GroupProfile';
import { UserDto } from '@/apis/dto';
import { CURRENT_USER_ID } from '@/utils/constants';
import { getProfileColor } from '@/utils/getProfileColor';

export default function ChatRoomImg({ joinedUsers }: { joinedUsers: UserDto[] }) {
	const otherUsers = joinedUsers
		.filter((user) => user.id !== CURRENT_USER_ID)
		.sort((a, b) => a.name.localeCompare(b.name));

	const chatType = (() => {
		if (otherUsers.length === 0) return 'my';
		if (otherUsers.length > 1) return 'group';
		return 'oneOnOne';
	})();

	const targetUsers: UserDto[] = (() => {
		if (chatType === 'my') {
			return [joinedUsers.find((user) => user.id === CURRENT_USER_ID)!];
		} else if (chatType === 'oneOnOne') {
			return [otherUsers[0]];
		} else {
			return [otherUsers[0], otherUsers[1]];
		}
	})();

	if (targetUsers.length === 1) {
		const bgColor = getProfileColor('background', targetUsers[0].color);
		const pathColor = getProfileColor('path', targetUsers[0].color);
		const isActive = targetUsers[0].isActive;

		return (
			<div className="flex justify-center">
				<DefaultProfile bgColor={bgColor} pathColor={pathColor} hasBorder={false} isActive={isActive} />
			</div>
		);
	} else {
		const bgColors = targetUsers.map((user) => getProfileColor('background', user.color));
		const pathColors = targetUsers.map((user) => getProfileColor('path', user.color));

		return (
			<div>
				<GroupProfile bgColors={bgColors} pathColors={pathColors} />
			</div>
		);
	}
}
