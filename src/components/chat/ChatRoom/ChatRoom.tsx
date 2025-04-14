import { useParams } from 'react-router-dom';
import * as S from './ChatRoom.Styled';
import { useChatList, useMyId, useUserList } from '@/contexts/localStorage';
import ChatRoomHeader from './ChatRoomHeader/ChatRoomHeader';
import MessageList from './MessageList/MessageList';
import MessageInput from './MessageInput/MessageInput';

function ChatRoom() {
  const { chatId } = useParams();
  const { chatList, onTogglePin } = useChatList();
  const { userList } = useUserList();
  const { myId } = useMyId();

  if (!chatId) return null;

  const chatRoom = chatList[chatId];
  const messages = chatRoom.messages;

  return (
    <S.ChatRoomWrapper>
      <ChatRoomHeader chatId={chatId} chatRoom={chatRoom} onTogglePin={onTogglePin} />
      <MessageList chatId={chatId} myId={myId} userList={userList} messages={messages} />
      <MessageInput chatId={chatId} myId={myId} />
    </S.ChatRoomWrapper>
  );
}

export default ChatRoom;
