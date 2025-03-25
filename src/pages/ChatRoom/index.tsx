import TopBar from '@/components/TopBar';
import { useParams } from 'react-router-dom';
import RcvdMessage from './components/RcvdMessage';

export default function ChatRoom() {
	const { chatRoomId } = useParams();

	return (
		<div className="bg-black-200">
			<TopBar content="임이솔, 김진현 외 2명" onClickContent={() => console.log('')} />
			<RcvdMessage />
			채팅방 {chatRoomId}
		</div>
	);
}
