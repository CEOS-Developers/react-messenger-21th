import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { MessageItem, Message } from '@/type/message';
import allMessages from '@/data/messages.json';

// 두 사용자와 채팅 타입으로 고유한 roomKey 생성
const generateRoomKey = (userId1: number, userId2: number, type: string) => {
  return [userId1, userId2].sort((a, b) => a - b).join('-') + `-${type}`;
};

type ChatStore = {
  input: string; // 채팅 입력창 상태
  conversationMap: Record<string, MessageItem[]>; // 채팅방별 메시지 저장
  messages: MessageItem[]; // 현재 열려 있는 채팅방의 메시지
  setInput: (v: string) => void; // input 상태 변경 함수
  initRoom: (currentUserId: number, targetUserId: number, type: string) => string; // 채팅방 메시지 초기화
  sendTextMessage: (content: string, senderId: number, roomKey: string) => void; // 텍스트 메시지 전송
  sendImageMessage: (base64: string, senderId: number, roomKey: string) => void; // 이미지 메시지 전송
};

export const useChatStore = create<ChatStore>((set, get) => ({
  input: '',

  // 모든 채팅방의 메시지를 로딩하거나 초기화
  conversationMap: (() => {
    const map: Record<string, MessageItem[]> = {};

    // 메시지 파일을 기반으로 초기화 (localStorage에 저장된 데이터 우선)
    (allMessages as Message[]).forEach((msg) => {
      const key = generateRoomKey(99, msg.id, msg.type);
      const stored = localStorage.getItem(key);
      map[key] = stored ? JSON.parse(stored) : msg.messages;
    });

    return map;
  })(),

  messages: [], // 현재 채팅방의 메시지 상태

  // input 필드 상태 업데이트
  setInput: (v) => set({ input: v }),

  // 채팅방 입장 시 메시지 초기화 + roomKey 반환
  initRoom: (currentUserId, targetUserId, type) => {
    const roomKey = generateRoomKey(currentUserId, targetUserId, type);
    const { conversationMap } = get();
    const messages = conversationMap[roomKey] || [];
    set({ messages }); // 현재 채팅 메시지 상태 설정
    return roomKey;
  },

  // 텍스트 메시지를 현재 채팅방에 추가
  sendTextMessage: (content, senderId, roomKey) => {
    const { messages, conversationMap } = get();

    const newMessage: MessageItem = {
      id: uuid(),
      type: 'text',
      content,
      time: new Date().toISOString(),
      sender: senderId,
    };

    const updated = [...messages, newMessage];
    const newMap = { ...conversationMap, [roomKey]: updated };

    // 상태 및 로컬 저장소 업데이트
    set({ messages: updated, conversationMap: newMap, input: '' });
    localStorage.setItem(roomKey, JSON.stringify(updated));
  },

  // 이미지 메시지를 현재 채팅방에 추가
  sendImageMessage: (base64, senderId, roomKey) => {
    const { messages, conversationMap } = get();

    const newMessage: MessageItem = {
      id: uuid(),
      type: 'image',
      content: base64,
      time: new Date().toISOString(),
      sender: senderId,
    };

    const updated = [...messages, newMessage];
    const newMap = { ...conversationMap, [roomKey]: updated };

    // 상태 및 로컬 저장소 업데이트
    set({ messages: updated, conversationMap: newMap });
    localStorage.setItem(roomKey, JSON.stringify(updated));
  },
}));
