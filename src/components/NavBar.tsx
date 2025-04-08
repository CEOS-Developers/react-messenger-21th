import Friend from '@/assets/icons/friend.svg?react';
import Chat from '@/assets/icons/chat.svg?react';
import Profile from '@/assets/icons/my-profile.svg?react';
import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

export default function NavBar() {
	const pathname = useLocation().pathname;
	const nav = useNavigate();

	const tabs = [
		{
			content: '친구',
			Icon: Friend,
			href: '/',
		},
		{
			content: '채팅',
			Icon: Chat,
			href: '/chatlist',
		},
		{
			content: '프로필',
			Icon: Profile,
			href: '/profile',
		},
	];

	return (
		<div className="grow h-[5.875rem] flex justify-between px-[4.25rem] py-4 bg-black-000 border-t border-black-200 rounded-b-4xl">
			{tabs.map((tab) => (
				<button
					onClick={() => nav(tab.href)}
					className={clsx(
						'w-9 h-12 flex flex-col items-center justify-between caption1-medium',
						pathname === tab.href ? 'text-main-400' : 'text-black-400',
					)}
				>
					<tab.Icon />
					{tab.content}
				</button>
			))}
		</div>
	);
}
