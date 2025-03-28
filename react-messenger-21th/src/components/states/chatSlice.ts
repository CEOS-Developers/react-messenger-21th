// chatSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { chatRooms, me, friends } from '../../mocks/mockData'; // ✅ import 수정

export type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isMine: boolean;
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
  currentSenderId: string | null;
  users: User[];
}

// 초기 상태는 mockData로부터 가져온 값으로 설정
const initialState: ChatState = {
  chatRooms,
  currentChatRoomId: chatRooms[0]?.id || null,
  currentSenderId: me.id,
  users: [me, ...friends],
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
  },
});

export const { sendMessage, switchChatRoom, addChatRoom, switchSender } =
  chatSlice.actions;
export default chatSlice.reducer;
