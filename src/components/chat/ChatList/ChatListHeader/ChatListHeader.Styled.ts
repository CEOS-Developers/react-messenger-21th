import styled from 'styled-components';

const ChatListHeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 162px;
  padding: 62px var(--phone-margin) 16px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  z-index: 890;
`;

const FeatureSection = styled.div`
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    gap: 8px;
    display: flex;
  }
`;

const SearchSection = styled.div`
  height: 36px;
  border-raidus: 4px;
  padding: 6px 9px;
  gap: 4px;
  display: flex;
  align-items: center;

  input {
    flex: 1;

    /* Mobile zoom in */
    font-size: 16px;
    transform: scale(0.875);
    transform-origin: left center;

    &:focus-visible,
    &:focus:not(:focus-visible) {
      outline: none;
    }
  }
`;

export { ChatListHeaderWrapper, FeatureSection, SearchSection };
