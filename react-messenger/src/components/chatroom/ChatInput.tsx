import { useRef, useState } from 'react';
import PlusBtn from '@/assets/svgs/chatroom/PlusBtn.svg?url';
import CameraBtn from '@/assets/svgs/chatroom/CameraBtn.svg?url';
import GalleryBtn from '@/assets/svgs/chatroom/GalleryBtn.svg?url';
import EmoticonBtn from '@/assets/svgs/chatroom/EmoticonBtn.svg?url';
import MicrophoneBtn from '@/assets/svgs/chatroom/MicrophoneBtn.svg?url';
import SendBtn from '@/assets/svgs/chatroom/SendBtn.svg?url';

type ChatInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onImageSend?: (file: File) => void;
};

const ChatInput = ({ value, onChange, onSend, onImageSend }: ChatInputProps) => {
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  const handleCameraClick = () => {
    cameraInputRef.current?.click();
  };

  const handleGalleryClick = () => {
    galleryInputRef.current?.click();
  };

  const [isComposing, setIsComposing] = useState(false);

  return (
    <div className="flex items-center w-[375px] sticky bottom-0 py-2 px-4 shadow-bottommenu bg-grey-50">
      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={cameraInputRef}
        className="hidden"
        onChange={(e: any) => {
          const file = e.target.files?.[0];
          if (file && onImageSend) {
            onImageSend(file);
          }
        }}
      />
      <input
        type="file"
        accept="image/*"
        ref={galleryInputRef}
        className="hidden"
        onChange={(e: any) => {
          const file = e.target.files?.[0];
          if (file && onImageSend) {
            onImageSend(file);
          }
        }}
      />
      <div className="flex gap-4 w-[122px]">
        <img src={PlusBtn} className="w-6 h-6" />
        <img src={CameraBtn} className="w-6 h-6" onClick={handleCameraClick} />
        <img src={GalleryBtn} className="w-6 h-6" onClick={handleGalleryClick} />
      </div>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e as any)} // 타입 맞추기용
          placeholder="텍스트를 입력해주세요"
          rows={1}
          className="flex-1 w-[191px] border-grey-100 border-[0.5px] pr-[37px] bg-grey-75 rounded-lg p-2 outline-none text-body2 text-grey-900 placeholder:text-grey-400 resize-none"
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter' && !isComposing) {
              if (e.shiftKey) return; // Shift+Enter는 줄바꿈 허용
              e.preventDefault();
              onSend();
            }
          }}
        />
        <img src={EmoticonBtn} className="w-6 h-6 cursor-pointer absolute right-2 top-[6.5px]" />
      </div>
      {value.trim() ? (
        <img src={SendBtn} className="w-6 h-6 ml-2 cursor-pointer" onClick={onSend} />
      ) : (
        <img src={MicrophoneBtn} className="w-6 h-6 ml-2 cursor-pointer" />
      )}
    </div>
  );
};

export default ChatInput;
