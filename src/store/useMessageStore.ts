import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ChatMessages, ChatRoom } from '@/types/types';

interface ChatState {
  chatrooms: ChatRoom[];
  initializeChatrooms: (initialData: ChatRoom[]) => void;
  storeMessage: (params: {
    type: 'text' | 'image' | 'file';
    chatroomId: string | undefined;
    senderId: number;
    content: string | File;
    contentName?: string;
    setShowErrorModal: (msg: string) => void;
  }) => void;
}

const useMessageStore = create<ChatState>()(
  persist(
    (set, get) => ({
      chatrooms: [],

      initializeChatrooms: (initialData: ChatRoom[]) => {
        set({ chatrooms: initialData });
      },

      storeMessage: ({
        type,
        chatroomId,
        senderId,
        content,
        contentName,
        setShowErrorModal,
      }) => {
        try {
          const newTimestamp = new Date();
          const koreaTimestamp = new Date(
            newTimestamp.getTime() + 9 * 60 * 60 * 1000
          );
          const todayDate = koreaTimestamp.toISOString().split('T')[0];

          const currentChatrooms = get().chatrooms;
          const updatedChatList = currentChatrooms.map((room) => {
            if (
              room.chatroomId ===
              (chatroomId !== undefined ? parseInt(chatroomId) : -1)
            ) {
              let updatedChats = [...room.chats];
              let lastChats = updatedChats[updatedChats.length - 1];

              const newMessageId =
                lastChats?.chatMessages?.length > 0
                  ? lastChats.chatMessages[lastChats.chatMessages.length - 1]
                      .messageId + 1
                  : 0;

              const newMessage: ChatMessages = {
                type,
                messageId: newMessageId,
                senderId,
                content,
                contentName,
                timestamp: newTimestamp.toISOString(),
              };

              if (lastChats && lastChats.date === todayDate) {
                lastChats.chatMessages = [
                  ...lastChats.chatMessages,
                  newMessage,
                ];
              } else {
                updatedChats.push({
                  date: todayDate,
                  chatMessages: [newMessage],
                });
              }

              return { ...room, chats: updatedChats };
            }
            return room;
          });

          set({ chatrooms: updatedChatList });
        } catch (error) {
          if (
            error instanceof DOMException &&
            error.name === 'QuotaExceededError'
          ) {
            setShowErrorModal('localStorage 용량을 초과했습니다.');
          } else {
            console.error(error);
          }
        }
      },
    }),
    {
      name: 'chatrooms',
      partialize: (state) => ({ chatrooms: state.chatrooms }),
    }
  )
);

export default useMessageStore;
