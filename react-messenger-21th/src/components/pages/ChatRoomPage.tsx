import { useState } from 'react';
import * as s from '../styles/ChatRoomPageStyles';
import ChatBoard from '../chatComponents/ChatBoard.tsx';

const ChatRoomPage: React.FC = () => {
  // 뭘 상태로 관리해야 할까?
  // 리렌더링 되어야 하는 부분!
  // 1. 저장된 메시지 (저장하고 불러와야 함)
  // 2. 선택된 유저 (유저 선택에 따라 서로 다른 정보 불러와야 함)
  // * 일단 기본적인 유저는 홍길동으로 설정...

  return (
    <s.ChatContainer>
      <s.UpperBarContainer></s.UpperBarContainer>
      <ChatBoard></ChatBoard>
      <s.BottomBarContainer></s.BottomBarContainer>
    </s.ChatContainer>
  );
};

export default ChatRoomPage;
