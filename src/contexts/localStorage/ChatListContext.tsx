import { createContext, useContext, useEffect, useState } from 'react';
import * as Types from '@/types';
import initialData from '@/assets/data/chatList.json';
import { createChat, sendMessage, togglePin } from '@/utils';
import { loadChatList, saveChatList } from '@/services/localStorage';

type ChatListContextType = {
  chatList: Types.ChatList;
  setChatList: (updated: Types.ChatList) => void;
  onTogglePin: (chatId: string) => void;
  onSend: (chatId: string, senderId: string, text: string) => void;
  onCreateChat: (myId: string, userId: string, user: Types.User) => string;
};

const ChatListContext = createContext<ChatListContextType | null>(null);

function ChatListProvider({ children }: { children: React.ReactNode }) {
  const [chatList, setChatList] = useState<Types.ChatList>({});

  useEffect(() => {
    const loaded = loadChatList();

    if (!loaded || Object.keys(loaded).length === 0) {
      setChatList(initialData);
      saveChatList(initialData);
    } else {
      setChatList(loaded);
    }
  }, []);

  const update = (updated: Types.ChatList) => {
    setChatList(updated);
    saveChatList(updated);
  };

  // toggle pin
  const onTogglePin = (chatId: string) => {
    const updated = togglePin(chatId, chatList);
    update(updated);
  };

  // send message
  const onSend = (chatId: string, senderId: string, text: string) => {
    const updated = sendMessage(chatId, chatList, senderId, text);
    update(updated);
  };

  // create chat
  const onCreateChat = (myId: string, userId: string, user: Types.User): string => {
    const [updated, chatId] = createChat(chatList, myId, userId, user);
    update(updated);

    return chatId;
  };

  return (
    <ChatListContext.Provider value={{ chatList, setChatList: update, onTogglePin, onSend, onCreateChat }}>
      {children}
    </ChatListContext.Provider>
  );
}

function useChatList() {
  const context = useContext(ChatListContext);
  if (!context) throw new Error('Unvalid ChatListContext!');
  return context;
}

export { ChatListProvider, useChatList };
