import styled from 'styled-components';

export const ProfileImageBoxContainer = styled.div<{
  $size: number;
  $isProfileUpdated: boolean;
}>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  border-radius: 50%;
  border: ${({ $isProfileUpdated, theme }) =>
    $isProfileUpdated ? `1.5px solid ${theme.colors.Primary.Pink};` : 'none'};

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;
