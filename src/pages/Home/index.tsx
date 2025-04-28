import { getRecentActiveFriends } from '@/apis/getRecentActiveFriends';
import MainTopBar from '@/components/MainTopBar';
import RecentActiveFriend from '@/components/RecentActiveFriend';
import { getAllFriends } from '@/apis/getAllFriends';
import FriendsItem from './components/FriendItem';
import DefaultProfile from '@/components/DefaultProfile';
import { getCurrentUserInfo } from '@/apis/getCurrentUserInfo';
import { getProfileColor } from '@/utils/getProfileColor';
import Divider from '@/components/Divider';
import NavBar from '@/components/NavBar';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const nav = useNavigate();

	const friends = getAllFriends();
	const recentActiveFriends = getRecentActiveFriends();
	const currentUserInfo = getCurrentUserInfo();

	const currentUserBgColor = getProfileColor('background', currentUserInfo?.color || 'blue');
	const currentUserPathColor = getProfileColor('path', currentUserInfo?.color || 'blue');

	return (
		<div>
			<MainTopBar content="친구" />

			<div className=" h-[38.5rem] overflow-scroll no-scrollbar">
				<button
					onClick={() => nav('/profile')}
					className="flex w-full gap-2.5 items-center px-5 py-[1.125rem] head2-semibold
					active:bg-black-100 transition-colors"
				>
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

				<div className="pb-2.5">
					{friends.map((friend) => (
						<FriendsItem {...friend} />
					))}
				</div>
			</div>

			<NavBar />
		</div>
	);
}
