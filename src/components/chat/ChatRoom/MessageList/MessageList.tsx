import React, { useEffect, useRef } from 'react';
import * as S from './MessageList.Styled';
import * as Types from '@/types';
import { ProfileImage } from '@/assets/icons/profile';
import MessageItem from '../MessageItem/MessageItem';
import { groupMessagesByDate, groupMessagesByConsecutiveUser } from './MessageList.utils';

type MessageListProps = {
  chatId: string;
  myId: string;
  userList: Types.UserList;
  messages: Types.Message[];
};

function MessageList({ chatId, myId, userList, messages }: MessageListProps) {
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const groupedByDate = groupMessagesByDate(messages);

  return (
    <S.MessageListWrapper className="bg-background-blue-02">
      {groupedByDate.map(({ dateStr, messages }) => {
        const groupedByUser = groupMessagesByConsecutiveUser(messages);

        return (
          <React.Fragment key={`${chatId}-${dateStr}`}>
            <S.DateDivider className="bg-white-tp-01">
              <span className="!text-caption-04 text-grayscale-02">{dateStr}</span>
            </S.DateDivider>
            {groupedByUser.map(({ senderId, messages }) => {
              const user = userList[senderId];

              return (
                <S.MessageListBody key={`${chatId}-${dateStr}-${senderId}`}>
                  {senderId !== myId && (
                    <S.UserInfo>
                      <ProfileImage className={`w-[36px] h-[36px] ${user.profileColor ?? ''}`} />
                      <span className="!text-caption-04 text-grayscale-02">{user.name ?? 'NULL'}</span>
                    </S.UserInfo>
                  )}
                  <ul>
                    {messages.map((msg, idx) => (
                      <MessageItem
                        key={msg.id}
                        msg={msg}
                        isMine={senderId === myId}
                        isFirst={idx === 0}
                        nextMsg={idx < messages.length - 1 ? messages[idx + 1] : undefined}
                      />
                    ))}
                  </ul>
                </S.MessageListBody>
              );
            })}
          </React.Fragment>
        );
      })}
      <div ref={messageEndRef} />
    </S.MessageListWrapper>
  );
}

export default MessageList;
