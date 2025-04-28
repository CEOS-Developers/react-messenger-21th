import Profile from '@/assets/icons/profile.svg?react';
import { UserDto } from '@/apis/dto';
import { getProfileColor } from '@/utils/getProfileColor';
import clsx from 'clsx';

export default function ProfileImg({ color, isActive }: UserDto) {
	const profileImgUrl = undefined;

	const bgColor = getProfileColor('background', color);
	const pathColor = getProfileColor('path', color);

	return (
		<div className={clsx('border-[0.5625rem] border-black-000 rounded-full', bgColor)}>
			<div className="relative flex justify-center items-center w-20 h-20 border border-black-100 rounded-full">
				{profileImgUrl ? <div></div> : <Profile width={59} height={59} className={pathColor} />}
				{isActive !== undefined && (
					<div
						className={clsx(
							'absolute -right-0.5 -bottom-1 w-6 h-6 border-4 border-black-50 rounded-full',
							isActive ? 'bg-main-400' : 'bg-black-400',
						)}
					></div>
				)}
			</div>
		</div>
	);
}
