import { MessageItem } from '@/pages/ChatRoom';

type ChatMessageProps = {
  message: MessageItem;
  isMine: boolean;
};

const ChatMessage = ({ message, isMine }: ChatMessageProps) => {
  return (
    <div className={`flex ${isMine ? 'justify-end' : 'justify-start'} w-full`}>
      {message.type === 'text' ? (
        <div
          className={`shadow-bottommenu px-2 py-1 rounded-lg bg-grey-50 text-body2 text-grey-900 ${isMine ? ' rounded-tr-none' : ' rounded-tl-none'}`}
        >
          {message.content}
        </div>
      ) : (
        <img
          src={message.content}
          alt="uploaded"
          className={`w-auto h-[140px] object-cover rounded-lg ${isMine ? ' rounded-tr-none' : ' rounded-tl-none'}`}
        />
      )}
    </div>
  );
};

export default ChatMessage;
