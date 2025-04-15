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

  li {
    gap: 8px;
    display: flex;
  }

  &.top-group {
    margin-top: 162px;
  }
`;

export { ChatListWrapper, ChatGroup };
