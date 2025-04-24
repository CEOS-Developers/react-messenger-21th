import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { MessageItem, Message } from '@/type/message';
import allMessages from '@/data/messages.json';

type ChatStore = {
  input: string;
  conversationMap: Record<string, MessageItem[]>; // chatId 기반으로 메시지 저장
  messages: MessageItem[]; // 현재 채팅방 메시지
  setInput: (v: string) => void;
  initRoom: (chatId: string) => string; // chatId 기반 초기화
  sendTextMessage: (content: string, senderId: number, roomKey: string) => void;
  sendImageMessage: (base64: string, senderId: number, roomKey: string) => void;
};

export const useChatStore = create<ChatStore>((set, get) => ({
  input: '',

  // 대화방별 메시지 초기 상태 설정
  conversationMap: (() => {
    const map: Record<string, MessageItem[]> = {};

    (allMessages as Message[]).forEach((msg) => {
      const key = String(msg.chatId); // ✅ chatId를 그대로 키로 사용
      const stored = localStorage.getItem(key);
      const originalMessages = stored ? JSON.parse(stored) : msg.messages;

      const withId = originalMessages.map((m: any) => ({
        ...m,
        id: m.id ?? uuidv4(),
      }));

      map[key] = withId;
    });

    return map;
  })(),

  messages: [],

  setInput: (v) => set({ input: v }),

  initRoom: (chatId) => {
    const { conversationMap } = get();
    const key = String(chatId);
    const messages = conversationMap[key] || [];
    set({ messages });
    return key; // roomKey로 반환
  },

  sendTextMessage: (content, senderId, roomKey) => {
    const { messages, conversationMap } = get();

    const newMessage: MessageItem = {
      messageId: uuidv4(),
      messageType: 'text',
      content,
      createdAt: new Date().toISOString(),
      senderId: senderId,
    };

    const updated = [...messages, newMessage];
    const newMap = { ...conversationMap, [roomKey]: updated };

    set({ messages: updated, conversationMap: newMap, input: '' });
    localStorage.setItem(roomKey, JSON.stringify(updated));
  },

  sendImageMessage: (base64, senderId, roomKey) => {
    const { messages, conversationMap } = get();

    const newMessage: MessageItem = {
      messageId: uuidv4(),
      messageType: 'image',
      content: base64,
      createdAt: new Date().toISOString(),
      senderId: senderId,
    };

    const updated = [...messages, newMessage];
    const newMap = { ...conversationMap, [roomKey]: updated };

    set({ messages: updated, conversationMap: newMap });
    localStorage.setItem(roomKey, JSON.stringify(updated));
  },
}));
