import styled from 'styled-components';

const ChatRoomWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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

const MessageList = styled.ul``;

const MessageItem = styled.li``;

const MessageInputWrapper = styled.div``;

export { ChatRoomWrapper, ChatRoomHeader, MessageList, MessageItem, MessageInputWrapper };
