import Search from '@/assets/icons/search.svg?react';
import AddFriend from '@/assets/icons/add-friend.svg?react';

import HeaderButton from './HeaderButton';

export default function MainTopBar({ content }: { content: '친구' | '채팅' }) {
	const buttonContent = content === '친구' ? '친구 추가하기' : '채팅방 추가';
	return (
		<div className="px-5 py-2.5 flex justify-between items-center">
			<div className="head1-semibold">{content}</div>
			<div className="flex gap-2">
				<HeaderButton opacity={1} Icon={Search} />
				<HeaderButton opacity={1} Icon={AddFriend} content={buttonContent} />
			</div>
		</div>
	);
}
