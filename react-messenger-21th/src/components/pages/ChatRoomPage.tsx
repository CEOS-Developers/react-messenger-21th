import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { switchSender } from '../states/chatSlice';
import { useParams, useNavigate } from 'react-router-dom'; // roomID 받아올 예정

import * as s from '../styles/ChatRoomPageStyles';
import ChatBoard from '../chatComponents/ChatBoard';
import ChatInput from '../chatComponents/ChatInput';

import SearchButtonIcon from '/public/assets/icons/SearchUpperBar.svg?react';
import MenuButtonIcon from '/public/assets/icons/Hamburger.svg?react';
import PlusButtonIcon from '/public/assets/icons/PlusNotSelected.svg?react';
import PrevButton from '/public/assets/icons/PrevButton.svg?react';

const ChatRoomPage = () => {
  const idForMe = 'user-me';

  // Hook은 무조건 컴포넌트 최상단에서 호출
  const chatListRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { roomId } = useParams(); // URL에서 roomId 받아오기
  const dispatch = useDispatch();

  const chatRooms = useSelector((state: RootState) => state.chat.chatRooms);
  const currentSenderId = useSelector(
    (state: RootState) => state.chat.currentSenderId,
  );
  const users = useSelector((state: RootState) => state.chat.users);

  // roomId를 기반으로 해당 채팅방 찾기
  const currentChatRoom = chatRooms.find((room) => room.id === roomId);
  // messages도 미리 선언 (Hook 쓸 때 순서 중요!!!!!!!!)
  const messages = currentChatRoom?.messages ?? [];

  useEffect(() => {
    chatListRef.current?.scrollTo(0, chatListRef.current.scrollHeight);
  }, [messages.length]);

  if (!currentChatRoom) return <p>채팅방을 찾을 수 없습니다</p>;

  const roomUsers = currentChatRoom.participants
    .map((id) => users.find((user) => user.id === id))
    .filter((u): u is (typeof users)[number] => Boolean(u));

  const partner = roomUsers.find((user) => user.id !== currentSenderId);

  // prev 버튼
  const handleBack = () => {
    navigate('/chat-rooms'); // 채팅방 목록 페이지 경로로
    dispatch(switchSender(idForMe));
  };

  const handlePartnerClick = () => {
    if (partner?.id) {
      dispatch(switchSender(partner.id));
    }
  };

  return (
    <s.ChatContainer>
      {/* 현재 선택된 채팅방 메시지에 대해 */}
      <s.UpperBarContainer>
        <s.LeftGroup>
          <PrevButton onClick={handleBack} />
        </s.LeftGroup>

        <s.CenterGroup>
          <s.PartnerInfo onClick={handlePartnerClick}>
            <s.CurrentPartnersName>
              {partner?.name || '이름 없음'}
            </s.CurrentPartnersName>
            <s.CurrentUsersNumber>{roomUsers.length}</s.CurrentUsersNumber>
          </s.PartnerInfo>
        </s.CenterGroup>

        <s.RightGroup>
          <SearchButtonIcon width="18px" height="18px" />
          <MenuButtonIcon width="16px" height="16px" />
        </s.RightGroup>
      </s.UpperBarContainer>

      <s.ChatContentsContainer ref={chatListRef}>
        <ChatBoard />
      </s.ChatContentsContainer>

      <s.BottomBarContainer>
        <s.PlusButtonWrapper>
          <PlusButtonIcon width="16px" height="16px" />
        </s.PlusButtonWrapper>
        <ChatInput />
      </s.BottomBarContainer>
    </s.ChatContainer>
  );
};

export default ChatRoomPage;
