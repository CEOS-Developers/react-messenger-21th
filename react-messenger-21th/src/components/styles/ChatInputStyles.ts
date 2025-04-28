import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  flex: 1;
`;

export const ChatInputWrapper = styled.div`
  width: 303px;
  height: auto;
  display: flex;
  padding: 8px 12px;
  align-items: flex-end;
  justify-content: space-between; // 양끝 정렬
  gap: 12px;
  border-radius: 12px;
  border: 1px solid var(--Grey-Grey04, #9ca3af);
  background: var(--Grey-Grey01, #f3f4f6);
`;

export const InputArea = styled.textarea`
  resize: none; // 크기 조정 불가능
  flex: 1;
  background-color: transparent;
  color: #374151;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.21px;
  border: none;
  outline: none;
  min-width: 0px;
  max-width: 229px;
  max-
  word-break: break-all;
  overflow-wrap: break-word; // 백업용
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 2px;
`;
