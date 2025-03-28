import { JSX } from 'react/jsx-runtime';

import { PROFILE_SIZE_LIST } from '@/constants/Profile';

import { ChatPreview } from '@/schemas/chatPreview';

import ProfileImageBox from '../ProfileImageBox/ProfileImageBox';

import { formatLastMessageTime } from '@/utils/formatDate';

import * as S from './ChatRoomPreview.styled';

interface ChatRoomPreviewProps {
  chatPreview: ChatPreview;
}

const ChatRoomPreview = ({
  chatPreview,
}: ChatRoomPreviewProps): JSX.Element => {
  return (
    <S.ChatRoomPreviewContainer>
      <S.ChatRoomPreviewProfileWrapper>
        <ProfileImageBox
          size={PROFILE_SIZE_LIST.personalChat}
          username={chatPreview.roomName}
        />
        <S.ChatRoomPreviewContent>
          <S.ChatRoomName>{chatPreview.roomName}</S.ChatRoomName>
          <S.ChatRoomLastMessage>
            {chatPreview.lastMessage.content}
          </S.ChatRoomLastMessage>
        </S.ChatRoomPreviewContent>
      </S.ChatRoomPreviewProfileWrapper>
      <S.LastMessageTimeUnReadCountWrapper>
        <S.LastMessageTime>
          {formatLastMessageTime(chatPreview.lastMessage?.sentAt)}
        </S.LastMessageTime>
        <S.UnReadCount>{chatPreview.unreadCount}</S.UnReadCount>
      </S.LastMessageTimeUnReadCountWrapper>
    </S.ChatRoomPreviewContainer>
  );
};

export default ChatRoomPreview;
