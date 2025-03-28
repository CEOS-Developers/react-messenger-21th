import Plus from '@/assets/images/icon/Plus.svg?react';
import Send from '@/assets/images/icon/Send.svg?react';
import Smile from '@/assets/images/icon/Smile.svg?react';
import storeMessage from '@/store/storeMessage';
import { ChatroomList } from '@/types/types';
import { Dispatch, SetStateAction, useRef, useState } from 'react';

const ChatInput = ({
  setChatroomData,
  chatroomId,
}: {
  setChatroomData: Dispatch<SetStateAction<ChatroomList>>;
  chatroomId: number;
}) => {
  const textareaRef = useRef(null);
  const [inputText, setInputText] = useState<string>('');

  const handleSend = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        chatroomId: chatroomId,
        senderId: 0,
        text: inputText,
      };

      storeMessage(newMessage); // 로컬 스토리지에 저장
      const storedData = localStorage.getItem('chatrooms'); // 로컬 스토리지에서 꺼냄
      const chatroomsData = storedData ? JSON.parse(storedData) : []; // JSON을 객체로 변환
      setChatroomData(chatroomsData);
      setInputText('');
    }
  };

  return (
    <section className='flex sticky bottom-0 bg-white w-full px-4 py-3 gap-2 items-center'>
      <Plus className='w-6 h-6 items-center text-neutral-700 cursor-pointer' />
      <span className='flex flex-1 relative'>
        <textarea
          ref={textareaRef}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={1}
          cols={1}
          className='flex flex-1 border border-neutral-200 rounded-[50px] pl-3 pr-12 py-2 overflow-y-auto whitespace-break-spaces max-h-[11.25rem] resize-none'
        />
        <Smile className='w-6 h-6 text-neutral-300 absolute top-2 right-3 cursor-pointer' />
      </span>
      <Send
        className='w-6 h-6 items-center text-neutral-600 cursor-pointer'
        tabIndex={0}
        onClick={handleSend}
      />
    </section>
  );
};

export default ChatInput;
