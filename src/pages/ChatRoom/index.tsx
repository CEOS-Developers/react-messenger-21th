import { useParams } from 'react-router-dom';

export default function ChatRoom() {
	const { chatRoomId } = useParams();

	return <div>채팅방 {chatRoomId}</div>;
}
