import styled from 'styled-components';
import { Link } from 'react-router';

export const ChatRoomPreviewContainer = styled(Link)`
  width: 100%;
  height: 8rem;
  padding: 1.2rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Grayscale[100]};
  }
`;

export const ChatRoomPreviewProfileWrapper = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export const ChatRoomPreviewContent = styled.div`
  flex: 1;

  width: fit-content;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ChatRoomName = styled.p`
  margin-bottom: 0.2rem;

  ${({ theme }) => theme.fontStyles.Body1_medium};
  color: ${({ theme }) => theme.colors.Grayscale[1000]};
`;

export const ChatRoomLastMessage = styled.p`
  width: 100%;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Caption1_medium};
  font-weight: 400;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.Grayscale[500]};

  overflow: hidden;
  text-overflow: ellipsis;

  // 멀티라인 말 줄임표 처리
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const LastMessageTimeUnReadCountWrapper = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const LastMessageTime = styled.p`
  ${({ theme }) => theme.fontStyles.Caption1_medium};
  font-weight: 400;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.Grayscale[500]};

  white-space: nowrap;
`;

export const UnReadCount = styled.p`
  width: fit-content;
  height: fit-content;
  padding: 0.2rem 0.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fontStyles.Caption2}
  color: ${({ theme }) => theme.colors.Grayscale[0]};

  border-radius: 48px;

  background-color: ${({ theme }) => theme.colors.Primary.Pink};
`;
