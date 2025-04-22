import NavBar from '@/components/NavBar';
import SubTopBar from '@/components/SubTopBar';
import ProfileImg from './components/ProfileImg';
import { getCurrentUserInfo } from '@/apis/getCurrentUserInfo';
import Button from './components/Button';
import Chat from '@/assets/icons/chat.svg?react';
import Edit from '@/assets/icons/edit.svg?react';

export default function Profile() {
	const currentUserInfo = getCurrentUserInfo();

	return (
		<div className="bg-main-400 rounded-b-4xl">
			<SubTopBar content="내 프로필" />
			<div className="relative h-[38.5rem]">
				<div className="absolute bottom-0 w-full h-[26rem] bg-black-000">
					<div className="absolute -top-12 left-1/2 -translate-x-1/2">
						<ProfileImg {...currentUserInfo} />
					</div>
					<div className="mt-[3.875rem] flex flex-col items-center">
						<div className="head2-semibold mb-2">{currentUserInfo.name || '알수없음'}</div>
						<div className="body2-regular text-black-400 mb-12">{currentUserInfo.email}</div>

						<Button Icon={Chat} content={'나와의 채팅'} />
						<Button Icon={Edit} content={'프로필 편집하기'} />
					</div>
				</div>
			</div>
			<NavBar />
		</div>
	);
}
