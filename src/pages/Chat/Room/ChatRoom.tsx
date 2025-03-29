import { JSX } from 'react/jsx-runtime';
import { useRef, useState } from 'react';
import { useParams } from 'react-router';

import { CHAT_TEXTAREA_MAX_HEIGHT } from '@/constants/Chat';

import * as I from '@/icons/Chat';
import { SearchIcon } from '@/icons/Header';

import { useAutoResizeTextarea } from '@/hooks/useAutoResizeTextarea';
import { useChatPreviewList } from '@/stores/useChatPreviewList';
// import { useChatMessageByRoom } from '@/stores/useChatMessageByRoom';

import * as S from './ChatRoom.styled';

const ChatRoom = (): JSX.Element => {
  const chatInputRef = useRef<HTMLTextAreaElement | null>(null);
  const [chatInputValue, setChatInputValue] = useState<string>('');
  const [isComposing, setIsComposing] = useState<boolean>(false);

  // Textarea 자동 크기 조절
  useAutoResizeTextarea(chatInputRef, chatInputValue, CHAT_TEXTAREA_MAX_HEIGHT);

  const { roomId } = useParams();

  const { chatPreviewList } = useChatPreviewList();
  // const { chatMessageByRoom } = useChatMessageByRoom();

  const selectedChatRoom = chatPreviewList.find(
    (chatRoom) => chatRoom.roomId === roomId
  );
  // const chatRoomMessages = chatMessageByRoom[roomId ?? ''];

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
      <S.ChatRoomMessageSection></S.ChatRoomMessageSection>

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
