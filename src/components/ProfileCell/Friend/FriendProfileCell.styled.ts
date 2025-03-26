import styled from 'styled-components';

export const FriendProfileCellWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.8rem 0;
`;

export const FriendProfileCellSection = styled.section`
  width: 100%;
  height: fit-content;
`;

export const FriendProfileCellList = styled.ul`
  width: 100%;
  height: fit-content;
`;

export const FriendProfileCellItem = styled.li`
  width: 100%;
  height: fit-content;
  margin-bottom: 0.4rem;
`;

export const FriendProfileCellItemLink = styled.a`
  width: 100%;
  height: fit-content;
  padding: 0.8rem 2rem;

  display: flex;
  align-items: center;
  gap: 1.4rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Grayscale[100]};
  }
`;

export const FriendProfileName = styled.p`
  ${({ theme }) => theme.fontStyles.Body2_medium};
  color: ${({ theme }) => theme.colors.Grayscale[1000]};
`;
