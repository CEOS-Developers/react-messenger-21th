import { JSX } from 'react/jsx-runtime';
import { useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router';

import { CHAT_TEXTAREA_MAX_HEIGHT } from '@/constants/Chat';

import * as I from '@/icons/Chat';
import { SearchIcon } from '@/icons/Header';

import ChatMessage from '@/components/ChatMessage/ChatMessage';

import { useChatMessage } from '@/hooks/useChat';
import { useAutoResizeTextarea } from '@/hooks/useAutoResizeTextarea';

import { useChatPreviewList } from '@/stores/useChatPreviewList';
import { useChatMessageByRoom } from '@/stores/useChatMessageByRoom';

import { sortMessageByDate } from '@/utils/sortMessageByDate';

import * as S from './ChatRoom.styled';
import { ChatRoomMessage } from '@/schemas/chatRoomMessage';

const ChatRoom = (): JSX.Element => {
  const chatInputRef = useRef<HTMLTextAreaElement | null>(null);
  const [chatInputValue, setChatInputValue] = useState<string>('');
  const [isComposing, setIsComposing] = useState<boolean>(false);

  // Textarea 자동 크기 조절
  useAutoResizeTextarea(chatInputRef, chatInputValue, CHAT_TEXTAREA_MAX_HEIGHT);

  const { roomId } = useParams();

  // 채팅 메세지 목록 가져오기
  useChatMessage(roomId ?? '');

  const { chatPreviewList } = useChatPreviewList();
  const { chatMessageByRoom } = useChatMessageByRoom();

  // 채팅 메세지 목록 정렬 (시간 순서)
  const sortChatMessageByDate: ChatRoomMessage[] = useMemo(() => {
    return sortMessageByDate(chatMessageByRoom);
  }, [chatMessageByRoom]);

  const selectedChatRoom = chatPreviewList.find(
    (chatRoom) => chatRoom.roomId === roomId
  );

  const handleSendMessage = () => {
    console.log('보낸 메세지: ', chatInputValue);
    setChatInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
      e.preventDefault(); // 줄바꿈 방지 (기본 동작)
      handleSendMessage();
    }
  };

  const handleSendChatMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.ChatRoomContainer
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: '0%', opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
    >
      <S.ChatRoomHeaderSection>
        <S.BackToChatRoomLink to={'/chat'}>
          <I.BackArrowIcon />
        </S.BackToChatRoomLink>
        <S.ChatRoomName>{selectedChatRoom?.roomName}</S.ChatRoomName>
        <S.ChatRoomHeaderOptions>
          <S.ChatRoomHeaderOptionButton>
            <SearchIcon />
          </S.ChatRoomHeaderOptionButton>
          <S.ChatRoomHeaderOptionButton>
            <I.HamburgerIcon />
          </S.ChatRoomHeaderOptionButton>
        </S.ChatRoomHeaderOptions>
      </S.ChatRoomHeaderSection>

      {/* 채팅 메세지 섹션 */}
      <S.ChatRoomMessageSection>
        <S.ChatMessageBoxWrapper>
          {sortChatMessageByDate?.map((message, index) => {
            const prevMessage = sortChatMessageByDate[index - 1];
            const isSameSenderAsPrevious =
              prevMessage?.senderId === message.senderId;

            return (
              <ChatMessage
                key={message.messageId}
                message={message}
                showSenderInfo={!isSameSenderAsPrevious}
              />
            );
          })}
        </S.ChatMessageBoxWrapper>
      </S.ChatRoomMessageSection>

      {/* 채팅 입력 섹션 */}
      <S.ChatRoomInputSection>
        <S.InputOptionButton>
          <I.ChatRoomPlusIcon />
        </S.InputOptionButton>

        <S.ChatRoomInputForm onSubmit={handleSendChatMessage}>
          <S.ChatTextareaContainer>
            <S.ChatTextarea
              ref={chatInputRef}
              rows={1}
              placeholder="메세지를 입력하세요."
              value={chatInputValue}
              onChange={(e) => setChatInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onCompositionStart={() => setIsComposing(true)}
              onCompositionEnd={() => setIsComposing(false)}
            />
            <S.EmojiButton>
              <I.EmojiIcon />
            </S.EmojiButton>
          </S.ChatTextareaContainer>

          {chatInputValue.trim() !== '' ? (
            <S.SendButton
              type="submit"
              initial={{ y: '1px', opacity: 0 }}
              animate={{ y: '0', opacity: 1 }}
              exit={{ y: '1px', opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={handleSendMessage}
            >
              <I.SendIcon />
            </S.SendButton>
          ) : (
            <S.InputOptionButton>
              <I.HashtagIcon />
            </S.InputOptionButton>
          )}
        </S.ChatRoomInputForm>
      </S.ChatRoomInputSection>
    </S.ChatRoomContainer>
  );
};

export default ChatRoom;
