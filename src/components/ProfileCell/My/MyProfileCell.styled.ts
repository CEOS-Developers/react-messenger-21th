import styled from 'styled-components';

export const MyProfileCellWrapper = styled.section`
  width: 100%;
  height: fit-content;
  padding-bottom: 0.8rem;
`;

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
