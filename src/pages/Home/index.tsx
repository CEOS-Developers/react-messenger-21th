import { getRecentActiveFriends } from '@/apis/getRecentActiveFriends';
import MainTopBar from '@/components/MainTopBar';
import RecentActiveFriend from '@/components/RecentActiveFriend';
import { useEffect, useState } from 'react';
import type { UserDto } from '../ChatRoom/dto';
import { getAllFriends } from '@/apis/getAllFriends';
import FriendsItem from './components/FriendItem';
import DefaultProfile from '@/components/DefaultProfile';
import { getCurrentUserInfo } from '@/apis/getCurrentUserInfo';
import { getProfileColor } from '@/utils/getProfileColor';
import Divider from '@/components/Divider';
import NavBar from '@/components/NavBar';

export default function Home() {
	const [friends, setFriends] = useState<UserDto[]>([]);
	const [recentActiveFriends, setRecentActiveFriends] = useState<UserDto[]>([]);
	const [currentUserInfo, setCurrentUserInfo] = useState<UserDto | null>(null);

	const currentUserBgColor = getProfileColor('background', currentUserInfo?.color || 'blue');
	const currentUserPathColor = getProfileColor('path', currentUserInfo?.color || 'blue');

	// 초기 데이터 페칭
	useEffect(() => {
		const friendsResponse = getAllFriends();
		const recentActiveFriendsResponse = getRecentActiveFriends();
		const currentUserInfoResponse = getCurrentUserInfo();

		setFriends(friendsResponse);
		setRecentActiveFriends(recentActiveFriendsResponse);
		setCurrentUserInfo(currentUserInfoResponse);
	}, []);

	return (
		<div>
			<MainTopBar content="친구" />

			<div className=" h-[38.5rem] overflow-scroll no-scrollbar">
				<button className="flex w-full gap-2.5 items-center px-5 py-[1.125rem] head2-semibold">
					<DefaultProfile isMyProfile={true} bgColor={currentUserBgColor} pathColor={currentUserPathColor} />
					{currentUserInfo?.name || '알수없음'}
				</button>

				<Divider />
				<div className="text-black-500 caption1-medium mx-5 mt-1 mb-2">최근 접속한 친구</div>

				<div className="px-5 py-2.5 flex gap-2 overflow-scroll no-scrollbar">
					{recentActiveFriends.map((friend) => (
						<RecentActiveFriend key={friend.id} {...friend} />
					))}
				</div>

				<Divider />
				<div className="text-black-500 caption1-medium mx-5 mt-1 mb-2">친구 {friends.length}</div>

				<div>
					{friends.map((friend) => (
						<FriendsItem {...friend} />
					))}
				</div>
			</div>

			<NavBar />
		</div>
	);
}
