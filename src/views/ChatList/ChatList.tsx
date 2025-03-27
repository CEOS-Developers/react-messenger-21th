import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './ChatList.Styled';
import * as Types from '@/types';
import { loadData, saveData } from '@/services/localStorage';
import chatData from '@/assets/data/chatData.json';
import { getLastTimeStamp, formatChatPreviewTime, truncateChatPreviewText } from '@/utils/chatListUtils';

function ChatList() {
  const [chatList, setChatList] = useState<Types.ChatList>({});

  useEffect(() => {
    const existingData = loadData();
    if (!existingData || Object.keys(existingData).length === 0) {
      saveData(chatData);
      setChatList(chatData);
    } else {
      setChatList(existingData);
    }
  }, []);

  const pinnedChats = Object.entries(chatList)
    .filter(([, room]) => room.isPinned)
    .sort(([, a], [, b]) => getLastTimeStamp(b) - getLastTimeStamp(a));

  const normalChats = Object.entries(chatList)
    .filter(([, room]) => !room.isPinned)
    .sort(([, a], [, b]) => getLastTimeStamp(b) - getLastTimeStamp(a));

  const renderChatGroup = (chatGroup: [string, Types.ChatRoom][]) => {
    return (
      <S.ChatGroup>
        {chatGroup.map(([chatId, room]) => {
          return (
            <li key={chatId}>
              <div className="w-[48px] h-[48px] bg-black" />
              <Link to={`/chat/${chatId}`} className="flex flex-col">
                <S.ChatTitle>
                  <span className="!text-subhead-02 text-grayscale-00-black">{room.title}</span>
                  {room.userIds.length > 2 && (
                    <span className="!text-subhead-02 text-grayscale-03">{room.userIds.length}</span>
                  )}
                </S.ChatTitle>
                <S.ChatPreview>
                  <span className="!text-subhead-03 text-grayscale-02">
                    {truncateChatPreviewText(room.messages.at(-1)?.text ?? '')}
                  </span>
                  <span className="!text-caption-04 text-grayscale-03">
                    {formatChatPreviewTime(getLastTimeStamp(room))}
                  </span>
                </S.ChatPreview>
              </Link>
            </li>
          );
        })}
      </S.ChatGroup>
    );
  };

  return (
    <S.ChatListWrapper className="bg-grayscale-07-white">
      <div className="h-[162px] opacity-0" />
      {pinnedChats.length > 0 && renderChatGroup(pinnedChats)}
      {pinnedChats.length > 0 && <div className="h-[4px] bg-grayscale-05" />}
      {normalChats.length > 0 && renderChatGroup(normalChats)}
    </S.ChatListWrapper>
  );
}

export default ChatList;
