import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { switchSender } from '../states/chatSlice';
import * as s from '../styles/ChatRoomPageStyles';
import ChatBoard from '../chatComponents/ChatBoard';
import ChatInput from '../chatComponents/ChatInput';
import styled from 'styled-components';
import SearchButtonIcon from '/public/assets/icons/SearchUpperBar.svg?react';
import MenuButtonIcon from '/public/assets/icons/Hamburger.svg?react';
import PlusButtonIcon from '/public/assets/icons/PlusNotSelected.svg?react';
import PrevButton from '/public/assets/icons/PrevButton.svg?react';
import { useParams, useNavigate } from 'react-router-dom'; // roomID 받아올 예정

const ChatRoomPage: React.FC = () => {
  // Hook은 무조건 컴포넌트 최상단에서 호출
  const chatListRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // prev 버튼
  const handleBack = () => {
    navigate('/chat-rooms'); // 채팅방 목록 페이지 경로로
  };

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

  const handlePartnerClick = () => {
    if (partner?.id) {
      dispatch(switchSender(partner.id));
    }
  };

  return (
    <s.ChatContainer>
      {/* 현재 선택된 채팅방 메시지에 대해 */}
      <s.UpperBarContainer>
        <LeftGroup>
          <PrevButton onClick={handleBack} />
        </LeftGroup>

        <CenterGroup>
          <PartnerInfo onClick={handlePartnerClick}>
            <CurrentPartnersName>
              {partner?.name || '이름 없음'}
            </CurrentPartnersName>
            <CurrentUsersNumber>{roomUsers.length}</CurrentUsersNumber>
          </PartnerInfo>
        </CenterGroup>

        <RightGroup>
          <SearchButtonIcon width="16px" height="16px" />
          <MenuButtonIcon width="12px" height="12px" />
        </RightGroup>
      </s.UpperBarContainer>

      <s.ChatContentsContainer ref={chatListRef}>
        <ChatBoard />
      </s.ChatContentsContainer>

      <s.BottomBarContainer>
        <PlusButtonWrapper>
          <PlusButtonIcon width="16px" height="16px" />
        </PlusButtonWrapper>
        <ChatInput />
      </s.BottomBarContainer>
    </s.ChatContainer>
  );
};

// s.UpperBarContainer
export const UpperBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  height: 48px;
  border-bottom: 1px solid #e5e7eb;
`;

const PlusButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px; // 여기만 바닥에서 띄움
`;

// 왼쪽, 가운데, 오른쪽 그룹 정렬
const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CenterGroup = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

const PartnerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CurrentPartnersName = styled.span`
  cursor: pointer;
  margin: 0px;
  color: var(--Grey-Grey09, #111827);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.014px;
`;

const CurrentUsersNumber = styled.span`
  color: var(--Grey-Grey04, #9ca3af);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.014px;
`;

export default ChatRoomPage;
