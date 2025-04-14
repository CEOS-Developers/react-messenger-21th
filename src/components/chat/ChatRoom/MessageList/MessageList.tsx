import { useEffect, useRef } from 'react';
import * as S from './MessageList.Styled';
import * as Types from '@/types';
import * as Icons from '@/assets/icons/chatroom';
import MessageItem from '../MessageItem/MessageItem';
import { groupMessagesByDate, groupMessagesByConsecutiveUser } from './MessageList.utils';

type MessageListProps = {
  myId: string;
  userList: Types.UserList;
  messages: Types.Message[];
};

function MessageList({ myId, userList, messages }: MessageListProps) {
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
          <>
            <S.DateDivider className="bg-white-tp-01 !text-caption-04 text-grayscale-02">{dateStr}</S.DateDivider>
            {groupedByUser.map(({ senderId, messages }) => (
              <S.MessageListBody>
                {senderId !== myId && (
                  <S.UserInfo>
                    <Icons.Profile className="w-[36px] h-[36px]" />
                    <span className="!text-caption-04 text-grayscale-02">{userList[senderId] ?? 'NULL'}</span>
                  </S.UserInfo>
                )}
                <ul>
                  {messages.map((msg, idx) => (
                    <MessageItem
                      msg={msg}
                      isMine={senderId === myId}
                      isFirst={idx === 0}
                      nextMsg={idx < messages.length - 1 ? messages[idx + 1] : undefined}
                    />
                  ))}
                </ul>
              </S.MessageListBody>
            ))}
          </>
        );
      })}
      <div ref={messageEndRef} />
    </S.MessageListWrapper>
  );
}

export default MessageList;
