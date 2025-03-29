import { JSX } from 'react/jsx-runtime';

import { PROFILE_SIZE_LIST } from '@/constants/Profile';

import { ChatPreview } from '@/schemas/chatPreview';

import ProfileImageBox from '../ProfileImageBox/ProfileImageBox';

import { formatMessageTime } from '@/utils/formatDate';

import * as S from './ChatRoomPreview.styled';

interface ChatRoomPreviewProps {
  chatPreview: ChatPreview;
}

const ChatRoomPreview = ({
  chatPreview,
}: ChatRoomPreviewProps): JSX.Element => {
  const { roomId, roomName, lastMessage, unreadCount } = chatPreview;

  return (
    <S.ChatRoomPreviewContainer to={`${roomId}`}>
      <S.ChatRoomPreviewProfileWrapper>
        <ProfileImageBox
          size={PROFILE_SIZE_LIST.personalChat}
          username={roomName}
        />
        <S.ChatRoomPreviewContent>
          <S.ChatRoomName>{chatPreview.roomName}</S.ChatRoomName>
          <S.ChatRoomLastMessage>{lastMessage.content}</S.ChatRoomLastMessage>
        </S.ChatRoomPreviewContent>
      </S.ChatRoomPreviewProfileWrapper>
      <S.LastMessageTimeUnReadCountWrapper>
        <S.LastMessageTime>
          {formatMessageTime(lastMessage?.sentAt)}
        </S.LastMessageTime>
        <S.UnReadCount>{unreadCount}</S.UnReadCount>
      </S.LastMessageTimeUnReadCountWrapper>
    </S.ChatRoomPreviewContainer>
  );
};

export default ChatRoomPreview;
