import styled from 'styled-components';

const MessageListWrapper = styled.div`
  padding: 112px var(--phone-margin) 0;
  gap: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DateDivider = styled.div`
  width: fit-content;
  height: 22px;
  border-radius: 10px;
  padding: 3px 10px;
  display: flex;
  align-items: center;
  align-self: center;
`;

const MessageListBody = styled.div`
  gap: 12px;
  display: flex;

  ul {
    width: 100%;
    gap: 6px;
    display: flex;
    flex-direction: column;
  }
`;

const UserInfo = styled.div`
  width: 36px;
  height: 52px;
  gap: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { MessageListWrapper, DateDivider, MessageListBody, UserInfo };
