import { JSX } from 'react/jsx-runtime';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import { CHAT_TEXTAREA_MAX_HEIGHT, MY_USER_INFO } from '@/constants/Chat';

import { ChatMessageType } from '@/types/Chat';

import { useChatMessage } from '@/hooks/useChat';
import { useAutoResizeTextarea } from '@/hooks/useAutoResizeTextarea';

import { useChatMessageByRoom } from '@/stores/useChatMessageByRoom';
import { useChatPreviewList } from '@/stores/useChatPreviewList';

import { ChatRoomMessage } from '@/schemas/chatRoomMessage';

import { sortMessageByDate } from '@/utils/sortMessageByDate';
import { isSameDate, isSameTimeGroup } from '@/utils/formatDate';

import * as I from '@/icons/Chat';
import { SearchIcon } from '@/icons/Header';
import ChatMessage from '@/components/ChatMessage/ChatMessage';
import ChatDate from '@/components/ChatDate/ChatDate';

import * as S from './ChatRoom.styled';

const ChatRoom = (): JSX.Element => {
  const chatInputRef = useRef<HTMLTextAreaElement | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const [chatInputValue, setChatInputValue] = useState<string>('');
  const [isComposing, setIsComposing] = useState<boolean>(false);

  // Textarea 자동 크기 조절
  useAutoResizeTextarea(chatInputRef, chatInputValue, CHAT_TEXTAREA_MAX_HEIGHT);

  const { roomId } = useParams();
  const safeRoomId = roomId ?? '';

  // roomId에 해당하는 채팅 메세지 목록 가져오기
  useChatMessage(safeRoomId);

  const { messagesByRoom, sendMessage } = useChatMessageByRoom();
  const { initialChatPreview, setInitalChatPreview, chatPreviewList } =
    useChatPreviewList();

  // 채팅방 이름을 가져오기 위한 채팅방 검색
  const selectedChatRoomMetaData = chatPreviewList.find(
    (chatRoom) => chatRoom.roomId === roomId
  );

  const chatRoomName = selectedChatRoomMetaData
    ? selectedChatRoomMetaData.roomName
    : initialChatPreview.roomName;

  // 채팅 메세지 목록 정렬 (시간 순서)
  const sortChatMessageByDate: ChatRoomMessage[] = useMemo(() => {
    const messages = messagesByRoom[safeRoomId] || [];
    return sortMessageByDate(messages);
  }, [messagesByRoom, safeRoomId]);

  const handleSendMessage = () => {
    if (chatInputValue.trim() === '') return;

    const newMessage = {
      messageId: uuidv4(),
      senderId: MY_USER_INFO.userId,
      senderName: MY_USER_INFO.username,
      content: chatInputValue,
      type: 'text' as ChatMessageType,
      sentAt: new Date().toISOString(),
    };

    if (!selectedChatRoomMetaData) {
      // roomId에 해당하는 채팅방 메타데이터 및 채팅 메세지 데이터 생성
      const newChatRoomMetaData = {
        ...initialChatPreview,
        lastMessage: newMessage,
        unreadCount: 1, //  메세지 전송 시, 읽지 않은 메세지 개수 1 증가
      };

      // 채팅방 메타데이터 전역 상태 변경
      setInitalChatPreview(newChatRoomMetaData);

      // 채팅방 메타데이터 로컬 스토리지에 저장
      localStorage.setItem(
        'chatPreviewList',
        JSON.stringify([...chatPreviewList, newChatRoomMetaData])
      );
    }

    // 메세지 전송
    sendMessage(safeRoomId, newMessage);

    // 채팅 입력창 초기화
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

  useEffect(() => {
    if (messagesByRoom[safeRoomId]?.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messagesByRoom));
    }
  }, [messagesByRoom, safeRoomId]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [sortChatMessageByDate]);

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
          <S.TotalUnreadCount>1</S.TotalUnreadCount>
        </S.BackToChatRoomLink>
        <S.ChatRoomName>{chatRoomName}</S.ChatRoomName>
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
            const nextMessage = sortChatMessageByDate[index + 1];

            const isSameSenderAsPrevious =
              prevMessage?.senderId === message.senderId;

            const showDateLabel =
              index === 0 || !isSameDate(prevMessage?.sentAt, message.sentAt);

            const isLastInTimeGroup =
              !nextMessage ||
              nextMessage.senderId !== message.senderId ||
              !isSameTimeGroup(nextMessage.sentAt, message.sentAt);

            return (
              <React.Fragment key={message.messageId}>
                {showDateLabel && <ChatDate date={message.sentAt} />}
                <ChatMessage
                  message={message}
                  showSenderInfo={!isSameSenderAsPrevious}
                  showTime={isLastInTimeGroup}
                  isLastMessage={index === sortChatMessageByDate.length - 1}
                  chatEndRef={chatEndRef}
                />
              </React.Fragment>
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
