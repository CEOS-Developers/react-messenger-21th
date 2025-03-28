import { JSX } from 'react/jsx-runtime';

import * as S from './ChatRoom.styled';

const ChatRoom = (): JSX.Element => {
  return (
    <S.ChatRoomContainer
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: '0%', opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
    ></S.ChatRoomContainer>
  );
};

export default ChatRoom;
