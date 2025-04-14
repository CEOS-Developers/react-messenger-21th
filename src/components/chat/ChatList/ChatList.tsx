import * as S from './ChatList.Styled';
import ChatItem from './ChatItem/ChatItem';
import { useChatList } from '@/contexts/localStorage';
import { splitPinnedChats, sortChatsByLastMessage } from './ChatList.utils';

function ChatList() {
  const { chatList, onTogglePin } = useChatList();

  const { pinnedChats, normalChats } = splitPinnedChats(chatList);

  return (
    <S.ChatListWrapper>
      <div className="h-[162px] opacity-0" />
      <S.ChatGroup>
        {pinnedChats.length > 0 &&
          sortChatsByLastMessage(pinnedChats).map(([chatId, room]) => (
            <ChatItem chatId={chatId} room={room} isPinned={true} onTogglePin={onTogglePin} />
          ))}
      </S.ChatGroup>
      {pinnedChats.length > 0 && <div className="h-[4px] bg-grayscale-05" />}
      <S.ChatGroup>
        {normalChats.length > 0 &&
          sortChatsByLastMessage(normalChats).map(([chatId, room]) => (
            <ChatItem chatId={chatId} room={room} isPinned={false} />
          ))}
      </S.ChatGroup>
    </S.ChatListWrapper>
  );
}

export default ChatList;
