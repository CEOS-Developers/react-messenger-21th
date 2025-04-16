import styled from 'styled-components';

const ChatListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ChatGroupWrapper = styled.div`
  padding-bottom: 83px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatGroup = styled.ul`
  display: flex;
  flex-direction: column;

  &.top-group {
    margin-top: 162px;
  }
`;

export { ChatListWrapper, ChatGroupWrapper, ChatGroup };
