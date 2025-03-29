import styled from 'styled-components';

export const MultiProfileButtonContainer = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.2rem 0.4rem 0.2rem 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1000px;
  border: 0.5px solid ${({ theme }) => theme.colors.Grayscale[500]};

  white-space: nowrap;
  user-select: none;

  ${({ theme }) => theme.fontStyles.Caption1_medium}
  color: ${({ theme }) => theme.colors.Grayscale[500]};
`;
