import { Link } from 'react-router-dom';
import * as S from './ChatItem.Styled';
import * as Types from '@/types';
import * as Icons from '@/assets/icons/chatlist';
import { toPreviewTime, truncateText } from './ChatItem.utils';

type ChatItemProps = {
  chatId: string;
  room: Types.ChatRoom;
  isPinned: boolean;
  onTogglePin?: (chatId: string) => void;
};

function ChatItem({ chatId, room, isPinned, onTogglePin }: ChatItemProps) {
  const lastMessage = room.messages.at(-1);

  return (
    <S.ChatItemWrapper key={chatId}>
      <div className="w-[48px] h-[48px] bg-black" />
      <Link to={`/chat/${chatId}`} className={`chat-link`}>
        <S.ChatTitle>
          <span className="!text-subhead-02 text-grayscale-00-black">{room.title}</span>
          {room.userIds.length > 2 && <span className="!text-subhead-02 text-grayscale-03">{room.userIds.length}</span>}
        </S.ChatTitle>
        <S.ChatPreview>
          <span className="!text-subhead-03 text-grayscale-02">{truncateText(lastMessage?.text ?? '')}</span>
          <span className="!text-caption-04 text-grayscale-03">{toPreviewTime(lastMessage?.timestamp ?? 0)}</span>
        </S.ChatPreview>
      </Link>
      {isPinned && (
        <button onClick={() => onTogglePin?.(chatId)} className="cursor-pointer">
          <Icons.Pin className="w-[24px] h-[24px]" />
        </button>
      )}
    </S.ChatItemWrapper>
  );
}

export default ChatItem;
