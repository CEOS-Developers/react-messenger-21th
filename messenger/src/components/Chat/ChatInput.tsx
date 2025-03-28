import AddIcon from '../../assets/plus.svg?react';
import EmojiIcon from '../../assets/emoji.svg?react';
import SendIcon from '../../assets/send.svg?react';

import { useRef } from 'react';

const ChatInput = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const maxHeight = 24 * 3; // line-height: 24px × 4줄
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
    }
  };
  return (
    <div className="flex h-auto w-full flex-col items-start gap-2.5 border-t-1 border-t-gray-100 bg-white px-5 pt-2 pb-13">
      <div className="flex min-h-6 items-start justify-between gap-2 self-stretch">
        <AddIcon />
        <EmojiIcon />
        <textarea
          ref={textareaRef}
          onInput={handleInput}
          rows={1}
          placeholder="메시지를 입력하세요"
          className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-200 scrollbar-track-transparent flex flex-1 resize-none overflow-y-auto text-sm leading-6 font-normal tracking-[0.035px] text-black placeholder-gray-300 outline-none"
        />

        <SendIcon />
      </div>
    </div>
  );
};

export default ChatInput;
