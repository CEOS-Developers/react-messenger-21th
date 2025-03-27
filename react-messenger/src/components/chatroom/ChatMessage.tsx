import { MessageItem } from '@/type/message';
import { formatTime } from '@/utils/formatDate';

interface SenderInfo {
  name: string;
  profileImg: string;
}

type ChatMessageProps = {
  message: MessageItem;
  isMine: boolean;
  senderInfo: SenderInfo;
};

const ChatMessage = ({ message, isMine, senderInfo }: ChatMessageProps) => {
  return (
    <div className={`flex items-start ${isMine ? 'justify-end' : 'justify-start'} w-full`}>
      <div className="flex items-center gap-2 mb-1">
        {!isMine && (
          <img src={senderInfo.profileImg} alt={senderInfo.name} className="w-12 h-12 rounded-full object-cover" />
        )}
      </div>

      <div className="flex flex-col gap-1 ml-2">
        {!isMine && <span className="text-caption2 text-grey-500">{senderInfo.name}</span>}
        <div className={`flex items-end gap-1 ${isMine ? 'flex-row-reverse' : 'flex-row'}`}>
          {message.type === 'text' ? (
            <div
              className={`max-w-[216px] shadow-bottommenu px-2 py-1 rounded-lg bg-grey-50 text-body2 text-grey-900 ${isMine ? 'rounded-tr-none' : 'rounded-tl-none'}`}
            >
              {message.content}
            </div>
          ) : (
            <img
              src={message.content}
              alt="uploaded"
              className={`w-auto h-[140px] object-cover rounded-lg ${isMine ? 'rounded-tr-none' : 'rounded-tl-none'}`}
            />
          )}
          <span className="text-caption2 text-grey-400">{formatTime(message.time)}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
