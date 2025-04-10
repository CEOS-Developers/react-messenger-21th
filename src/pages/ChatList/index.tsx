import MainTopBar from '@/components/MainTopBar';
import NavBar from '@/components/NavBar';
import ChatItem from './components/ChatItem';

export default function ChatList() {
	return (
		<div>
			<MainTopBar content="채팅" />
			<div className="flex flex-col">
				<ChatItem
					chatRoomName={null}
					joinedUsers={[
						{ id: 4, name: '송아영', color: 'yellow' },
						{ id: 1, name: '하은지', color: 'blue' },
						{ id: 2, name: '김진현', color: 'blue' },
					]}
					content="가나다라마바사아자차카타파하가나다라마바사아자차카타파하"
					createdAt={new Date().toISOString()}
				/>
			</div>
			<NavBar />
		</div>
	);
}
