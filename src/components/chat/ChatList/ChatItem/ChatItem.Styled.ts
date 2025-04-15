import styled from 'styled-components';

const ChatItemWrapper = styled.li`
  display: flex;

  .chat-link {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

const ChatTitle = styled.div`
  gap: 4px;
  display: flex;
`;

const ChatPreview = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
`;

export { ChatItemWrapper, ChatTitle, ChatPreview };
