import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChatHeader from '@/components/chatRoom/ChatHeader';
import ChatInput from '@/components/chatRoom/ChatInput';
import ChatMessage from '@/components/chatRoom/ChatMessage';
import MyImg from '@/assets/svgs/home/ProfileImg.svg';
import allMessages from '@/data/messages.json';
import { formatDate } from '@/utils/formatDate';

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

const generateRoomKey = (userId1: number, userId2: number, type: string) => {
  return [userId1, userId2].sort((a, b) => a - b).join('-') + `-${type}`;
};

const ChatRoom = () => {
  const location = useLocation();
  const { name, profileImg, id, type } = location.state || {};

  const [currentUser, setCurrentUser] = useState({
    name: '전지연',
    id: 99,
    profileImg: MyImg,
  });

  const [targetUser, setTargetUser] = useState({ name, id, profileImg });

  const [conversationMap, setConversationMap] = useState<Record<string, MessageItem[]>>(() => {
    const map: Record<string, MessageItem[]> = {};
    (allMessages as Message[]).forEach((msg) => {
      const userKey = generateRoomKey(99, msg.id, msg.type);
      map[userKey] = msg.messages;
    });
    return map;
  });

  const roomKey = generateRoomKey(currentUser.id, targetUser.id, type);
  const [messages, setMessages] = useState<MessageItem[]>(conversationMap[roomKey] || []);
  const [input, setInput] = useState('');

  const updateMessages = (message: MessageItem) => {
    const updated = [...messages, message];
    const key = generateRoomKey(currentUser.id, targetUser.id, type);
    setMessages(updated);
    setConversationMap((prev) => ({ ...prev, [key]: updated }));
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: MessageItem = {
      type: 'text',
      content: input,
      time: new Date().toISOString(),
      sender: currentUser.id,
    };
    updateMessages(newMessage);
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
    updateMessages(newMessage);
  };

  const handleHeaderClick = () => {
    const prevUser = { ...currentUser };
    const newKey = generateRoomKey(targetUser.id, prevUser.id, type);
    setCurrentUser(targetUser);
    setTargetUser(prevUser);
    setMessages(conversationMap[newKey] || []);
  };

  let lastDate = '';

  return (
    <div className="flex flex-col justify-between h-screen bg-grey-100">
      <div className="flex flex-col gap-2 p-4 overflow-y-auto flex-1">
        <ChatHeader name={targetUser.name} onClick={handleHeaderClick} />

        {messages.map((msg, idx) => {
          const currentDate = msg.time.split('T')[0];
          const isNewDate = currentDate !== lastDate;
          lastDate = currentDate;

          return (
            <div key={idx}>
              {isNewDate && (
                <div className="flex justify-center my-2">
                  <span className="text-caption2 text-grey-50 bg-grey-700 bg-opacity-50 px-2 rounded-[20px]">
                    {formatDate(msg.time)}
                  </span>
                </div>
              )}
              <ChatMessage
                message={msg}
                isMine={msg.sender === currentUser.id}
                senderInfo={msg.sender === currentUser.id ? currentUser : targetUser}
              />
            </div>
          );
        })}
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
