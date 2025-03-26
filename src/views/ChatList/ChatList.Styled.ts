import styled from 'styled-components';

const ChatListWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ChatGroup = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px 16px;

  li {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;

const ChatTitle = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ChatPreview = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export { ChatListWrapper, ChatGroup, ChatTitle, ChatPreview };
