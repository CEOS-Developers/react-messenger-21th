// import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import Back from '@/assets/icons/back.svg?react';
import Search from '@/assets/icons/search.svg?react';
import Menu from '@/assets/icons/menu.svg?react';

import HeaderButton from './HeaderButton';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SubTopBar({ content, onClickContent }: { content: string; onClickContent?: () => void }) {
	const nav = useNavigate();
	const pathname = useLocation().pathname;
	const opacity = pathname.split('/').includes('chatroom') ? 0.3 : 0.1;

	return (
		<div className="sticky px-5 py-2.5 grid grid-cols-[4.75rem_auto_4.75rem] items-center">
			<button
				onClick={() => nav(-1)}
				className={`w-9 h-9 flex justify-center items-center -ml-3 rounded-full
					transition-colors ${opacity === 0.3 ? 'active:bg-white/30' : 'active:bg-white/10'}`}
			>
				<Back className={opacity === 0.3 ? 'text-black-300' : 'text-black-000'} />
			</button>
			<div
				onClick={onClickContent}
				className={clsx('body2-semibold m-auto', {
					'cursor-pointer': onClickContent,
					'text-black-000': opacity === 0.1,
				})}
			>
				{content}
			</div>
			<div className="flex justify-between">
				<HeaderButton opacity={opacity} Icon={Search} />
				<HeaderButton opacity={opacity} Icon={Menu} />
			</div>
		</div>
	);
}
