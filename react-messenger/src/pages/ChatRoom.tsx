import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChatHeader from '@/components/chatroom/ChatHeader';
import ChatInput from '@/components/chatroom/ChatInput';
import ChatMessage from '@/components/chatroom/ChatMessage';
import allMessages from '@/data/messages.json';

// 메시지 타입 정의
export type MessageItem = {
  type: 'text' | 'image';
  content: string;
  time: string;
  sender?: number;
};

export type Message = {
  id: number;
  type: 'user' | 'group';
  messages: MessageItem[];
};

const ChatRoom = () => {
  const location = useLocation();
  const { name, profileImg, id, type } = location.state || {};

  const [currentUser, setCurrentUser] = useState({
    name: '전지연',
    id: 99,
    profileImg: '/path/to/jeon.svg',
  });

  const [targetUser, setTargetUser] = useState({ name, id, profileImg });

  const [conversationMap, setConversationMap] = useState<Record<string, MessageItem[]>>(() => {
    const map: Record<string, MessageItem[]> = {};
    (allMessages as Message[]).forEach((msg) => {
      const key = `${msg.id}-${msg.type}`;
      map[key] = msg.messages;
    });
    return map;
  });

  const roomKey = `${id}-${type}`;
  const [messages, setMessages] = useState<MessageItem[]>(conversationMap[roomKey] || []);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: MessageItem = {
      type: 'text',
      content: input,
      time: new Date().toISOString(),
      sender: currentUser.id,
    };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setConversationMap((prev) => ({ ...prev, [roomKey]: updatedMessages }));
    setInput('');
  };

  const handleImageSend = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    const newMessage: MessageItem = {
      type: 'image',
      content: imageUrl,
      time: new Date().toISOString(),
      sender: currentUser.id,
    };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setConversationMap((prev) => ({ ...prev, [roomKey]: updatedMessages }));
  };

  const handleHeaderClick = () => {
    const prevUser = { ...currentUser };
    const nextKey = `${prevUser.id}-${type}`;
    setCurrentUser(targetUser);
    setTargetUser(prevUser);
    setMessages(conversationMap[nextKey] || []);
  };

  return (
    <div className="flex flex-col justify-between h-screen bg-grey-100">
      <div className="flex flex-col gap-2 p-4 overflow-y-auto flex-1">
        <ChatHeader name={targetUser.name} onClick={handleHeaderClick} />

        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} isMine={msg.sender === currentUser.id} />
        ))}
      </div>

      <ChatInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onSend={handleSend}
        onImageSend={handleImageSend}
      />
    </div>
  );
};

export default ChatRoom;
