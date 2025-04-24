import { useRef, useState } from 'react';
import PlusBtn from '@/assets/svgs/chatroom/PlusBtn.svg?url';
import CameraBtn from '@/assets/svgs/chatroom/CameraBtn.svg?url';
import GalleryBtn from '@/assets/svgs/chatroom/GalleryBtn.svg?url';
import EmoticonBtn from '@/assets/svgs/chatroom/EmoticonBtn.svg?url';
import MicrophoneBtn from '@/assets/svgs/chatroom/MicrophoneBtn.svg?url';
import SendBtn from '@/assets/svgs/chatroom/SendBtn.svg?url';

import clsx from 'clsx';
import { useMobile } from '@/hooks/useMobile';

type ChatInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
  onImageSend?: (file: File) => void;
};

const ChatInput = ({ value, onChange, onSend, onImageSend }: ChatInputProps) => {
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isMobile = useMobile();
  const [isComposing, setIsComposing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 이미지 파일인지 확인
    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드할 수 있습니다.');
      return;
    }

    if (onImageSend) {
      onImageSend(file);
    }
    e.target.value = '';
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <div
      className={clsx(
        'flex items-center w-[375px] bottom-0 py-2 px-4 shadow-default bg-grey-50',
        isMobile ? 'fixed' : 'sticky',
      )}
    >
      {/* 파일 업로드 input */}
      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={cameraInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      <input type="file" accept="image/*" ref={galleryInputRef} className="hidden" onChange={handleFileChange} />

      {/* 버튼 영역 */}
      <div className="flex gap-4 w-[122px]">
        <button aria-label="추가">
          <img src={PlusBtn} className="w-6 h-6 cursor-pointer" />
        </button>
        <button onClick={() => cameraInputRef.current?.click()} aria-label="카메라">
          <img src={CameraBtn} className="w-6 h-6 cursor-pointer" />
        </button>
        <button onClick={() => galleryInputRef.current?.click()} aria-label="갤러리">
          <img src={GalleryBtn} className="w-6 h-6 cursor-pointer" />
        </button>
      </div>

      {/* 텍스트 입력 영역 */}
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleTextareaChange}
          placeholder="텍스트를 입력해주세요"
          rows={1}
          className="flex-1 w-[191px] border-grey-100 border-[0.5px] pr-[37px] scrollbar-hide max-h-[79px] bg-grey-75 rounded-lg p-2 outline-none body-2 text-grey-900 placeholder:text-grey-400 resize-none"
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter' && !isComposing) {
              if (e.shiftKey) return;
              e.preventDefault();
              onSend();
            }
          }}
        />
        <img src={EmoticonBtn} className="w-6 h-6 cursor-pointer absolute right-2 top-1/2 -translate-y-1/2" />
      </div>

      {/* 전송 or 마이크 버튼 */}
      {value.trim() ? (
        <button onClick={onSend} className="cursor-pointer">
          <img src={SendBtn} className="w-6 h-6 ml-2" />
        </button>
      ) : (
        <button className="cursor-pointer">
          <img src={MicrophoneBtn} className="w-6 h-6 ml-2" />
        </button>
      )}
    </div>
  );
};

export default ChatInput;
