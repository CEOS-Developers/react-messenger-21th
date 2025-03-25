import { useParams } from 'react-router-dom';

function ChatRoom() {
  const chatId = useParams();

  return <>{chatId}</>;
}

export default ChatRoom;
