import { JSX } from 'react/jsx-runtime';

import { PROFILE_SIZE_LIST } from '@/constants/Profile';

import { ChatPreview } from '@/schemas/chatPreview';

import ProfileImageBox from '../ProfileImageBox/ProfileImageBox';

import { formatMessageTime } from '@/utils/formatDate';

import * as S from './ChatRoomPreview.styled';
import { generateChatRoomId } from '@/utils/generateRoomId';
import { MY_USER_INFO } from '@/constants/User';

interface ChatRoomPreviewProps {
  chatPreview: ChatPreview;
}

const ChatRoomPreview = ({
  chatPreview,
}: ChatRoomPreviewProps): JSX.Element => {
  const { roomId, roomName, lastMessage, unreadCount } = chatPreview;

  const myChatRoomId = generateChatRoomId(
    MY_USER_INFO.userId,
    MY_USER_INFO.userId
  );

  // 현재 채팅방이 내 채팅방인지 확인
  const isMyChatRoom = roomId === myChatRoomId;

  return (
    <S.ChatRoomPreviewContainer to={`room-${roomId}`}>
      <S.ChatRoomPreviewProfileWrapper>
        <ProfileImageBox
          size={PROFILE_SIZE_LIST.personalChat}
          username={roomName}
        />
        <S.ChatRoomPreviewContent>
          <S.MyChatRoomNameContainer>
            {isMyChatRoom && <S.MyChatRoomIndicator>나</S.MyChatRoomIndicator>}
            <S.ChatRoomName>{chatPreview.roomName}</S.ChatRoomName>
          </S.MyChatRoomNameContainer>

          <S.ChatRoomLastMessage>{lastMessage.content}</S.ChatRoomLastMessage>
        </S.ChatRoomPreviewContent>
      </S.ChatRoomPreviewProfileWrapper>
      <S.LastMessageTimeUnReadCountWrapper>
        <S.LastMessageTime>
          {formatMessageTime(lastMessage?.sentAt)}
        </S.LastMessageTime>
        {unreadCount !== 0 && <S.UnReadCount>{unreadCount}</S.UnReadCount>}
      </S.LastMessageTimeUnReadCountWrapper>
    </S.ChatRoomPreviewContainer>
  );
};

export default ChatRoomPreview;
