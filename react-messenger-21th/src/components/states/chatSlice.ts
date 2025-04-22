// chatSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from '../../utils/storage'; // 경로는 알맞게 조정!
import jsonData from '../../mocks/mockData.json'; // ← webpack이나 vite에서 json import 지원

export type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isMine: boolean;
  reaction?: '❤️' | '🥹' | '😊' | null;
};

export type ChatRoom = {
  id: string;
  participants: string[];
  messages: Message[];
};

export type User = {
  id: string;
  name: string;
  image: string;
  // 프로필 페이지 위해서 추가
  statusMessage?: string;
  isUpdated?: boolean;
  birthday?: Date;
};

interface ChatState {
  chatRooms: ChatRoom[];
  currentChatRoomId: string | null;
  currentSenderId: string;
  users: User[];
}

// 1. localStorage에서 불러오기
const savedChatRoomsRaw = loadFromLocalStorage('chatRooms');

// 1-1. isMine 복원
const reconstructedChatRooms = savedChatRoomsRaw?.map((room: ChatRoom) => ({
  ...room,
  participants: room.participants, // 그대로 유지
  messages: room.messages.map((msg) => ({
    ...msg,
    isMine: msg.senderId === jsonData.idForMe,
  })),
}));

// 2. mockData + localStorage 병합: 룸 번호마다, 메시지 번호로 탐색해서 저장장
// isMine은 저장 안 해 놨다가 복원시킬 때 계산
const fallbackChatRooms: ChatRoom[] = jsonData.chatRooms.map((room) => ({
  ...room,
  messages: room.messages.map((msg) => ({
    ...msg,
    timestamp: msg.timestamp,
    isMine: msg.senderId === jsonData.idForMe,
  })),
}));
const initialChatRooms = reconstructedChatRooms ?? fallbackChatRooms;

// 3. User mockData로부터 불러오기기
// birthDay -> date 객체 변환은 이때! (json은 date객체 못 받음)
const users: User[] = [
  {
    ...jsonData.me,
  },
  ...jsonData.friends.map((f) => ({
    ...f,
    birthday: f.birthday ? new Date(f.birthday) : undefined,
  })),
];

// 초기 상태
const initialState: ChatState = {
  chatRooms: initialChatRooms,
  currentChatRoomId: initialChatRooms[0]?.id || null,
  currentSenderId: jsonData.idForMe,
  users,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // 메시지 보내기
    sendMessage: (
      state,
      action: PayloadAction<{
        roomId: string;
        message: Omit<Message, 'isMine'>;
      }>,
    ) => {
      const { roomId, message } = action.payload;
      const chatRoom = state.chatRooms.find((room) => room.id === roomId);

      if (chatRoom) {
        chatRoom.messages.push({
          ...message,
          isMine: message.senderId === state.currentSenderId,
        });

        // 로컬 스토리지 저장
        localStorage.setItem('chatRooms', JSON.stringify(state.chatRooms));
      }
    },

    // 채팅방 바꾸기기
    switchChatRoom: (state, action: PayloadAction<string>) => {
      state.currentChatRoomId = action.payload;
    },

    // 채팅방 추가하기기
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

    // 메시지 보는 기준 바꾸기기
    switchSender: (state, action: PayloadAction<string>) => {
      state.currentSenderId = action.payload;
    },

    // 감정 표현 추가하기
    addReaction: (
      state,
      action: PayloadAction<{
        roomId: string;
        messageId: string;
        reaction: '❤️' | '🥹' | '😊' | null;
      }>,
    ) => {
      const { roomId, messageId, reaction } = action.payload;
      const room = state.chatRooms.find((r) => r.id === roomId);
      const message = room?.messages.find((m) => m.id === messageId);
      if (message) {
        message.reaction =
          message.reaction === reaction ? null : action.payload.reaction;

        // 저장
        localStorage.setItem('chatRooms', JSON.stringify(state.chatRooms));
      }
    },
  },
});

export const {
  sendMessage,
  switchChatRoom,
  addChatRoom,
  switchSender,
  addReaction,
} = chatSlice.actions;

export default chatSlice.reducer;
