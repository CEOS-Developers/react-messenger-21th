import { Link } from 'react-router-dom';
import * as S from './ChatItem.Styled';
import * as Types from '@/types';
import * as Icons from '@/assets/icons/chatlist';
import { CHATCOLOR_ITEMS } from '@/constants/chatcolor';
import { ProfileImage } from '@/assets/icons/profile';
import { toPreviewTime, truncateText } from './ChatItem.utils';

type ChatItemProps = {
  chatId: string;
  room: Types.ChatRoom;
  userList: Types.UserList;
  myId: string;
  isPinned: boolean;
  onTogglePin?: (chatId: string) => void;
};

function ChatItem({ chatId, room, userList, myId, isPinned, onTogglePin }: ChatItemProps) {
  const lastMessage = room.messages.at(-1);

  const memberIds = room.userIds.filter((id) => id !== myId);

  // Temporary chat preview image (Do not separate into individual component)
  const ChatPreviewImage = (memberIds: string[], userList: Types.UserList) => {
    if (memberIds.length === 0) {
      return <></>;
    } else if (memberIds.length === 1) {
      return <ProfileImage className={`w-[48px] h-[48px] ${userList[memberIds[0]].profileColor}`} />;
    } else {
      const colorItems = CHATCOLOR_ITEMS[memberIds.length] || CHATCOLOR_ITEMS[4];

      return (
        <div className="relative w-[48px] h-[48px] gap-[4px] flex flex-wrap justify-center items-center">
          {colorItems.map((color) => (
            <ProfileImage className={`w-[22px] h-[22px] ${color}`} />
          ))}
        </div>
      );
    }
  };

  return (
    <S.ChatItemWrapper key={chatId}>
      {ChatPreviewImage(memberIds, userList)}
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
