import styled from 'styled-components';

const ChatItemWrapper = styled.li`
  padding: 10px var(--phone-margin);
  display: flex;

  .chat-link {
    padding-left: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
