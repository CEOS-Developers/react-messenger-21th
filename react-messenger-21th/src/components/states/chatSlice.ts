// src/features/chatSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Message = {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: string;
  isMine: boolean;
};

// User 기본 정보 구조
type User = {
  id: string;
  name: string;
  image: string;
};

// 채팅방 정보 관리 구조
interface ChatState {
  messages: Message[];
  currentSelectedUser: User;
  currentChatPartner: User[]; // 현재 채팅방 내 대화 중인 상대
  users: User[]; // 전체 유저 목록
}

// 초기 데이터 세팅
const initialState: ChatState = {
  messages: [
    {
      id: '1',
      senderId: '123',
      receiverId: 'me',
      text: '안녕!',
      timestamp: '2024-03-24T12:00:00',
      isMine: false,
    },
    {
      id: '2',
      senderId: '123',
      receiverId: 'me',
      text: '점심 먹었어?',
      timestamp: '2024-03-24T12:02:00',
      isMine: false,
    },
    {
      id: '3',
      senderId: 'me',
      receiverId: '123',
      text: '아직!',
      timestamp: '2024-03-24T12:05:00',
      isMine: true,
    },
  ],
  currentSelectedUser: {
    id: 'me',
    name: '이지후',
    image: '/ProfileDarkGrey.svg',
  },
  currentChatPartner: [
    { id: '123', name: '김서연', image: '/ProfileWhiteS.svg' },
  ],
  users: [
    { id: 'me', name: '이지후', image: '/ProfileDarkGrey.svg' },
    { id: '123', name: '김서연', image: '/ProfileWhiteS.svg' },
  ],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // 채팅 메시지 보내기                    // isMine의 정보를 제외한 데이터만 전달
    sendMessage: (state, action: PayloadAction<Omit<Message, 'isMine'>>) => {
      const newMessage = {
        ...action.payload,
        // isMine 정보를 id 비교를 통해 자동 설정
        isMine: action.payload.senderId === state.currentSelectedUser.id, // ✅ 자동 설정
      };
      state.messages.push(newMessage);
    },
    // 채팅 파트너 상태 변경
    // 이미 있는 사람 전달 -> 삭제 / 없는 사람 전달 -> 추가
    // == toggle
    switchChatPartner: (state, action: PayloadAction<string>) => {
      // users 배열에서 user id가 전달된 action의 아이디와 일치하는 유저 찾기
      const selectedUser = state.users.find(
        (user) => user.id === action.payload,
      );
      if (!selectedUser) return; // 일치하는 유저가 없으면 리턴

      // 이미 대화 상대 목록에 있으면 제거, 없으면 추가
      const isAlreadyInChat = state.currentChatPartner.some(
        (user) => user.id === selectedUser.id,
      );

      if (isAlreadyInChat) {
        // 이미 포함된 유저면 제거
        state.currentChatPartner = state.currentChatPartner.filter(
          (user) => user.id !== selectedUser.id,
        );
      } else {
        // 포함되지 않은 유저면 추가
        state.currentChatPartner.push(selectedUser);
      }
    },
  },
});

export const { sendMessage, switchChatPartner } = chatSlice.actions;
export default chatSlice.reducer;
