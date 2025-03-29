import React from 'react';
import ProfileIcon from '../../assets/profile.svg?react';

interface ChatMessageProps {
  isMe: boolean;
  text: string;
  timestamp: string;
  isRead?: boolean;
  senderName?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  isMe,
  text,
  timestamp,
  isRead = false,
  senderName,
}) => {
  return (
    <div
      className={`flex w-full justify-start ${isMe ? 'flex-row-reverse pr-5 pl-6' : 'pr-6 pl-5'}`}
    >
      {/* (상대방) 채팅  프로필 && 상대방 이름*/}
      {!isMe && (
        <div className="mr-1.5 flex items-start">
          <ProfileIcon className="h-10 w-10 rounded-full" />
        </div>
      )}

      {/*이름, 채팅 버블 */}
      <div className="flex w-auto flex-col items-start gap-1">
        {/* (상대방) 채팅 상단 이름*/}
        {!isMe && (
          <span className="text-xs leading-[140%] font-medium tracking-[0.06px] text-black">
            {senderName}
          </span>
        )}

        {/*  채팅 버블*/}
        <div
          className={`relative rounded-xl px-3 py-1.5 text-sm leading-[150%] font-normal tracking-[0.035px] break-words whitespace-pre-line text-black ${
            isMe
              ? 'rounded-br-[2px] bg-green-200'
              : 'rounded-tl-[2px] bg-gray-100'
          }`}
        >
          {text}
        </div>
      </div>

      {/* 읽음 여부, 시간 */}
      <div
        className={`flex min-w-fit flex-col ${isMe ? 'mr-1 items-end' : 'ml-1 items-start'} justify-end text-xs text-gray-400`}
      >
        <span>{isMe ? (isRead ? '읽음' : '안 읽음') : ''}</span>
        <span>{timestamp}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
