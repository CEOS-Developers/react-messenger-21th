import { JSX } from 'react/jsx-runtime';

import { MY_USER_INFO } from '@/constants/Chat';
import { PROFILE_SIZE_LIST } from '@/constants/Profile';

import { ChatRoomMessage } from '@/schemas/chatRoomMessage';

import { formatMessageTime } from '@/utils/formatDate';

import ProfileImageBox from '../ProfileImageBox/ProfileImageBox';

import * as S from './ChatMessage.styled';

type ChatMessageProps = {
  message: ChatRoomMessage;
  showSenderInfo?: boolean;
};

const ChatMessage = ({
  message,
  showSenderInfo,
}: ChatMessageProps): JSX.Element => {
  const { senderName, senderId, content, type, sentAt } = message;

  const isMyMessage = MY_USER_INFO.userId === senderId;

  if (type === 'text' && isMyMessage) {
    return (
      <S.ChatMessageWrapper $isMyMessage={true}>
        <S.ChatMessageContainer>
          <S.ChatMessageBox>{content}</S.ChatMessageBox>
          <S.ChatMessageTime>{formatMessageTime(sentAt)}</S.ChatMessageTime>
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
            <S.ChatMessageTime>{formatMessageTime(sentAt)}</S.ChatMessageTime>
          </S.ChatMessageContainer>
        </S.SenderInfoContainer>
      </S.ChatMessageSenderWrapper>
    </S.ChatMessageWrapper>
  );
};

export default ChatMessage;
