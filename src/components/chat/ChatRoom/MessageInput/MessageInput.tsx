import { useEffect, useState, useRef } from 'react';
import * as S from './MessageInput.Styled';
import * as Icons from '@/assets/icons/chatroom';
import { useChatList } from '@/contexts/localStorage';

type MessageInputProps = {
  chatId: string;
  myId: string;
};

function MessageInput({ chatId, myId }: MessageInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  const { onSend } = useChatList();

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    const newHeight = Math.min(textarea.scrollHeight, 110); // 5 rows
    textarea.style.height = `${newHeight}px`;
  }, [text]);

  const onClickToSend = () => {
    if (!text.trim() || !chatId) return;

    onSend(chatId, myId, text.trim());
    setText('');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !isComposing) {
      if (e.shiftKey) return;
      e.preventDefault();
      onClickToSend();
    }
  };

  return (
    <S.MessageInputWrapper>
      <S.FeatureSection>
        <Icons.Add className="w-[24px] h-[24px] text-grayscale-03" />
        <Icons.Camera className="w-[24px] h-[24px] text-grayscale-03" />
      </S.FeatureSection>
      <S.InputSection className="bg-grayscale-06 shadow-[inset_0_0_0_1px_theme(colors.grayscale-03)]">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKeyDown}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          placeholder=""
          rows={1}
          className="!text=body-01 text-grayscale-00-black"
        />
        <div>
          <Icons.Imoji className="w-[24px] h-[24px] text-grayscale-03" />
          {text.length > 0 ? (
            <button onClick={onClickToSend} className="cursor-pointer">
              <Icons.Send className="w-[24px] h-[24px]" />
            </button>
          ) : (
            <Icons.Link className="w-[24px] h-[24px] text-grayscale-03" />
          )}
        </div>
      </S.InputSection>
    </S.MessageInputWrapper>
  );
}

export default MessageInput;
