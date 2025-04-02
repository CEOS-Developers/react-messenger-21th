import styled from 'styled-components';

export const GiftButtonContainer = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.2rem 0.8rem 0.2rem 0.6rem;

  display: flex;
  align-items: center;
  gap: 0.2rem;

  border-radius: 1000px;
  border: 1px solid ${({ theme }) => theme.colors.Primary.Pink};

  ${({ theme }) => theme.fontStyles.Caption1_medium}
  color: ${({ theme }) => theme.colors.Primary.Pink};

  user-select: none;
`;
