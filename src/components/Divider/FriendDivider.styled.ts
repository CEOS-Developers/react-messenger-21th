import styled from 'styled-components';

export const FriendDivider = styled.div`
  width: 100%;
  height: 0.25px;
  /* margin-top: 0.8rem; */

  border-radius: 8px;

  background: ${({ theme }) => theme.colors.Grayscale[300]};
`;
