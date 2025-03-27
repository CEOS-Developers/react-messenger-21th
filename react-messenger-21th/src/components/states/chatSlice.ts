// src/features/chatSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export type Message = {
  id: string; // text의 고유 ID
  senderId: string; // 보낸 사람의 ID (채팅방 번호로 나누니까 받는 사람 필요 없음)
  text: string;
  timestamp: string;
  isMine: boolean;
};

// 채팅방 타입 (여러 개의 채팅방을 관리)
type ChatRoom = {
  id: string; // 채팅방 ID
  participants: string[]; // 채팅방 참여자 ID 배열
  messages: Message[]; // 해당 채팅방의 메시지 리스트
};

// User 기본 정보 구조
type User = {
  id: string;
  name: string;
  image: string;
};

// 전체 전역 상태 (채팅방 구조로 수정)
interface ChatState {
  chatRooms: ChatRoom[]; // 여러 개의 채팅방을 관리
  currentChatRoomId: string | null; // 현재 선택된 채팅방 ID
  currentSenderId: string | null;
  users: User[]; // 전체 유저 목록
}

// 초기 데이터 세팅
const idForMe = uuidv4();
const idForYou = uuidv4();
const userMe: User = {
  id: idForMe,
  name: '이지후',
  image: '/assets/icons/ProfileWhiteS.svg',
};
const userYou: User = {
  id: idForYou,
  name: '김서연',
  image: '/assets/icons/ProfileDarkGreyS.svg',
};

// 초기 데이터
const initialState: ChatState = {
  chatRooms: [
    {
      id: 'room1',
      participants: [idForMe, idForYou], // 예시: 나와 김서연의 채팅방
      messages: [
        {
          id: uuidv4(),
          senderId: idForYou,
          text: '안녕!',
          timestamp: '2024-03-24T12:00:00',
          isMine: false,
        },
        {
          id: uuidv4(),
          senderId: idForYou,
          text: '점심 먹었어?',
          timestamp: '2024-03-24T12:02:00',
          isMine: false,
        },
        {
          id: uuidv4(),
          senderId: idForMe,
          text: '아직!',
          timestamp: '2024-03-24T12:05:00',
          isMine: true,
        },
      ],
    },
  ],
  currentChatRoomId: 'room1', // 기본값 설정
  currentSenderId: idForMe, // 현재 보낸 사람 ID 설정
  users: [userMe, userYou],
};

// Redux Slice 생성
const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // 메시지 전송
    sendMessage: (
      state,
      action: PayloadAction<{
        roomId: string; // isMine 정보는 빼고
        message: Omit<Message, 'isMine'>;
      }>,
    ) => {
      const { roomId, message } = action.payload; // room id 가 같은 경우만
      const chatRoom = state.chatRooms.find((room) => room.id === roomId);
      if (chatRoom) {
        // chatRoom.messages에 새로 푸쉬
        chatRoom.messages.push({
          ...message,
          isMine: message.senderId === idForMe, // 자동 설정
        });
      }
    },

    // 현재 선택된 채팅방 변경
    switchChatRoom: (state, action: PayloadAction<string>) => {
      state.currentChatRoomId = action.payload;
    },

    // 새로운 채팅방 추가
    addChatRoom: (
      state,
      action: PayloadAction<{ roomId: string; participants: string[] }>,
    ) => {
      state.chatRooms.push({
        id: action.payload.roomId,
        participants: action.payload.participants,
        messages: [],
      });
    },

    // 보낸 사람 변경 !! (New)
    switchSender: (state, action: PayloadAction<string>) => {
      state.currentSenderId = action.payload ?? '';
    },
  },
});

export const { sendMessage, switchChatRoom, addChatRoom } = chatSlice.actions;
export default chatSlice.reducer;
