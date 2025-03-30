import Plus from '@/assets/images/icon/Plus.svg?react';
import Send from '@/assets/images/icon/Send.svg?react';
import Smile from '@/assets/images/icon/Smile.svg?react';
import storeMessage from '@/store/storeMessage';
import { ChatroomList } from '@/types/types';
import cn from '@/utils/cn';
import { Dispatch, SetStateAction, useRef, useState } from 'react';

const ChatInput = ({
  setChatroomData,
  chatroomId,
  user,
}: {
  setChatroomData: Dispatch<SetStateAction<ChatroomList>>;
  chatroomId: number;
  user: number;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isRounded, setIsRounded] = useState<boolean>(true);

  const handleResizeHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // 기존 height 초기화
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      if (textareaRef.current.scrollHeight > 50) {
        setIsRounded(false);
      } else {
        setIsRounded(true);
      }
    }
  };

  const [inputText, setInputText] = useState<string>('');

  const handleSend = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        chatroomId: chatroomId,
        senderId: user,
        text: inputText,
      };

      storeMessage(newMessage); // 로컬 스토리지에 저장
      const storedData = localStorage.getItem('chatrooms'); // 로컬 스토리지에서 꺼냄
      const chatroomsData = storedData ? JSON.parse(storedData) : []; // JSON을 객체로 변환
      setChatroomData(chatroomsData);

      // 입력 완료 후 입력 필드 초기화 및 재조정
      setInputText('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        setIsRounded(true);
      }
    }
  };

  return (
    <section
      className={cn(
        'flex sticky bottom-0 bg-white w-full px-4 py-3 gap-2 items-center z-50',
        { 'items-end': !isRounded }
      )}
    >
      <Plus className='w-6 h-6 items-center text-neutral-700 cursor-pointer my-2' />
      <span className='flex flex-1 relative'>
        <textarea
          ref={textareaRef}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onInput={handleResizeHeight}
          rows={1}
          className={cn(
            'flex flex-1 border border-neutral-200 rounded-[3.125rem] pl-3 pr-12 py-2 overflow-y-auto whitespace-break-spaces max-h-[8.75rem] resize-none scrollbar-hide',
            { 'rounded-[1rem]': !isRounded }
          )}
        />
        <Smile className='w-6 h-6 text-neutral-300 absolute bottom-[9px] right-3 cursor-pointer' />
      </span>
      <Send
        className='w-6 h-6 items-center text-neutral-600 cursor-pointer my-2'
        tabIndex={0}
        onClick={handleSend}
      />
    </section>
  );
};

export default ChatInput;
