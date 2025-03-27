import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as S from './ChatRoom.Styled';
import * as Types from '@/types';
import * as Icons from '@/assets/icons/chatroom';
import { loadData, saveData } from '@/services/localStorage';

function ChatRoom() {
  const { chatId } = useParams();
  const [chatRoom, setChatRoom] = useState<Types.ChatRoom | null>(null);
  const [input, setInput] = useState('');

  useEffect(() => {
    const data = loadData();
    if (chatId && data[chatId]) {
      setChatRoom(data[chatId]);
    }
  }, [chatId]);

  const Pin = chatRoom?.isPinned ? Icons.PinOn : Icons.PinOff;

  if (!chatRoom) return <S.ChatRoomWrapper>ERROR</S.ChatRoomWrapper>;

  return (
    <S.ChatRoomWrapper>
      <S.ChatRoomHeader className="bg-background-blue-02-opacity">
        <div className="flex flex-row items-center gap-[8px]">
          <Link to="/chat">
            <Icons.Back className="w-[24px] h-[24px]" />
          </Link>
          <div className="flex flex-row gap-[4px]">
            <span className="!text-headline-03 text-grayscale-00-black">{chatRoom.title}</span>
            {chatRoom.userIds.length > 2 && (
              <span className="!text-headline-04 text-black-tp-03">{chatRoom.userIds.length}</span>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-[8px]">
          <Pin className="w-[24px] h-[24px]" />
          <Icons.Search className="w-[24px] h-[24px]" />
          <Icons.Menu className="w-[24px] h-[24px]" />
        </div>
      </S.ChatRoomHeader>
      <div className="h-[112px] opacity-0" />
      <S.MessageList></S.MessageList>
      <S.MessageInputWrapper></S.MessageInputWrapper>
    </S.ChatRoomWrapper>
  );
}

export default ChatRoom;
