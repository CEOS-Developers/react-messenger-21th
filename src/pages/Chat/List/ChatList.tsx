import { JSX } from 'react/jsx-runtime';

import { useChat } from '@/hooks/useChat';
import { useChatPreviewList } from '@/stores/useChatPreviewList';

import ChatRoomPreview from '@/components/ChatRoomPreview/ChatRoomPreview';

import * as S from './ChatList.styled';

const ChatList = (): JSX.Element => {
  useChat();

  const { chatPreviewList } = useChatPreviewList();

  return (
    <>
      {chatPreviewList.length > 0 ? (
        <S.ChatListContainer>
          {chatPreviewList.map((chat) => (
            <ChatRoomPreview key={chat.roomId} chatPreview={chat} />
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
