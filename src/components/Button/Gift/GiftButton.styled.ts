import styled from 'styled-components';

export const GiftButtonContainer = styled.button`
  width: fit-content;
  height: 2.4rem;
  padding: 0 0.8rem 0 0.6rem;

  display: flex;
  align-items: center;
  gap: 0.2rem;

  border-radius: 1000px;
  border: 0.5px solid ${({ theme }) => theme.colors.Primary.Pink};

  ${({ theme }) => theme.fontStyles.Caption1_medium}
  color: ${({ theme }) => theme.colors.Primary.Pink};

  user-select: none;
`;
