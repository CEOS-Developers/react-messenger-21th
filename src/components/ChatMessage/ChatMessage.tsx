import { JSX } from 'react/jsx-runtime';

import { MY_USER_INFO } from '@/constants/User';
import { PROFILE_SIZE_LIST } from '@/constants/Profile';

import { ChatRoomMessage } from '@/schemas/chatRoomMessage';

import { formatMessageTime } from '@/utils/formatDate';
import { renderMessage } from '@/utils/renderMessage';

import ProfileImageBox from '../ProfileImageBox/ProfileImageBox';

import * as S from './ChatMessage.styled';

type ChatMessageProps = {
  message: ChatRoomMessage;
  showSenderInfo?: boolean;
  showTime?: boolean;
  isLastMessage?: boolean;
  chatEndRef?: React.RefObject<HTMLDivElement | null>;
};

const ChatMessage = ({
  message,
  showSenderInfo,
  showTime,
  isLastMessage,
  chatEndRef,
}: ChatMessageProps): JSX.Element => {
  const { senderName, senderId, content, type, sentAt } = message;

  const isMyMessage = MY_USER_INFO.userId === senderId;

  if (type === 'text' && isMyMessage) {
    return (
      <S.ChatMessageWrapper
        $isMyMessage={true}
        ref={isLastMessage ? chatEndRef : null}
      >
        <S.ChatMessageContainer>
          {showTime && (
            <S.ChatMessageTime>{formatMessageTime(sentAt)}</S.ChatMessageTime>
          )}
          <S.ChatMessageBox>{renderMessage(content)}</S.ChatMessageBox>
        </S.ChatMessageContainer>
      </S.ChatMessageWrapper>
    );
  }

  return (
    <S.ChatMessageWrapper $isMyMessage={false}>
      <S.ChatMessageSenderWrapper>
        <ProfileImageBox
          size={PROFILE_SIZE_LIST.chatRoom}
          username={senderName}
          isProfileUpdated={false}
          showSenderInfo={showSenderInfo}
        />

        <S.SenderInfoContainer>
          {showSenderInfo && (
            <S.ChatMessageSender>{senderName}</S.ChatMessageSender>
          )}
          <S.ChatMessageContainer>
            <S.ChatMessageBox>{content}</S.ChatMessageBox>
            {showTime && (
              <S.ChatMessageTime>{formatMessageTime(sentAt)}</S.ChatMessageTime>
            )}
          </S.ChatMessageContainer>
        </S.SenderInfoContainer>
      </S.ChatMessageSenderWrapper>
    </S.ChatMessageWrapper>
  );
};

export default ChatMessage;
