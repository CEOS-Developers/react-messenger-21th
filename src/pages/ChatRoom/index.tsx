import TopBar from '@/components/TopBar';
import { useParams } from 'react-router-dom';

export default function ChatRoom() {
	const { chatRoomId } = useParams();

	return (
		<div>
			<TopBar content="임이솔, 김진현 외 2명" onClickContent={() => console.log('')} />
			채팅방 {chatRoomId}
		</div>
	);
}
