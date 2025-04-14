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
  display: flex;
  gap: 4px;
`;

const ChatPreview = styled.div`
  display: flex;
  gap: 8px;
`;

export { ChatItemWrapper, ChatTitle, ChatPreview };
