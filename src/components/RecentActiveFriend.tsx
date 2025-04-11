import DefaultProfile from './DefaultProfile';

export default function RecentActiveFriend() {
	return (
		<div
			className="px-4 py-2.5 flex flex-col gap-2.5 items-center
        border border-black-100 rounded-2xl text-black-500 caption1-regular"
		>
			<DefaultProfile bgColor="bg-profile-blue-100" pathColor="text-profile-blue-200" hasBorder={false} />
			김민지
		</div>
	);
}
