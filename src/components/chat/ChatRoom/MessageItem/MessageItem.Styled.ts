import styled from 'styled-components';

const MessageItemWrapper = styled.li<{ $isMine: boolean }>`
  width: 100%;
  gap: 7px;
  display: flex;
  flex-direction: ${({ $isMine }) => ($isMine ? 'row-reverse' : 'row')};
  align-items: flex-end;
`;

const Bubble = styled.span<{ $isMine: boolean; $isFirst: boolean }>`
  padding: 6px 12px;
  border-radius: ${({ $isMine, $isFirst }) => {
    if (!$isFirst) return '20px';
    else if ($isMine) return '20px 4px 20px 20px';
    else return '4px 20px 20px 20px';
  }};
  display: flex;
  word-break: break-all;
  overflow-wrap: break-word;
`;

const Time = styled.span`
  flex-shrink: 0;
`;

export { MessageItemWrapper, Bubble, Time };
