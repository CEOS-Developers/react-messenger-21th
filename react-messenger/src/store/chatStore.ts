import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { MessageItem, Message } from '@/type/message';
import allMessages from '@/data/messages.json';

type ConversationMeta = {
  chatId: number;
  targetUserId: number;
  chatType: 'user' | 'group';
  unreadCount: number;
};

type ChatStore = {
  input: string;
  conversationMap: Record<string, MessageItem[]>;
  conversationMeta: Record<string, ConversationMeta>;
  messages: MessageItem[];

  setInput: (v: string) => void;
  initRoom: (chatId: string) => string;
  sendTextMessage: (content: string, senderId: number, roomKey: string) => void;
  sendImageMessage: (base64: string, senderId: number, roomKey: string) => void;
};

export const useChatStore = create<ChatStore>((set, get) => {
  const map: Record<string, MessageItem[]> = {};
  const meta: Record<string, ConversationMeta> = {};

  (allMessages as Message[]).forEach((msg) => {
    const key = String(msg.chatId);
    const stored = localStorage.getItem(key);
    const originalMessages = stored ? JSON.parse(stored) : msg.messages;

    const withId = originalMessages.map((m: any) => ({
      ...m,
      id: m.messageId ?? uuidv4(),
    }));

    map[key] = withId;

    meta[key] = {
      chatId: msg.chatId,
      targetUserId: msg.targetUserId,
      chatType: msg.chatType,
      unreadCount: msg.unreadCount,
    };
  });

  return {
    input: '',
    conversationMap: map,
    conversationMeta: meta,
    messages: [],

    setInput: (v) => set({ input: v }),

    initRoom: (chatId) => {
      const { conversationMap } = get();
      const key = String(chatId);
      const messages = conversationMap[key] || [];
      set({ messages });
      return key;
    },

    sendTextMessage: (content, senderId, roomKey) => {
      const { messages, conversationMap } = get();

      const newMessage: MessageItem = {
        messageId: uuidv4(),
        messageType: 'text',
        content,
        createdAt: new Date().toISOString(),
        senderId,
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
        senderId,
      };

      const updated = [...messages, newMessage];
      const newMap = { ...conversationMap, [roomKey]: updated };

      set({ messages: updated, conversationMap: newMap });
      localStorage.setItem(roomKey, JSON.stringify(updated));
    },
  };
});
