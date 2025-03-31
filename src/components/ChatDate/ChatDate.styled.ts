import styled from 'styled-components';

export const ChatDateContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 1.6rem;
  margin-bottom: 0.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatDateLabel = styled.p`
  width: fit-content;
  height: fit-content;
  padding: 0.2rem 1.2rem;

  border-radius: 16px;

  ${({ theme }) => theme.fontStyles.Caption1_medium};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.Grayscale[200]};
  background-color: ${({ theme }) => theme.colors.Grayscale[700]};

  @media (max-width: 375px) {
    font-size: 1.1rem;
  }
`;
