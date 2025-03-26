import styled from 'styled-components';

export const FriendPageSubTitle = styled.h3`
  padding-left: 2rem;
  margin-bottom: 1.2rem;

  ${({ theme }) => theme.fontStyles.Caption1_medium}
  color: ${({ theme }) => theme.colors.Grayscale[500]};

  user-select: none;

  span {
    margin-left: 0.6rem;
  }
`;
