import styled from 'styled-components';

export const ChatMessageWrapper = styled.div<{ $isMyMessage: boolean }>`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: ${({ $isMyMessage }) =>
    $isMyMessage ? 'flex-end' : 'flex-start'};
`;

export const ChatMessageSenderWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const SenderInfoContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ChatMessageSender = styled.p`
  ${({ theme }) => theme.fontStyles.Caption1_medium};
  color: ${({ theme }) => theme.colors.Grayscale[800]};
`;

export const ChatMessageContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: flex-end;
  gap: 0.4rem;
`;

export const ChatMessageBox = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.6rem 1rem;

  border-radius: 10px;

  ${({ theme }) => theme.fontStyles.Body2_regular};
  color: ${({ theme }) => theme.colors.Grayscale[1000]};
  background-color: ${({ theme }) => theme.colors.Grayscale[0]};
`;

export const ChatMessageTime = styled.p`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Caption2}
  font-weight: 400;
  color: ${({ theme }) => theme.colors.Grayscale[500]};

  white-space: nowrap;
`;
