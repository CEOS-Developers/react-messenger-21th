import Profile from '@/assets/icons/profile.svg?react';
import clsx from 'clsx';

export default function DefaultProfile({
	bgColor,
	pathColor,
	isMyProfile = false,
	hasBorder = true,
	profileImgUrl,
	isActive,
}: {
	bgColor: string;
	pathColor: string;
	isMyProfile?: boolean;
	hasBorder?: boolean;
	profileImgUrl?: string;
	isActive?: boolean;
}) {
	const size = isMyProfile ? 30 : 27;
	return (
		<div
			className={clsx(
				'relative flex justify-center items-center border rounded-full',
				isMyProfile ? 'w-11 h-11' : 'w-9 h-9',
				hasBorder ? 'border-black-100' : 'border-transparent',
				bgColor,
			)}
		>
			{profileImgUrl ? <div></div> : <Profile width={size} height={size} className={pathColor} />}
			{isActive !== undefined && (
				<div
					className={clsx(
						'absolute right-0.5 -bottom-0.5 w-2.5 h-2.5 border-2 border-black-50 rounded-full',
						isActive ? 'bg-main-400' : 'bg-black-400',
					)}
				></div>
			)}
		</div>
	);
}
