import styled from 'styled-components';

const ChatRoomWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ChatRoomHeader = styled.header`
  position: absolute;
  top: var(--statusbar-height);
  width: 100%;
  height: 46px;
  padding: 9px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 900;
`;

const MessageList = styled.ul`
  flex: 1;
  padding: 112px 16px 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DateDivider = styled.div`
  width: fit-content;
  height: 22px;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
  padding: 0 10px; /* set padding 3px -> 0px */
`;

const UserName = styled.div`
  width: 36px;
  height: 52px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const MessageItem = styled.li<{ $isMine: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ $isMine }) => ($isMine ? 'row-reverse' : 'row')};
  align-items: flex-end;
  gap: 7px;
`;

const Bubble = styled.span<{ $isMine: boolean; $isFirst: boolean }>`
  display: flex;
  align-items: center;
  border-radius: ${({ $isMine, $isFirst }) => {
    if (!$isFirst) return '20px';
    if ($isMine) return '20px 4px 20px 20px';
    return '4px 20px 20px 20px';
  }};
  padding: 6px 12px;
  word-break: break-word;
  white-space: pre-wrap;
`;

const Time = styled.span`
  white-space: nowrap;
  flex-shrink: 0;
`;

const ChatRoomFooter = styled.footer`
  min-height: 84px;
  padding: 10px 16px 40px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const MessageInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  padding: 5px 18px;

  textarea {
    flex: 1;
    line-height: 22px;
    max-height: 110px;
    overflow-y: overlay;
    resize: none;
    cursor: pointer;
    word-break: break-word;
    white-space: pre-wrap;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  textarea:focus-visible,
  textarea:focus:not(:focus-visible) {
    outline: none;
  }
`;

export { ChatRoomWrapper, ChatRoomHeader, MessageList, ChatRoomFooter };
export { DateDivider, UserName, MessageItem, Bubble, Time };
export { MessageInputContainer };
