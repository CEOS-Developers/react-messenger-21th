import { useParams } from 'react-router-dom';
import * as S from './ChatRoom.Styled';

function ChatRoom() {
  const chatId = useParams();

  return <>{chatId}</>;
}

export default ChatRoom;
