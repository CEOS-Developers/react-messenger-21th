// src/features/chatSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Message = {
  id: string;
  senderId: string;
  senderName: string;
  senderImage: string;
  text: string;
  timestamp: string;
  isMine: boolean;
};

interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [
    {
      id: '1',
      senderId: '123',
      senderName: '김철수',
      senderImage: '/profile1.png',
      text: '안녕!',
      timestamp: '2024-03-24T12:00:00',
      isMine: false,
    },
    {
      id: '2',
      senderId: '123',
      senderName: '김철수',
      senderImage: '/profile1.png',
      text: '점심 먹었어?',
      timestamp: '2024-03-24T12:02:00',
      isMine: false,
    },
    {
      id: '3',
      senderId: 'me',
      senderName: '나',
      senderImage: '/profile2.png',
      text: '아직!',
      timestamp: '2024-03-24T12:05:00',
      isMine: true,
    },
  ],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
