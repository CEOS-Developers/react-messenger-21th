import styled from 'styled-components';

export const MyProfileCellContainer = styled.a`
  position: relative;

  width: 100%;
  height: fit-content;
  padding: 1.2rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: default;

  // 추후 모바일 터치와 호버 구체화 예정
  &:hover {
    background-color: ${({ theme }) => theme.colors.Grayscale[100]};
  }
`;

export const MyProfileInfoSection = styled.section`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const MyProfileName = styled.p`
  ${({ theme }) => theme.fontStyles.Subhead_medium}
  color: ${({ theme }) => theme.colors.Grayscale[1000]};

  user-select: none;
`;

export const MultiProfileButton = styled.button`
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
