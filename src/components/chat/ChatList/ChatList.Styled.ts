import styled from 'styled-components';

const ChatListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ChatGroup = styled.ul`
  display: flex;
  flex-direction: column;

  &.top-group {
    margin-top: 162px;
  }
`;

export { ChatListWrapper, ChatGroup };
