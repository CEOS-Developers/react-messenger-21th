import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import Back from '@/assets/icons/back.svg?react';
import Search from '@/assets/icons/search.svg?react';
import Menu from '@/assets/icons/menu.svg?react';

import HeaderButton from './HeaderButton';

export default function TopBar({ content, onClickContent }: { content: string; onClickContent?: () => void }) {
	const pathname = useLocation().pathname;
	const opacity = pathname.split('/').includes('chatroom') ? 0.3 : 0.1;

	return (
		<div className="sticky px-5 py-2.5 grid grid-cols-[4.75rem_auto_4.75rem] bg-black-200 items-center">
			<button>
				<Back className="text-black-300" />
			</button>
			<div onClick={onClickContent} className={clsx('body2-semibold m-auto', { 'cursor-pointer': onClickContent })}>
				{content}
			</div>
			<div className="flex justify-between">
				<HeaderButton opacity={opacity} Icon={Search} />
				<HeaderButton opacity={opacity} Icon={Menu} />
			</div>
		</div>
	);
}
