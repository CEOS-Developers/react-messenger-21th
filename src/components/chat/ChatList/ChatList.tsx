import { useState } from 'react';
import * as S from './ChatList.Styled';
import ChatListHeader from './ChatListHeader/ChatListHeader';
import ChatItem from './ChatItem/ChatItem';
import { useChatList, useMyId, useUserList } from '@/contexts/localStorage';
import { searchFromStorage } from '@/utils';
import { splitPinnedChats, sortChatsByLastMessage } from './ChatList.utils';

function ChatList() {
  const [searchValue, setSearchValue] = useState<string>('');
  const { chatList, onTogglePin } = useChatList();
  const { myId } = useMyId();
  const { userList } = useUserList();

  const { pinnedChats, normalChats } = splitPinnedChats(chatList);

  const pinnedIndices = searchFromStorage(
    searchValue,
    pinnedChats.map(([, room]) => room.title),
  );
  const normalIndices = searchFromStorage(
    searchValue,
    normalChats.map(([, room]) => room.title),
  );

  const filteredPinnedChats = pinnedIndices.map((i) => pinnedChats[i]);
  const filteredNormalChats = normalIndices.map((i) => normalChats[i]);

  const isPinGroupTop = filteredPinnedChats.length > 0;
  const isNormalGroupTop = filteredPinnedChats.length === 0 && filteredNormalChats.length > 0;

  return (
    <S.ChatListWrapper>
      <ChatListHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      {filteredPinnedChats.length > 0 && (
        <S.ChatGroup className={`${isPinGroupTop ? 'top-group' : ''}`}>
          {sortChatsByLastMessage(filteredPinnedChats).map(
            ([chatId, room]) =>
              room.messages.length > 0 && (
                <ChatItem
                  key={chatId}
                  chatId={chatId}
                  room={room}
                  userList={userList}
                  myId={myId}
                  isPinned={true}
                  onTogglePin={onTogglePin}
                />
              ),
          )}
        </S.ChatGroup>
      )}
      {filteredPinnedChats.length > 0 && <div className="h-[4px] bg-grayscale-05" />}
      {filteredNormalChats.length > 0 && (
        <S.ChatGroup className={`${isNormalGroupTop ? 'top-group' : ''}`}>
          {sortChatsByLastMessage(filteredNormalChats).map(
            ([chatId, room]) =>
              room.messages.length > 0 && (
                <ChatItem key={chatId} chatId={chatId} userList={userList} myId={myId} room={room} isPinned={false} />
              ),
          )}
        </S.ChatGroup>
      )}
    </S.ChatListWrapper>
  );
}

export default ChatList;
