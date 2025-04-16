import { Link } from 'react-router-dom';
import * as S from './ChatRoomHeader.Styled';
import * as Types from '@/types';
import * as Icons from '@/assets/icons/chatroom';

type ChatRoomHeaderProps = {
  chatId: string;
  chatRoom: Types.ChatRoom;
  onTogglePin?: (chatId: string) => void;
};

function ChatRoomHeader({ chatId, chatRoom, onTogglePin }: ChatRoomHeaderProps) {
  const Pin = chatRoom?.isPinned ? Icons.PinOn : Icons.PinOff;

  return (
    <S.ChatRoomHeaderWrapper className="bg-background-blue-02-opacity">
      <div className="components">
        <Link to="/chat">
          <Icons.Back className="w-[24px] h-[24px]" />
        </Link>
        <span className="!text-headline-03 text-grayscale-00-black">{chatRoom.title}</span>
        {chatRoom.userIds.length > 2 && (
          <span className="!text-headline-04 text-black-tp-03">{chatRoom.userIds.length}</span>
        )}
      </div>
      <div className="components">
        <button onClick={() => onTogglePin?.(chatId)} className="cursor-pointer">
          <Pin className="w-[24px] h-[24px]" />
        </button>
        <Icons.Search className="w-[24px] h-[24px]" />
        <Icons.Menu className="w-[24px] h-[24px]" />
      </div>
    </S.ChatRoomHeaderWrapper>
  );
}

export default ChatRoomHeader;
