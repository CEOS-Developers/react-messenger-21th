import Plus from '@/assets/images/icon/Plus.svg?react';
import Send from '@/assets/images/icon/Send.svg?react';
import Smile from '@/assets/images/icon/Smile.svg?react';
import useMessageStore from '@/store/useMessageStore';
import cn from '@/utils/cn';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import MoreModal, { ErrorModal } from './MoreModal';

interface newMessageType {
  type: 'text' | 'image' | 'file';
  chatroomId: string | undefined;
  senderId: number;
  content: string | File;
  setShowErrorModal: Dispatch<SetStateAction<string>>;
}

const ChatInput = ({
  chatroomId,
  user,
}: {
  chatroomId: string | undefined;
  user: number;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isRounded, setIsRounded] = useState<boolean>(true);
  const [more, setMore] = useState<boolean>(false); // 더보기 버튼(사진, 파일 전송 등)
  const [showErrorModal, setShowErrorModal] = useState<string>('');
  const { storeMessage } = useMessageStore();

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      if (e.shiftKey) return;
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (inputText.trim() !== '') {
      const newMessage: newMessageType = {
        type: 'text',
        chatroomId: chatroomId,
        senderId: user,
        content: inputText,
        setShowErrorModal: setShowErrorModal,
      };

      storeMessage(newMessage);

      // 입력 완료 후 입력 필드 초기화 및 재조정
      setInputText('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        setIsRounded(true);
      }
    }
  };

  const convertToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSendImages = async (images: File[]) => {
    const newMessages: newMessageType[] = await Promise.all(
      images.map(async (image) => {
        const base64Image = await convertToBase64(image);
        return {
          type: 'image',
          chatroomId: chatroomId,
          senderId: user,
          content: base64Image,
          setShowErrorModal: setShowErrorModal,
        };
      })
    );

    newMessages.forEach((message) => storeMessage(message));
  };

  const handleSendFiles = async (files: File[]) => {
    const newMessages: newMessageType[] = await Promise.all(
      files.map(async (file) => {
        const base64File = await convertToBase64(file);
        return {
          type: 'file',
          chatroomId: chatroomId,
          senderId: user,
          content: base64File,
          contentName: file.name,
          setShowErrorModal: setShowErrorModal,
        };
      })
    );

    newMessages.forEach((message) => storeMessage(message));
  };

  return (
    <>
      <section
        className={cn(
          'flex sticky bottom-0 bg-white w-full px-4 py-3 gap-2 items-center z-50',
          { 'items-end': !isRounded }
        )}
      >
        <Plus
          aria-label='More Button'
          className={cn(
            'w-6 h-6 items-center text-neutral-700 cursor-pointer my-2 transition-transform duration-200 ease-out',
            {
              '-rotate-45': more,
            }
          )}
          onClick={() => setMore((prev) => !prev)}
        />
        <span className='flex flex-1 relative'>
          <textarea
            ref={textareaRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) =>
              handleKeyDown(e)
            }
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
      {more && (
        <MoreModal
          onClose={() => setMore((prev) => !prev)}
          handleSendImages={handleSendImages}
          handleSendFiles={handleSendFiles}
          setShowErrorModal={setShowErrorModal}
        />
      )}
      {showErrorModal && (
        <ErrorModal
          text={showErrorModal}
          setShowErrorModal={setShowErrorModal}
        />
      )}
    </>
  );
};

export default ChatInput;
