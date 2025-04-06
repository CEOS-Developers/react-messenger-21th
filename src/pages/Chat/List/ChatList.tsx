import { JSX } from 'react/jsx-runtime';
import { AnimatePresence } from 'motion/react';

import { useChat } from '@/hooks/useChat';
import { useChatPreviewList } from '@/stores/useChatPreviewList';
import { useHeaderOption } from '@/stores/useHeaderOption';

import SearchBar from '@/components/SearchBar/SearchBar';
import ChatRoomPreview from '@/components/ChatRoomPreview/ChatRoomPreview';

import { sortChatRoomByTime } from '@/utils/sort/sortChatRoomByDate';

import * as S from './ChatList.styled';

const ChatList = (): JSX.Element => {
  useChat();

  const { chatPreviewList } = useChatPreviewList();
  const { isSearchBarOpen } = useHeaderOption();

  return (
    <>
      <AnimatePresence mode="wait">
        {isSearchBarOpen.chat && (
          <SearchBar placeholder="채팅방 이름, 참여자 검색" />
        )}
      </AnimatePresence>
      {chatPreviewList.length > 0 ? (
        <S.ChatListContainer>
          {sortChatRoomByTime(chatPreviewList).map((chatPreview) => (
            <ChatRoomPreview
              key={chatPreview.roomId}
              chatPreview={chatPreview}
            />
          ))}
        </S.ChatListContainer>
      ) : (
        <S.NoChatListContainer>
          <S.NoChatListText>참여중인 채팅방이 없습니다.</S.NoChatListText>
        </S.NoChatListContainer>
      )}
    </>
  );
};

export default ChatList;
