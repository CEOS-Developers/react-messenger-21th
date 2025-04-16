import styled from 'styled-components';

const MessageInputWrapper = styled.div`
  min-height: 84px;
  padding: 10px var(--phone-margin) 40px;
  gap: 10px;
  display: flex;
`;

const FeatureSection = styled.div`
  padding: 5px 0;
  gap: 4px;
  display: flex;
  align-items: flex-end;
`;

const InputSection = styled.div`
  border-radius: 24px;
  padding: 5px 18px;
  gap: 10px;
  display: flex;
  flex: 1;

  textarea {
    width: 100%;
    line-height: 22px;
    flex: 1;
    resize: none;
    word-break: break-all;
    overflow-wrap: break-word;

    &:focus-visible,
    &:focus:not(:focus-visible) {
      outline: none;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  div {
    gap: 4px;
    display: flex;
    align-items: flex-end;
  }
`;

export { MessageInputWrapper, FeatureSection, InputSection };
