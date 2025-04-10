import Profile from '@/assets/icons/profile.svg?react';
import clsx from 'clsx';

export default function DefaultProfile({
	bgColor,
	pathColor,
	isMyProfile = false,
	hasBorder = true,
	profileImgUrl,
}: {
	bgColor: string;
	pathColor: string;
	isMyProfile?: boolean;
	hasBorder?: boolean;
	profileImgUrl?: string;
}) {
	const size = isMyProfile ? 30 : 27;
	return (
		<button
			className={clsx(
				'flex justify-center items-center border border-black-100 rounded-full',
				isMyProfile ? 'w-11 h-11' : 'w-9 h-9',
				hasBorder ? 'border-black-100' : 'border-black-000',
				bgColor,
			)}
		>
			{profileImgUrl ? <div></div> : <Profile width={size} height={size} className={pathColor} />}
		</button>
	);
}
