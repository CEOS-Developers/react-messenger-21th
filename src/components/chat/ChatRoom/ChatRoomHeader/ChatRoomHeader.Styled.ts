import styled from 'styled-components';

const ChatRoomHeaderWrapper = styled.header`
  position: absolute;
  top: var(--statusbar-height);
  width: 100%;
  height: 46px;
  padding: 9px var(--phone-margin);
  display: flex;
  justify-content: space-between;
  z-index: 900;

  .components {
    gap: 8px;
    display: flex;
    align-items: center;

    span + span {
      margin-left: -4px; /* 8px -> 4px */
    }
  }
`;

export { ChatRoomHeaderWrapper };
