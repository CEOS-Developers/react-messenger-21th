import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as S from './ChatRoom.Styled';
import * as Types from '@/types';
import * as Icons from '@/assets/icons/chatroom';
import { loadData, loadMyId, saveMyId, loadDB, saveDB } from '@/services/localStorage';
import idData from '@/assets/data/idData.json';
import dbData from '@/assets/data/dbData.json';
import { groupMessagesByDate, groupMessagesByConsecutiveUser, formatTime, onSend } from '@/utils/chatRoomUtils';
import togglePin from '@/utils/togglePin';

function ChatRoom() {
  const { chatId } = useParams();
  const [myId, setMyId] = useState('');
  const [db, setDB] = useState<Types.User | null>(null);
  const [chatRoom, setChatRoom] = useState<Types.ChatRoom | null>(null);
  const [text, setText] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const myId = loadMyId();
    if (!myId) {
      saveMyId(idData);
      setMyId(idData);
    } else {
      setMyId(myId);
    }
  }, []);

  useEffect(() => {
    const userDB = loadDB();
    if (!db) {
      saveDB(dbData);
      setDB(dbData);
    } else {
      setDB(userDB);
    }
  }, []);

  useEffect(() => {
    const data = loadData();
    if (chatId && data[chatId]) {
      setChatRoom(data[chatId]);
    }
  }, [chatId]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    const newHeight = Math.min(textarea.scrollHeight, 110);
    textarea.style.height = `${newHeight}px`;
  }, [text]);

  useEffect(() => {
    scrollToBottom();
  }, [chatRoom]);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTogglePin = () => {
    if (!chatId || !chatRoom) return;
    const [_, updated] = togglePin(chatId, chatRoom);
    setChatRoom(updated);
  };

  const handleSend = () => {
    if (!text.trim() || !chatId) return;
    const updated = onSend(chatId, myId, text.trim());
    if (updated) {
      setChatRoom(updated);
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !isComposing) {
      if (e.shiftKey) return;
      e.preventDefault();
      handleSend();
    }
  };

  const Pin = chatRoom?.isPinned ? Icons.PinOn : Icons.PinOff;

  const renderMessageList = (messages: Types.Message[]) => {
    const groupedMessages = groupMessagesByDate(messages);

    return Object.entries(groupedMessages).map(([dateStr, messages]) => (
      <div key={dateStr} className="flex flex-col gap-[15px]">
        <S.DateDivider className="bg-white-tp-01">
          <span className="!text-caption-04 text-grayscale-02">{dateStr}</span>
        </S.DateDivider>

        <div className="flex flex-col gap-[16px]">
          {groupMessagesByConsecutiveUser(messages).map((group, idx) => {
            const isMine = group.senderId === myId;

            return (
              <div key={`${dateStr}-${idx}`} className="flex flex-row gap-[12px]">
                {!isMine && (
                  <S.UserName>
                    <Icons.Profile className="w-[36px] h-[36px]" />
                    <span className="!text-caption-04 text-grayscale-02 text-center">
                      {(dbData as Types.User)[group.senderId] ?? 'NULL'}
                    </span>
                  </S.UserName>
                )}
                <div className="w-full flex flex-col gap-[6px]">
                  {group.messages.map((msg, i) => {
                    const next: Types.Message | undefined = group.messages[i + 1];
                    const shouldShowTime = !next || formatTime(next.timestamp) !== formatTime(msg.timestamp);

                    return (
                      <S.MessageItem key={msg.id} $isMine={isMine}>
                        <S.Bubble
                          className={`!text-body-02 text-grayscale-00-black ${isMine ? 'bg-point-green' : 'bg-grayscale-07-white'}`}
                          $isMine={isMine}
                          $isFirst={i === 0}
                        >
                          {msg.text}
                        </S.Bubble>
                        {shouldShowTime && (
                          <S.Time className="!text-caption-04 text-grayscale-05">{formatTime(msg.timestamp)}</S.Time>
                        )}
                      </S.MessageItem>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ));
  };

  if (!chatRoom) return <S.ChatRoomWrapper>ERROR</S.ChatRoomWrapper>;

  return (
    <S.ChatRoomWrapper className="bg-grayscale-07-white">
      <S.ChatRoomHeader className="bg-background-blue-02-opacity">
        <div className="flex flex-row items-center gap-[8px]">
          <Link to="/chat" className="cursor-pointer">
            <Icons.Back className="w-[24px] h-[24px]" />
          </Link>
          <div className="flex flex-row gap-[4px]">
            <span className="!text-headline-03 text-grayscale-00-black">{chatRoom.title}</span>
            {chatRoom.userIds.length > 2 && (
              <span className="!text-headline-04 text-black-tp-03">{chatRoom.userIds.length}</span>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-[8px]">
          <button onClick={handleTogglePin} className="cursor-pointer">
            <Pin className="w-[24px] h-[24px]" />
          </button>
          <Icons.Search className="w-[24px] h-[24px]" />
          <Icons.Menu className="w-[24px] h-[24px]" />
        </div>
      </S.ChatRoomHeader>
      <S.MessageList className="bg-background-blue-02 gap-[15px]">
        {chatRoom.messages.length > 0 && renderMessageList(chatRoom.messages)}
        <div ref={messageEndRef} />
      </S.MessageList>
      <S.ChatRoomFooter className="bg-grayscale-07-white">
        <div className="flex flex-row items-center gap-[4px]">
          <Icons.AddGray className="w-[24px] h-[24px]" />
          <Icons.CameraGray className="w-[24px] h-[24px]" />
        </div>
        <S.MessageInputContainer className="bg-grayscale-06 inline border border-grayscale-03">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
            placeholder=""
            rows={1}
            className="!text=body-01 text-grayscale-00-black"
          />
          <div className="flex flex-row items-center gap-[4px]">
            <Icons.ImojiGray className="w-[24px] h-[24px]" />
            {text.length > 0 ? (
              <button onClick={handleSend} className="cursor-pointer">
                <Icons.Send className="w-[24px] h-[24px]" />
              </button>
            ) : (
              <Icons.LinkGray className="w-[24px] h-[24px]" />
            )}
          </div>
        </S.MessageInputContainer>
      </S.ChatRoomFooter>
    </S.ChatRoomWrapper>
  );
}

export default ChatRoom;
